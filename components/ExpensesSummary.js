import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses?.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.periodName}>{periodName}</Text>
      <Text style={styles.expensesSum}>{`$${expensesSum.toFixed(2)}`}</Text>
    </View>
  );
};

ExpensesSummary.propTypes = {
  expenses: PropTypes.array.isRequired,
  periodName: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4CAF50",
    padding: 20,
    alignItems: "center",
  },
  periodName: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
  },
  expensesSum: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
});
