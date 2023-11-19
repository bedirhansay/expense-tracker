import React, { useEffect, useState } from "react";
import { ExpensesOutput } from "../components/Expense/ExpensesOutput";
import useExpenses from "../utils/hook/useExpenses";
import { filterExpensesLast7Days, getDateMinusDays } from "../utils/date";
import { getExpenses } from "../utils/http/http";

export default function RecentExpenses({ navigation }) {
  const { expenses, setExpenses } = useExpenses();

  useEffect(() => {
    async function fetchExp() {
      const exp = await getExpenses();
      setExpenses(exp);
    }
    fetchExp();
    return;
  }, []);

  const recentExp = filterExpensesLast7Days(expenses);

  return <ExpensesOutput expensesPeriod="Last 7 Days" expenses={recentExp} />;
}
