import React from "react";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "../../components/ui/IconButton";
import { GlobalStyles } from "./GlobalStyles";

//! Bottom Tab Navigator

export const BottomTabNavigatorOptions = ({ navigation }) => {
  return {
    headerStyle: {
      backgroundColor: GlobalStyles.colors.primary50,
    },
    headerTintColor: "white",
    tabBarStyle: {
      backgroundColor: GlobalStyles.colors.primary50,
      borderTopWidth: 1,
      borderTopColor: "white",
    },
    tabBarActiveTintColor: "white",
    tabBarInactiveTintColor: "gray",
    tabBarLabelStyle: {
      fontSize: 14,
      fontWeight: "bold",
    },
    tabBarIconStyle: {
      marginBottom: -3,
    },
    tabBarIndicatorStyle: {
      backgroundColor: "white",
      height: 13,
    },
    // tabBarShowLabel: false, // Tab çubuğundaki metinleri gizler
  };
};

export const RecentExpensesScreenOptions = ({ navigation }) => {
  return {
    title: "Recent Expenses",
    tabBarLabel: "Recent Expenses",
    tabBarIcon: ({ icon, size }) => (
      <Ionicons name="hourglass" size={18} color="white" />
    ),
    headerRight: () => (
      <IconButton
        iconName="add"
        onPress={() => navigation.navigate("ManageExpenses")}
      />
    ),
  };
};

export const AllExpensesScreenOptions = ({ navigation }) => {
  return {
    title: "All Expenses",
    tabBarLabel: "All Expenses",
    tabBarIcon: ({ icon, size, color }) => (
      <Ionicons name="calendar" size={18} color="white" />
    ),
  };
};

export const HomeScreenOptions = ({ navigation }) => {
  return {
    headerShown: false,
    tabBarLabel: "Home",
    tabBarIcon: ({ icon, size }) => (
      <Ionicons name="home" size={18} color="white" />
    ),
  };
};

//! Stack Navigator

export const StackNavigatorOptions = () => {
  return {
    headerStyle: { backgroundColor: GlobalStyles.colors.primary50 },
    headerTintColor: "white",
    headerShown: false,
  };
};

export const ExpensesOverviewScreenOptions = () => {
  return {};
};

export const ManageExpensesScreenOptions = ({ navigation }) => {
  return {
    headerStyle: {
      backgroundColor: GlobalStyles.colors.primary50,
    },
    headerTintColor: "white",
    presentation: "modal",
  };
};
