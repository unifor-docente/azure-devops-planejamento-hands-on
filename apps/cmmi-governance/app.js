const changes = [
  {
    title: 'Exigir dupla aprovacao para perfil administrador',
    requester: 'Seguranca da Informacao',
    state: 'Aprovada',
    type: 'approved'
  },
  {
    title: 'Registrar justificativa obrigatoria para acesso temporario',
    requester: 'Auditoria Interna',
    state: 'Em analise',
    type: 'review'
  },
  {
    title: 'Revisar politica de expiracao de credenciais',
    requester: 'Operacoes',
    state: 'Em analise',
    type: 'review'
  }
];

const changeList = document.querySelector('#changeList');
const changeTotal = document.querySelector('#changeTotal');
const approvedTotal = document.querySelector('#approvedTotal');

changeTotal.textContent = changes.length;
approvedTotal.textContent = changes.filter((change) => change.type === 'approved').length;

changeList.innerHTML = changes
  .map(
    (change) => `
      <article class="change">
        <div>
          <strong>${change.title}</strong>
          <p>Solicitante: ${change.requester}</p>
        </div>
        <span class="state ${change.type}">${change.state}</span>
      </article>
    `
  )
  .join('');

