import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import RecentExpenses from "../screen/RecentExpenses";
import AllExpenses from "../screen/AllExpenses";
import ManageExpenses from "../screen/ManageExpenses";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ExpensesOverview() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="RecentExpenses" component={RecentExpenses} />
      <Tab.Screen name="AllExpenses" component={AllExpenses} />
    </Tab.Navigator>
  );
}

function Navigators() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} />
        <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigators;
