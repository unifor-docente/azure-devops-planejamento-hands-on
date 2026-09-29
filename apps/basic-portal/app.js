const requests = [
  { id: 'SOL-1042', subject: 'Segunda via de boleto', category: 'Financeiro', date: '22/09/2026', status: 'Concluída' },
  { id: 'SOL-1051', subject: 'Atualização de endereço de entrega', category: 'Cadastro', date: '25/09/2026', status: 'Em andamento' },
  { id: 'SOL-1057', subject: 'Erro ao emitir nota fiscal', category: 'Suporte técnico', date: '27/09/2026', status: 'Em andamento' },
  { id: 'SOL-1063', subject: 'Proposta para novo plano', category: 'Comercial', date: '28/09/2026', status: 'Aberta' }
];

const nextStatus = { Aberta: 'Em andamento', 'Em andamento': 'Concluída', 'Concluída': 'Concluída' };
const pillClass = { Aberta: 'aberta', 'Em andamento': 'andamento', 'Concluída': 'concluida' };
let currentFilter = 'todas';

const $ = (selector) => document.querySelector(selector);

function initials(email) {
  const name = email.split('@')[0].replace(/[^a-zA-Z.]/g, '');
  const parts = name.split('.').filter(Boolean);
  const letters = parts.length > 1 ? parts[0][0] + parts[1][0] : name.slice(0, 2);
  return (letters || 'CL').toUpperCase();
}

function displayName(email) {
  const first = email.split('@')[0].split(/[._-]/)[0] || 'cliente';
  return first.charAt(0).toUpperCase() + first.slice(1);
}

function renderStats() {
  const count = (status) => requests.filter((item) => item.status === status).length;
  const cards = [
    ['Total de solicitações', requests.length],
    ['Em andamento', count('Em andamento')],
    ['Abertas', count('Aberta')],
    ['Concluídas', count('Concluída')]
  ];
  $('#stats').innerHTML = cards
    .map(([label, value]) => `<div class="stat"><span>${label}</span><strong>${value}</strong></div>`)
    .join('');
}

function renderList() {
  const list = $('#requestList');
  const visible = requests.filter((item) => currentFilter === 'todas' || item.status === currentFilter);
  list.innerHTML = '';

  if (visible.length === 0) {
    list.innerHTML = '<li class="empty">Nenhuma solicitação neste filtro.</li>';
    return;
  }

  for (const item of visible) {
    const li = document.createElement('li');
    li.className = 'request';
    li.innerHTML = `
      <span class="icon"></span>
      <div><strong></strong><br><small></small></div>
      <span class="pill ${pillClass[item.status]}"></span>
      <button type="button" class="link-btn">${item.status === 'Concluída' ? 'Concluída ✓' : 'Avançar'}</button>`;
    li.querySelector('.icon').textContent = item.category.slice(0, 3).toUpperCase();
    li.querySelector('strong').textContent = item.subject;
    li.querySelector('small').textContent = `${item.id} · ${item.category} · aberta em ${item.date}`;
    li.querySelector('.pill').textContent = item.status;
    const button = li.querySelector('button');
    button.disabled = item.status === 'Concluída';
    button.addEventListener('click', () => {
      item.status = nextStatus[item.status];
      render();
    });
    list.appendChild(li);
  }
}

function render() {
  renderStats();
  renderList();
}

function renderBuildInfo() {
  const info = window.BUILD_INFO;
  const footer = $('#buildInfo');
  if (!info) {
    footer.innerHTML = '<span>Versão de desenvolvimento · abra o artefato gerado pela pipeline para ver os dados da entrega.</span>';
    return;
  }
  const date = new Date(info.generatedAt).toLocaleString('pt-BR');
  footer.innerHTML = `
    <strong>Entrega gerada pela pipeline</strong>
    <span class="tag" data-k="build"></span>
    <span class="tag" data-k="env"></span>
    <span data-k="note"></span>
    <span data-k="date"></span>`;
  footer.querySelector('[data-k="build"]').textContent = `Build ${info.buildNumber}`;
  footer.querySelector('[data-k="env"]').textContent = `Ambiente: ${info.environment}`;
  footer.querySelector('[data-k="note"]').textContent = `“${info.releaseNote}”`;
  footer.querySelector('[data-k="date"]').textContent = `Gerado em ${date}${info.requestedFor ? ' por ' + info.requestedFor : ''}`;
}

$('#loginForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = $('#email').value.trim();
  const password = $('#password').value;
  const error = $('#loginError');

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    error.textContent = 'Informe um e-mail válido.';
    return;
  }
  if (password.length < 4) {
    error.textContent = 'A senha precisa ter pelo menos 4 caracteres.';
    return;
  }

  error.textContent = '';
  $('#avatar').textContent = initials(email);
  $('#greeting').textContent = `Olá, ${displayName(email)}!`;
  $('#loginView').hidden = true;
  $('#appView').hidden = false;
  render();
});

$('#logoutButton').addEventListener('click', () => {
  $('#appView').hidden = true;
  $('#loginView').hidden = false;
  $('#password').value = '';
});

$('#filters').addEventListener('click', (event) => {
  const chip = event.target.closest('.chip');
  if (!chip) return;
  document.querySelectorAll('.chip').forEach((item) => item.classList.toggle('active', item === chip));
  currentFilter = chip.dataset.filter;
  renderList();
});

const dialog = $('#requestDialog');
$('#newRequestButton').addEventListener('click', () => {
  $('#subject').value = '';
  $('#requestError').textContent = '';
  dialog.showModal();
});
$('#cancelRequest').addEventListener('click', () => dialog.close());

$('#requestForm').addEventListener('submit', (event) => {
  const subject = $('#subject').value.trim();
  if (subject.length < 5) {
    event.preventDefault();
    $('#requestError').textContent = 'Descreva o assunto com pelo menos 5 caracteres.';
    return;
  }
  const number = 1064 + requests.length;
  requests.unshift({
    id: `SOL-${number}`,
    subject,
    category: $('#category').value,
    date: new Date().toLocaleDateString('pt-BR'),
    status: 'Aberta'
  });
  currentFilter = 'todas';
  document.querySelectorAll('.chip').forEach((item) => item.classList.toggle('active', item.dataset.filter === 'todas'));
  render();
});

renderBuildInfo();
