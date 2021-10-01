import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
import { ResturantScreen as ResturantScreenComponent } from "./src/features/resturants/screens/resturants.screen";
import { ThemeProvider } from "styled-components/native";
import { SafeArea } from "./src/utils/safe-area-view";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { colors } from "./src/infrastructure/theme/colors";
// context
import { ResturantsContextProvider } from "./src/services/resturant/resturant.context";
import { LocationContextProvider } from "./src/services/location/location.context";

const Tab = createBottomTabNavigator();

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
};

const ResturantScreen = () => {
  return <ResturantScreenComponent />;
};

const MapScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Map!</Text>
    </View>
  );
};

const MyTabs = () => (
  <Tab.Navigator
    initialRouteName="Resturants"
    screenOptions={{
      tabBarActiveTintColor: colors.brand.primary,
      tabBarInactiveTintColor: "#000000",
    }}
  >
    <Tab.Screen
      name="Resturants"
      component={ResturantScreen}
      options={{
        tabBarLabel: "Resturants",
        tabBarIcon: () => <Ionicons name="restaurant" size={24} />,
      }}
    />
    <Tab.Screen
      name="Map"
      component={MapScreen}
      options={{
        tabBarLabel: "Map",
        tabBarIcon: () => <Entypo name="map" size={24} />,
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarLabel: "Settings",
        tabBarIcon: () => <Ionicons name="settings" size={24} />,
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <ResturantsContextProvider>
          <NavigationContainer>
            <SafeArea>
              <MyTabs />
              <ExpoStatusBar style="auto" />
            </SafeArea>
            <ExpoStatusBar />
          </NavigationContainer>
        </ResturantsContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  );
}
