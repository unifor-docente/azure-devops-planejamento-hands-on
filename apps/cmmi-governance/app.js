const changes = [
  { id: 'CR-01', title: 'Alterar política de autenticação', req: 'REQ-01 Controle de acesso por perfil', risk: 'Alto', approvals: [], status: 'Em análise' },
  { id: 'CR-02', title: 'Exigir dupla aprovação para administrador', req: 'REQ-01 Controle de acesso por perfil', risk: 'Alto', approvals: ['Coordenador C. Pinto'], status: 'Em análise' },
  { id: 'CR-03', title: 'Registrar data, responsável e justificativa', req: 'REQ-02 Histórico de aprovações', risk: 'Médio', approvals: [], status: 'Em análise' },
  { id: 'CR-04', title: 'Pipeline como evidência de validação', req: 'REQ-03 Evidência de entrega', risk: 'Médio', approvals: ['Gestora A. Ribeiro', 'Auditor B. Nogueira'], status: 'Aprovada' },
  { id: 'CR-05', title: 'Filtros por período e perfil no relatório', req: 'REQ-04 Relatório de acessos', risk: 'Baixo', approvals: [], status: 'Em análise' }
];

const audit = [
  { time: '28/09/2026 17:05', who: 'Auditor B. Nogueira', action: 'aprovou CR-04 (2/2)', why: 'Execução da pipeline anexada como evidência.', kind: 'ok' },
  { time: '28/09/2026 16:40', who: 'Gestora A. Ribeiro', action: 'aprovou CR-04 (1/2)', why: 'Alinhado ao requisito REQ-03.', kind: 'ok' },
  { time: '28/09/2026 15:12', who: 'Coordenador C. Pinto', action: 'aprovou CR-02 (1/2)', why: 'Reduz risco de acesso indevido.', kind: 'ok' },
  { time: '28/09/2026 10:20', who: 'Gestora A. Ribeiro', action: 'registrou CR-05', why: 'Demanda da auditoria interna.', kind: '' }
];

const riskClass = { Alto: 'red', Médio: 'amber', Baixo: 'green' };
const statusClass = { 'Em análise': 'blue', Aprovada: 'green', Rejeitada: 'red' };
let decision = null;

const $ = (selector) => document.querySelector(selector);

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function renderKpis() {
  const pending = changes.filter((c) => c.status === 'Em análise').length;
  const approved = changes.filter((c) => c.status === 'Aprovada').length;
  const traced = Math.round((audit.filter((a) => a.why).length / audit.length) * 100);
  const cards = [
    ['Requisitos ativos', '4', 'REQ-01 a REQ-04', ''],
    ['Mudanças em análise', String(pending), 'aguardando aprovação', 'warn'],
    ['Mudanças aprovadas', String(approved), 'com dupla aprovação', 'up'],
    ['Rastreabilidade', `${traced}%`, 'decisões com justificativa', 'up']
  ];
  const box = $('#kpis');
  box.innerHTML = '';
  for (const [label, value, hint, cls] of cards) {
    const card = el('div', 'kpi');
    card.append(el('span', '', label), el('strong', '', value), el('small', cls, hint));
    box.appendChild(card);
  }
}

function renderChanges() {
  const body = $('#changes');
  body.innerHTML = '';
  for (const change of changes) {
    const tr = document.createElement('tr');
    const approvals = el('div', 'approvals');
    for (let i = 0; i < 2; i += 1) approvals.appendChild(el('i', i < change.approvals.length ? 'on' : ''));
    approvals.appendChild(el('small', 'muted', ` ${change.approvals.length}/2`));

    const actions = el('div', 'row-actions');
    const open = change.status === 'Em análise';
    const approve = el('button', 'btn', 'Aprovar');
    const reject = el('button', 'btn reject', 'Rejeitar');
    approve.type = reject.type = 'button';
    approve.disabled = reject.disabled = !open;
    approve.addEventListener('click', () => openDecision(change, 'approve'));
    reject.addEventListener('click', () => openDecision(change, 'reject'));
    actions.append(approve, reject);

    const cells = [
      el('span', 'id', change.id),
      el('span', '', change.title),
      el('span', 'muted', change.req),
      el('span', `badge ${riskClass[change.risk]}`, change.risk),
      approvals,
      el('span', `badge ${statusClass[change.status]}`, change.status),
      actions
    ];
    for (const content of cells) {
      const td = document.createElement('td');
      td.appendChild(content);
      tr.appendChild(td);
    }
    body.appendChild(tr);
  }
}

