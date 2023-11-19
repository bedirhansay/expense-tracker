import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { ExpensesItem } from "./ExpensesItem";
export const ExpensesList = ({ expenses }) => {
  const renderItem = ({ item }) => <ExpensesItem item={item} />;

  return (
    <FlatList
      data={expenses}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};
