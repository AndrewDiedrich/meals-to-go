import React from "react";
import styled from "styled-components/native";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Spacer, Positions, Sizes } from "../../infrastructure/ui/Spacer";
import { RESTAURANT_SCREEN_ROUTES } from "../../infrastructure/navigation/restaurants";
import { Text, Varient } from "../../infrastructure/ui/typography/text";
const FavoritesWrapper = styled(View)`
  padding: 10px;
`;

export const FavoritesBar = ({
  favorites,
  onNavigate,
}: {
  favorites: any[];
  onNavigate: (route: string, params: any) => void;
}) => {
  if (!favorites.length) {
    return null;
  }
  return (
    <FavoritesWrapper>
      <Spacer position={Positions.LEFT} size={Sizes.LARGE}>
        <Text variant={Varient.CAPTION}>Favorites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          return (
            <Spacer
              position={Positions.LEFT}
              size={Sizes.MEDIUM}
              key={restaurant.name}
            >
              <TouchableOpacity
                onPress={() =>
                  onNavigate(RESTAURANT_SCREEN_ROUTES.Details, { restaurant })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
};
