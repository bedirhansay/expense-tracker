import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet, Pressable, Image } from "react-native";

export const ExpensesItem = ({ item }) => {
  const nav = useNavigation();

  function ExpenseItemHandler() {
    nav.navigate("ManageExpenses", {
      id: item.id,
      title: item.description,
    });
  }

  return (
    <Pressable
      onPress={ExpenseItemHandler}
      style={({ pressed }) => [
        styles.itemContainer,
        pressed ? styles.pressable : "",
      ]}
    >
      <View style={styles.itemText}>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <Text style={styles.itemAmount}>{`$${item.amount.toFixed(2)}`}</Text>
        <Text style={styles.itemDate}>{item.date.toDateString()}</Text>
      </View>
      <View>
        <Image
          style={styles.logo}
          source={require("../assets/images/nike.jpg")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 8,
    marginTop: 20,
    marginVertical: 8,

    borderRadius: 8,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  itemText: {},
  itemDescription: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemAmount: {
    fontSize: 14,
    color: "green",
  },
  itemDate: {
    fontSize: 12,
    color: "gray",
  },
  pressable: {
    opacity: 0.8,
  },

  logo: {
    width: 70,
    height: 70,
    flex: 1,
    borderRadius: 200,
  },
});
