import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/ui/IconButton";
import useExpenses from "../utils/hook/useExpenses";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import validateExpenseData from "../utils/Validation/validateExpenseData";
import {
  storeExpense,
  updateExpenseData,
  deleteExpense,
  deleteExpenseData,
} from "../utils/http/http";

export default function ManageExpenses({ route, navigation }) {
  const id = route?.params?.id;
  const desc = route.params?.title;

  const { deleteExpense, updateExpense, addExpense, expenses } = useExpenses();

  const isEditing = !!id;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? `${desc} is Editing` : "Add New Expenses",
    });
  }, [route, navigation, isEditing]);

  async function DeleteExpense() {
    deleteExpense(id);
    await deleteExpenseData(id);
    navigation.goBack();
  }

  function CancelExpense() {
    navigation.goBack();
  }

  async function ConfirmExpense(expenseData) {
    const validation = validateExpenseData(expenseData);

    if (validation.isValid) {
      if (isEditing) {
        await updateExpenseData(id, expenseData);
        updateExpense(id, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        addExpense({ ...expenseData, id });
      }

      navigation.goBack();
    } else {
      console.error(validation.error);
    }
  }

  const selectedItem = expenses.find((item) => item.id === id);

  return (
    <View style={styles.container}>
      <ExpenseForm
        defaultValues={selectedItem}
        onSubmit={ConfirmExpense}
        CancelExpense={CancelExpense}
        isEditing={isEditing ? "Update" : "Add"}
      />

      <View style={styles.divider} />

      {isEditing && (
        <View style={styles.deleteButton}>
          <IconButton name="trash" iconName="trash" onPress={DeleteExpense} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  divider: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    marginBottom: 20,
  },
  deleteButton: {
    marginTop: 20,
  },
});
