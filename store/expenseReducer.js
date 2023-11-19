export const ExpensesReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return action.payload;
    case "ADD":
      return [...state, { ...action.payload }];
    case "UPDATE":
      const expensesIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updateExpense = state[expensesIndex];
      const updatedItem = { ...updateExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[expensesIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      console.log(action.payload);
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
