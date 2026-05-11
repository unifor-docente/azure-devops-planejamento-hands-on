const steps = [
  { label: 'Pedido recebido', detail: 'Restaurante confirmou a solicitacao.', status: 'done' },
  { label: 'Em preparo', detail: 'Cozinha iniciou a producao.', status: 'done' },
  { label: 'Saiu para entrega', detail: 'Entregador a caminho do cliente.', status: 'active' },
  { label: 'Entregue', detail: 'Confirmacao pendente.', status: 'todo' }
];

const timeline = document.querySelector('#timeline');
const advanceButton = document.querySelector('#advanceButton');
const eta = document.querySelector('#eta');

function render() {
  timeline.innerHTML = steps
    .map((step, index) => {
      const stateLabel = step.status === 'done' ? 'Concluido' : step.status === 'active' ? 'Atual' : 'Pendente';

      return `
        <article class="step ${step.status}">
          <span class="marker">${index + 1}</span>
          <div>
            <strong>${step.label}</strong>
            <p class="muted">${step.detail}</p>
          </div>
          <span class="state">${stateLabel}</span>
        </article>
      `;
    })
    .join('');

  const activeIndex = steps.findIndex((step) => step.status === 'active');
  eta.textContent = activeIndex >= 2 ? '18 min' : '32 min';
  advanceButton.disabled = activeIndex === -1;
}

advanceButton.addEventListener('click', () => {
  const activeIndex = steps.findIndex((step) => step.status === 'active');
  if (activeIndex === -1) {
    return;
  }

  steps[activeIndex].status = 'done';
  if (steps[activeIndex + 1]) {
    steps[activeIndex + 1].status = 'active';
  }

  render();
});

render();

