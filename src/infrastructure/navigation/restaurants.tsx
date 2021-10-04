import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurants-detail.screen";

const RestaurantStack = createStackNavigator();

export enum SCREEN_ROUTES {
  Restaurants = "Resturants",
  Details = "Details",
  Settings = "Settings",
}

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen
        name={SCREEN_ROUTES.Restaurants}
        component={RestaurantScreen}
      />
      <RestaurantStack.Screen
        name={SCREEN_ROUTES.Details}
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
