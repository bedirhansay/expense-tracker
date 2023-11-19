import React from "react";
import { View } from "react-native";
import { ExpensesSummary } from "./ExpensesSummary";
import { ExpensesList } from "./ExpensesList";
import PropTypes from "prop-types";

export const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};
