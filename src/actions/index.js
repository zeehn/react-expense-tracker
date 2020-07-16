export const addTransaction = (transaction) => {
  return {
    type: 'ADD_TRANSACTION',
    payload: transaction,
  };
};

export const removeTransaction = (transaction) => {
  return {
    type: 'REMOVE_TRANSACTION',
    payload: transaction,
  };
};
