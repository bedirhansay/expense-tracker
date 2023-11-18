import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { MaterialIcons } from "@expo/vector-icons";
import RecentExpenses from "./RecentExpenses";

export const HomeScreen = () => {
  const categories = [
    {
      title: "Shopping",
      icon: "shopping-basket",
      backgroundColor: "blue",
    },
    {
      title: "Travel",
      icon: "card-travel",
      backgroundColor: "purple",
    },
    {
      title: "Withdraw",
      icon: "money",
      backgroundColor: "green",
    },
    {
      title: "Other",
      icon: "devices-other",
      backgroundColor: "brown",
    },
  ];

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.userContainer}>
          <View style={styles.contentWrapper}>
            <Image
              style={styles.image}
              source={require("../assets/images/user.jpg")}
            />
            <View>
              <Text style={styles.userName}>John Doe</Text>
            </View>
          </View>
        </View>
        {/* //! Current Balance */}
        <View style={styles.balance}>
          <View>
            <Text style={styles.balanceTitle}>Current Balance</Text>
            <Text style={styles.balanceSubtitle}>Cash Available</Text>
          </View>
          <View>
            <Text style={styles.balanceAmount}>$15,382</Text>
          </View>
        </View>

        {/* //! Categories */}
        <View style={styles.cardContainer}>
          {categories.map((item, index) => (
            <View
              key={index}
              style={[styles.card, { backgroundColor: item.backgroundColor }]}
            >
              <MaterialIcons name={item.icon} size={44} color="white" />
            </View>
          ))}
        </View>

        {/* //! recent Expenses */}
        <View style={styles.recent}>
          <RecentExpenses />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  recent: {
    marginTop: 30,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  contentWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  userContainer: {
    marginBottom: 20,
  },
  userName: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  balance: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 3,
  },
  balanceTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  balanceSubtitle: {
    fontSize: 14,
    color: "gray",
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default HomeScreen;
