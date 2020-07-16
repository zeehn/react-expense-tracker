const initialState = {
  income: 0,
  expense: 0,
  transactions: [],
};
let id = 0;
const accountReducer = (state = initialState, action) => {
  if (action.type === 'ADD_TRANSACTION') {
    const { amount, description, type } = action.payload;
    if (type === 'Income') {
      return {
        ...state,
        income: state.income + amount,

        transactions: [
          ...state.transactions,
          {
            id: ++id,
            description: description,
            amount: amount,
            transType: type,
          },
        ],
      };
    } else if (type === 'Expense') {
      return {
        ...state,
        expense: state.expense + amount,
        transactions: [
          ...state.transactions,
          {
            id: ++id,
            description: description,
            amount: amount,
            transType: type,
          },
        ],
      };
    }
  } else if (action.type === 'REMOVE_TRANSACTION') {
    const { id, amount, transType } = action.payload;
    if (transType === 'Income') {
      return {
        ...state,
        income: state.income - amount,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== id
        ),
      };
    } else if (transType === 'Expense') {
      return {
        ...state,
        expense: state.expense - amount,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== id
        ),
      };
    }
  }
  return state;
};

export default accountReducer;
