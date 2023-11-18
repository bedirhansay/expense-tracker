export const getSevenDaysAgo = (date) => {
  const sevenDaysAgo = new Date(date);
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  return sevenDaysAgo;
};

export const filterExpensesLast7Days = (expenses) => {
  const today = new Date();

  return expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate >= getSevenDaysAgo(today) && expenseDate <= today;
  });
};
