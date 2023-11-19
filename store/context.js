import React, { createContext, useMemo, useReducer } from "react";
import { DummyExpenses } from "../utils/Constant/DummyExpenses";
import { ExpensesReducer } from "./expenseReducer";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
  setExpenses: () => {},
});

export const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(ExpensesReducer, DummyExpenses);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const setExpenses = (expenses) => {
    dispatch({ type: "SET", payload: expenses });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  };

  const value = useMemo(() => {
    return {
      expenses: expensesState,
      addExpense: addExpense,
      deleteExpense: deleteExpense,
      updateExpense: updateExpense,
      setExpenses: setExpenses,
    };
  }, [addExpense, deleteExpense, updateExpense]);

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};
