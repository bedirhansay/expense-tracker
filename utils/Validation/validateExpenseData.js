function validateExpenseData(expenseData) {
  const { amount, date, description } = expenseData;

  if (typeof amount !== "number" || isNaN(amount) || amount <= 0) {
    return { isValid: false, error: "Amount must be a positive number." };
  }

  if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
    return { isValid: false, error: "Invalid date." };
  }

  if (typeof description !== "string" || description.trim() === "") {
    return { isValid: false, error: "Description cannot be empty." };
  }

  return { isValid: true };
}

export default validateExpenseData;
