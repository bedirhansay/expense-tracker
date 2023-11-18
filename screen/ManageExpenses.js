import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/ui/IconButton";
import { Button } from "../components/ui/Button";
import useExpenses from "../utils/hook/useExpenses";

export default function ManageExpenses({ route, navigation }) {
  const id = route?.params?.id;
  const desc = route.params?.title;

  const { deleteExpense, updateExpense, addExpense } = useExpenses();

  const isEditing = !!id;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? `${desc} is Editing` : "Add New Expenses",
    });
  }, [route, navigation, isEditing]);

  function DeleteExpense() {
    deleteExpense(id);
    navigation.goBack();
  }

  function CancelExpense() {
    navigation.goBack();
  }

  function ConfirmExpense() {
    if (isEditing) {
      updateExpense();
    } else {
      addExpense();
    }
    navigation.goBack();
  }

  const { expenses } = useExpenses();

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button onPress={CancelExpense}>Cancel</Button>
        <Button onPress={ConfirmExpense}>{isEditing ? "Update" : "Add"}</Button>
      </View>
      <Text style={styles.title}>Expense Information</Text>
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
