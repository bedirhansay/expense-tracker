export const ExpensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [...state, { ...action.payload, id: id }];
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
