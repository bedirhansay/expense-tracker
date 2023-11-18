import { ExpensesOutput } from "../components/ExpensesOutput";
import useExpenses from "../utils/hook/useExpenses";

export default function AllExpenses() {
  const { expenses } = useExpenses();

  return <ExpensesOutput expensesPeriod="Total" expenses={expenses} />;
}
