import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { SafeArea } from "../../utils/safe-area-view";
// Navigators
import { RestaurantsNavigator } from "./restaurants";

const Tab = createBottomTabNavigator();

export enum ROUTES_NAMES {
  Restaurants = "Restaurants",
  Map = "Map",
  Settings = "Settings",
}

enum TAB_ICON {
  Restaurants = "md-restaurant",
  Map = "md-map",
  Settings = "md-settings",
}

interface Route {
  name: ROUTES_NAMES;
}

const Settings = () => {
  return (
    <>
      <Text>Settings</Text>
    </>
  );
};
const Map = () => {
  return (
    <>
      <Text>Map</Text>
    </>
  );
};

const options = {
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
};

const createScreenOptions = ({ route }: { route: Route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }: { size: number; color: string }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    ...options,
  };
};

export const AppNavigator = () => (
  <SafeArea>
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  </SafeArea>
);