function renderAudit(fresh = false) {
  const list = $('#audit');
  list.innerHTML = '';
  audit.forEach((entry, index) => {
    const li = el('li', `${entry.kind}${fresh && index === 0 ? ' fresh' : ''}`);
    const who = el('strong', '', entry.who);
    const line = el('p');
    line.append(who, document.createTextNode(` ${entry.action}`));
    li.append(el('time', '', entry.time), line, el('em', '', `Justificativa: ${entry.why}`));
    list.appendChild(li);
  });
  $('#auditCount').textContent = `${audit.length} registros`;
}

function openDecision(change, type) {
  const actor = $('#actor').value;
  if (type === 'approve' && change.approvals.includes(actor)) {
    const notice = $('#notice');
    notice.textContent = `${actor} já aprovou ${change.id}. A segunda aprovação precisa ser de outra pessoa (segregação de funções). Troque o perfil em "Você está atuando como".`;
    notice.hidden = false;
    clearTimeout(openDecision.timer);
    openDecision.timer = setTimeout(() => { notice.hidden = true; }, 6000);
    return;
  }
  decision = { change, type };
  $('#decisionTitle').textContent = type === 'approve' ? `Aprovar ${change.id}` : `Rejeitar ${change.id}`;
  $('#decisionSubtitle').textContent = `${change.title} · atuando como ${actor}`;
  $('#justification').value = '';
  $('#decisionError').textContent = '';
  $('#confirmDecision').className = type === 'approve' ? 'btn' : 'btn reject';
  $('#decisionDialog').showModal();
}

$('#decisionForm').addEventListener('submit', (event) => {
  const why = $('#justification').value.trim();
  if (why.length < 10) {
    event.preventDefault();
    $('#decisionError').textContent = 'A justificativa precisa ter pelo menos 10 caracteres.';
    return;
  }
  const { change, type } = decision;
  const actor = $('#actor').value;
  let action;
  if (type === 'approve') {
    change.approvals.push(actor);
    if (change.approvals.length >= 2) change.status = 'Aprovada';
    action = `aprovou ${change.id} (${change.approvals.length}/2)`;
  } else {
    change.status = 'Rejeitada';
    action = `rejeitou ${change.id}`;
  }
  audit.unshift({ time: new Date().toLocaleString('pt-BR').slice(0, 17), who: actor, action, why, kind: type === 'approve' ? 'ok' : 'no' });
  renderAll(true);
});

$('#cancelDecision').addEventListener('click', () => $('#decisionDialog').close());

document.querySelectorAll('.sidebar nav a').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.sidebar nav a').forEach((item) => item.classList.toggle('active', item === link));
  });
});

function renderBuildInfo() {
  const info = window.BUILD_INFO;
  const footer = $('#buildInfo');
  if (!info) {
    footer.textContent = 'Versão de desenvolvimento · abra o artefato gerado pela pipeline para ver os dados da entrega.';
    return;
  }
  const date = new Date(info.generatedAt).toLocaleString('pt-BR');
  footer.innerHTML = '';
  footer.append(
    el('strong', '', 'Entrega gerada pela pipeline'),
    el('span', 'tag', `Build ${info.buildNumber}`),
    el('span', 'tag', `Ambiente: ${info.environment}`),
    el('span', '', `“${info.releaseNote}”`),
    el('span', '', `Gerado em ${date}${info.requestedFor ? ' por ' + info.requestedFor : ''}`)
  );
}

function renderAll(fresh = false) {
  renderKpis();
  renderChanges();
  renderAudit(fresh);
}

renderAll();
renderBuildInfo();
