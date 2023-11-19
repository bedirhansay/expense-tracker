import React from "react";
import { ExpensesOutput } from "../components/Expense/ExpensesOutput";
import useExpenses from "../utils/hook/useExpenses";
import { filterExpensesLast7Days, getDateMinusDays } from "../utils/date";

export default function RecentExpenses({ navigation }) {
  const { expenses } = useExpenses();

  const recentExp = filterExpensesLast7Days(expenses);

  return <ExpensesOutput expensesPeriod="Last 7 Days" expenses={recentExp} />;
}
