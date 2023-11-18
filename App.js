import { StatusBar, View, Text } from "expo-status-bar";
import ManageExpenses from "./screen/ManageExpenses";
import RecentExpenses from "./screen/RecentExpenses";
import AllExpenses from "./screen/AllExpenses";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ExpensesContextProvider } from "./store/context";
import { HomeScreen } from "./screen/HomeScreen";
import {
  AllExpensesScreenOptions,
  BottomTabNavigatorOptions,
  ExpensesOverviewScreenOptions,
  HomeScreenOptions,
  ManageExpensesScreenOptions,
  RecentExpensesScreenOptions,
  StackNavigatorOptions,
} from "./utils/Constant/ScreenOptions";

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ExpensesOverview() {
  return (
    <BottomTab.Navigator screenOptions={BottomTabNavigatorOptions}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={HomeScreenOptions}
      />
      <BottomTab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={RecentExpensesScreenOptions}
      />
      <BottomTab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={AllExpensesScreenOptions}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={StackNavigatorOptions}>
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={ExpensesOverviewScreenOptions}
            />
            <Stack.Screen
              name="ManageExpenses"
              component={ManageExpenses}
              options={ManageExpensesScreenOptions}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
