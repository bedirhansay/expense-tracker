import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input } from "../ui/input";
import { Button } from "../ui/Button";
const ExpenseForm = ({ onSubmit, CancelExpense, isEditing }) => {
  const [inputValues, setInputValues] = useState({
    amount: "",
    description: "",
    date: new Date(),
  });

  const inputChangeHandler = (identifier, enteredValue) => {
    setInputValues((prevVal) => {
      return {
        ...prevVal,
        [identifier]: enteredValue,
      };
    });
  };

  const handleSubmit = () => {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };
    onSubmit(expenseData);

    setInputValues({
      amount: "",
      description: "",
      date: new Date(),
    });
  };

  return (
    <View style={styles.container}>
      <Input
        label={"Amount"}
        icon="money"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: (text) => inputChangeHandler("amount", text),
        }}
      />

      <Input
        label={"Description"}
        icon="font"
        textInputConfig={{
          multiline: true,
          onChangeText: (text) => inputChangeHandler("description", text),
        }}
      />
      <Input
        label={"Date"}
        icon="clock-o"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: (text) => inputChangeHandler("date", text),
        }}
      />
      <View style={styles.buttonContainer}>
        <Button onPress={CancelExpense}>Cancel</Button>
        <Button onPress={handleSubmit}>{isEditing}</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  dateText: {
    fontSize: 16,
    marginTop: 8,
    color: "blue",
  },
});

export default ExpenseForm;
