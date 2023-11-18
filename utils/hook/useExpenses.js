import { useContext } from "react";
import { ExpensesContext } from "../../store/context";

const useExpenses = () => {
  const context = useContext(ExpensesContext);

  if (!context) {
    throw new Error(
      "useExpenses hook must be used within an ExpensesContextProvider"
    );
  }

  return context;
};

export default useExpenses;
