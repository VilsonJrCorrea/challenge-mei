

const messageNotFound = { messages: [{ message: 'Pagamento não encontrado' }] };
const messageOriginAccountNotFound = { messages: [{ message: 'Conta de origem não encontrada' }] };
const messageDestinyAccountNotFound = { messages: [{ message: 'Conta de destino não encontrada' }] };
const messageDestinyEqualOrigin = { messages: [{ message: 'Conta de destino igual a de origem' }] };

module.exports = {
  messageNotFound,
  messageOriginAccountNotFound,
  messageDestinyAccountNotFound,
  messageDestinyEqualOrigin,
};
