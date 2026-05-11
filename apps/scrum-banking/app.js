const maxTransferAmount = 500;
const form = document.querySelector('#pixForm');
const resultTitle = document.querySelector('#resultTitle');
const resultText = document.querySelector('#resultText');
const receipt = document.querySelector('.receipt');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const pixKey = String(formData.get('pixKey')).trim();
  const amount = Number(String(formData.get('amount')).replace(',', '.'));

  receipt.classList.remove('success', 'error');

  if (!pixKey.includes('@') && pixKey.length < 11) {
    showError('Chave PIX invalida', 'Use e-mail, telefone ou CPF/CNPJ para simular uma chave valida.');
    return;
  }

  if (!Number.isFinite(amount) || amount <= 0) {
    showError('Valor invalido', 'Informe um valor maior que zero.');
    return;
  }

  if (amount > maxTransferAmount) {
    showError('Limite excedido', `O limite da sprint piloto e R$ ${maxTransferAmount.toFixed(2)}.`);
    return;
  }

  receipt.classList.add('success');
  resultTitle.textContent = 'Transferencia validada';
  resultText.textContent = `PIX de R$ ${amount.toFixed(2)} pronto para confirmacao.`;
});

function showError(title, message) {
  receipt.classList.add('error');
  resultTitle.textContent = title;
  resultText.textContent = message;
}

