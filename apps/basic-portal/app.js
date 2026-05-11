const requests = [
  {
    title: 'Cadastro de novo acesso',
    owner: 'Atendimento',
    state: 'Concluida',
    type: 'done'
  },
  {
    title: 'Atualizacao de dados cadastrais',
    owner: 'Operacoes',
    state: 'Em atendimento',
    type: 'doing'
  },
  {
    title: 'Consulta de protocolo',
    owner: 'Suporte',
    state: 'Em atendimento',
    type: 'doing'
  }
];

const totalRequests = document.querySelector('#totalRequests');
const activeRequests = document.querySelector('#activeRequests');
const doneRequests = document.querySelector('#doneRequests');
const requestList = document.querySelector('#requestList');

totalRequests.textContent = requests.length;
activeRequests.textContent = requests.filter((request) => request.type === 'doing').length;
doneRequests.textContent = requests.filter((request) => request.type === 'done').length;

requestList.innerHTML = requests
  .map(
    (request) => `
      <article class="request">
        <div>
          <strong>${request.title}</strong>
          <p>Responsavel: ${request.owner}</p>
        </div>
        <span class="status ${request.type}">${request.state}</span>
      </article>
    `
  )
  .join('');

