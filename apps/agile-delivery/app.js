const steps = [
  { label: 'Pedido recebido', icon: '🧾', eta: 32 },
  { label: 'Em preparo', icon: '👨‍🍳', eta: 24 },
  { label: 'Saiu para entrega', icon: '🛵', eta: 12 },
  { label: 'Entregue', icon: '✅', eta: 0 }
];
// Posicoes aproximadas do entregador sobre a rota do mapa (em %)
const courierPositions = [[7, 82], [22, 62], [47, 38], [93, 23]];

const items = [
  { qty: 1, name: 'Combo Executivo (burger + fritas)', price: 42.9 },
  { qty: 2, name: 'Refrigerante lata', price: 7.0 },
  { qty: 1, name: 'Brownie com sorvete', price: 16.5 }
];
const deliveryFee = 6.99;

let current = 2;
let secondsLeft = steps[current].eta * 60;

const $ = (selector) => document.querySelector(selector);
const money = (value) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function renderOrder() {
  const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);
  $('#items').innerHTML = items
    .map((item) => `<li><span><b>${item.qty}x</b>${item.name}</span><span>${money(item.qty * item.price)}</span></li>`)
    .join('');
  $('#totals').innerHTML = `
    <dt>Subtotal</dt><dd>${money(subtotal)}</dd>
    <dt>Taxa de entrega</dt><dd>${money(deliveryFee)}</dd>
    <dt class="total">Total</dt><dd class="total">${money(subtotal + deliveryFee)}</dd>`;
}

function renderTracking() {
  $('#stepper').innerHTML = steps
    .map((step, index) => {
      const state = index < current ? 'done' : index === current ? 'active' : '';
      return `<li class="${state}"><span class="dot">${step.icon}</span>${step.label}</li>`;
    })
    .join('');

  $('#statusTitle').textContent = steps[current].label;
  $('#progressBar').style.width = `${(current / (steps.length - 1)) * 100}%`;

  const [left, top] = courierPositions[current];
  $('#courierDot').style.left = `${left}%`;
  $('#courierDot').style.top = `${top}%`;

  const delivered = current === steps.length - 1;
  $('#advanceButton').disabled = delivered;
  $('#advanceButton').textContent = delivered ? 'Pedido entregue' : 'Avançar status';
  $('#rating').hidden = !delivered;
  renderEta();
}

function renderEta() {
  if (current === steps.length - 1) {
    $('#eta').textContent = 'Entregue';
    $('#etaLabel').textContent = 'bom apetite!';
    return;
  }
  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const seconds = String(secondsLeft % 60).padStart(2, '0');
  $('#eta').textContent = `${minutes}:${seconds}`;
  $('#etaLabel').textContent = 'minutos';
}

$('#advanceButton').addEventListener('click', () => {
  if (current >= steps.length - 1) return;
  current += 1;
  secondsLeft = steps[current].eta * 60;
  renderTracking();
});

$('#contactButton').addEventListener('click', () => {
  $('#toast').textContent = 'Mensagem enviada ao entregador: "Estou aguardando na portaria."';
  setTimeout(() => { $('#toast').textContent = ''; }, 3500);
});

const ratingText = ['', 'Poxa! Vamos melhorar.', 'Obrigado pelo retorno.', 'Bom! Obrigado.', 'Ótimo! Obrigado.', 'Excelente! Obrigado pela avaliação.'];
$('#stars').addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;
  const value = Number(button.dataset.v);
  document.querySelectorAll('#stars button').forEach((star) => star.classList.toggle('on', Number(star.dataset.v) <= value));
  $('#ratingText').textContent = ratingText[value];
});

setInterval(() => {
  if (current < steps.length - 1 && secondsLeft > 0) {
    secondsLeft -= 1;
    renderEta();
  }
}, 1000);

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

renderOrder();
renderTracking();
renderBuildInfo();
