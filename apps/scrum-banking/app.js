const PILOT_LIMIT = 1000;

let balance = 4850.75;
let usedLimit = 150;
let hideBalance = false;
let pending = null;

const statement = [
  { title: 'PIX recebido · Maria Souza', date: '28/09 · 18:42', value: 320 },
  { title: 'PIX enviado · Padaria Central', date: '28/09 · 07:15', value: -150 },
  { title: 'Salário · Empresa XPTO', date: '25/09 · 09:00', value: 5200 },
  { title: 'Conta de energia', date: '24/09 · 14:30', value: -189.9 }
];

const receivers = ['Ana Beatriz Lima', 'Bruno Carvalho', 'Camila Rocha', 'Diego Martins', 'Fernanda Alves', 'Gustavo Pereira'];

const keyRules = {
  cpf: { placeholder: '000.000.000-00', valid: (v) => v.replace(/\D/g, '').length === 11, message: 'CPF precisa ter 11 dígitos.' },
  email: { placeholder: 'nome@email.com', valid: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), message: 'Informe um e-mail válido.' },
  phone: { placeholder: '(85) 90000-0000', valid: (v) => v.replace(/\D/g, '').length === 11, message: 'Celular precisa ter DDD + 9 dígitos.' },
  random: { placeholder: 'Ex.: 7d9f2c1a-...', valid: (v) => v.replace(/[^a-zA-Z0-9]/g, '').length >= 8, message: 'Chave aleatória inválida.' }
};

const $ = (selector) => document.querySelector(selector);
const money = (value) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function parseAmount(text) {
  const raw = text.replace(/[^\d,.]/g, '');
  // "1.250,90" (padrao brasileiro) ou "50.5" / "50" (ponto como decimal)
  const clean = raw.includes(',') ? raw.replace(/\./g, '').replace(',', '.') : raw;
  return Number.parseFloat(clean);
}

function renderAccount() {
  $('#balance').textContent = hideBalance ? 'R$ ••••••' : money(balance);
  const percent = Math.min(100, (usedLimit / PILOT_LIMIT) * 100);
  $('#limitBar').style.width = `${percent}%`;
  $('#limitText').textContent = `${money(PILOT_LIMIT - usedLimit)} disponíveis hoje de ${money(PILOT_LIMIT)}.`;
}

function renderStatement(highlightFirst = false) {
  const list = $('#statement');
  list.innerHTML = '';
  statement.forEach((entry, index) => {
    const li = document.createElement('li');
    if (highlightFirst && index === 0) li.className = 'new';
    const title = document.createElement('span');
    title.textContent = entry.title;
    const value = document.createElement('span');
    value.className = entry.value < 0 ? 'out' : 'in';
    value.textContent = `${entry.value < 0 ? '−' : '+'} ${money(Math.abs(entry.value))}`;
    const date = document.createElement('small');
    date.textContent = entry.date;
    li.append(title, value, date);
    list.appendChild(li);
  });
}

function showStep(step) {
  $('#stepForm').hidden = step !== 0;
  $('#stepConfirm').hidden = step !== 1;
  $('#stepReceipt').hidden = step !== 2;
  document.querySelectorAll('#wizard li').forEach((li, index) => {
    li.className = index < step ? 'done' : index === step ? 'active' : '';
  });
}

$('#keyType').addEventListener('change', () => {
  $('#key').placeholder = keyRules[$('#keyType').value].placeholder;
  $('#formError').textContent = '';
});

$('#stepForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const type = $('#keyType').value;
  const key = $('#key').value.trim();
  const amount = parseAmount($('#amount').value);
  const error = $('#formError');

  if (!keyRules[type].valid(key)) { error.textContent = keyRules[type].message; return; }
  if (!Number.isFinite(amount) || amount <= 0) { error.textContent = 'Informe um valor maior que zero.'; return; }
  if (amount > balance) { error.textContent = 'Saldo insuficiente para esta transferência.'; return; }
  if (amount > PILOT_LIMIT - usedLimit) {
    error.textContent = `Valor acima do limite do piloto. Disponível hoje: ${money(PILOT_LIMIT - usedLimit)}.`;
    return;
  }

  error.textContent = '';
  const name = receivers[key.length % receivers.length];
  pending = { key, amount, name, message: $('#message').value.trim() };

  $('#receiverInitials').textContent = name.split(' ').map((part) => part[0]).slice(0, 2).join('');
  $('#receiverName').textContent = name;
  $('#receiverKey').textContent = `Chave: ${key}`;
  $('#confirmAmount').textContent = money(amount);
  $('#confirmMessage').textContent = pending.message || '—';
  showStep(1);
});

$('#backButton').addEventListener('click', () => showStep(0));

$('#confirmButton').addEventListener('click', () => {
  if (!pending) return;
  balance -= pending.amount;
  usedLimit += pending.amount;
  const now = new Date();
  const id = 'E' + Array.from({ length: 24 }, () => Math.floor(Math.random() * 16).toString(16)).join('').toUpperCase();

  statement.unshift({
    title: `PIX enviado · ${pending.name}`,
    date: `${now.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })} · ${now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`,
    value: -pending.amount
  });

  $('#receiptAmount').textContent = money(pending.amount);
  $('#receiptName').textContent = pending.name;
  $('#receiptDate').textContent = now.toLocaleString('pt-BR');
  $('#receiptId').textContent = id;

  renderAccount();
  renderStatement(true);
  showStep(2);
});

$('#newPixButton').addEventListener('click', () => {
  $('#stepForm').reset();
  $('#key').placeholder = keyRules.cpf.placeholder;
  pending = null;
  showStep(0);
});

$('#toggleBalance').addEventListener('click', () => {
  hideBalance = !hideBalance;
  renderAccount();
});

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

renderAccount();
renderStatement();
renderBuildInfo();
