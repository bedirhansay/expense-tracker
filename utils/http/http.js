import axios from "axios";

const Uri = "https://expense-tracker-39a41-default-rtdb.firebaseio.com";

export const storeExpense = async (expenseData) => {
  const res = await axios.post(`${Uri}/expenses.json`, expenseData);
  const id = res.data.name;
  return id;
};

export const getExpenses = async () => {
  try {
    const { data } = await axios.get(`${Uri}/expenses.json`);

    console.log(data);
    const expenses = [];
    for (const key in data) {
      const expensesObject = {
        id: key,
        amount: data[key].amount,
        description: data[key].description,
        date: new Date(data[key].date),
      };
      expenses.push(expensesObject);
    }
    return expenses;
  } catch (error) {
    console.log(error);
  }
};

export async function updateExpenseData(id, expenseData) {
  return axios.put(Uri + `/expenses/${id}.json`, expenseData);
}

export async function deleteExpenseData(id) {
  return axios.delete(Uri + `/expenses/${id}.json`);
}
