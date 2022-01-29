import "react-native-gesture-handler";
import React from "react";
import { HomeScreen } from "screens/HomeScreen";
import { SubVoiceScreen } from "screens/SubVoiceScreen";
import { CareerScreen } from "screens/CareerScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "constants/colors";
import i18n from "constants/i18n/translations";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const stackOption = {
  headerStyle: { backgroundColor: colors.headers.activeColor },
  headerShown: true,
  headerLeftLabelVisible: true,
  headerTitleAlign: "center",
};

const tabOption = {
  headerShown: false,
  tabBarActiveTintColor: colors.tabs.activeColor,
  tabBarActiveBackgroundColor: colors.tabs.activeBackgroundColor,
  tabBarInactiveBackgroundColor: colors.tabs.passiveBackgroundColor,
  tabBarStyle: {
    borderTopWidth: 2,
    borderTopColor: colors.tabs.activeBackgroundColor,
  },
};

const HomeStacks = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={stackOption}>
      <Stack.Screen
        options={{ title: i18n.t("test") }}
        name="Home"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

const SubVoiceStacks = () => {
  return (
    <Stack.Navigator
      initialRouteName="SubVoiceScreen"
      screenOptions={stackOption}
    >
      <Stack.Screen
        options={{ title: "サンプルプロジェクト２" }}
        name="SubVoiceScreen"
        component={SubVoiceScreen}
      />
    </Stack.Navigator>
  );
};

const CareerStacks = () => {
  return (
    <Stack.Navigator initialRouteName="Career" screenOptions={stackOption}>
      <Stack.Screen
        options={{ title: "サンプルプロジェクト３" }}
        name="Career"
        component={CareerScreen}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={tabOption}>
        <Tab.Screen
          name="みじかめ"
          component={HomeStacks}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="angle-up" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="ながめ"
          component={SubVoiceStacks}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="angle-double-up" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="お役立ち"
          component={CareerStacks}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="plus" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
