import React, { useEffect, useState } from "react";
import { ExpensesOutput } from "../components/Expense/ExpensesOutput";
import useExpenses from "../utils/hook/useExpenses";
import { filterExpensesLast7Days, getDateMinusDays } from "../utils/date";
import { getExpenses } from "../utils/http/http";
import { LoadingOverlay } from "../components/ui/LoadingOverlay";

export default function RecentExpenses({ navigation }) {
  const { expenses, setExpenses } = useExpenses();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function fetchExp() {
      setIsFetching(true);
      const exp = await getExpenses();
      setIsFetching(false);
      setExpenses(exp);
    }
    fetchExp();
    return;
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }
  const recentExp = filterExpensesLast7Days(expenses);

  return <ExpensesOutput expensesPeriod="Last 7 Days" expenses={recentExp} />;
}
