import React, { useContext, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Search } from "../components/search";
import { ActivityIndicator } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { FlatList } from "react-native";
import { RestaurantCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import {
  RestaurantContext,
  RestaurantContextType,
} from "../../../services/restaurant/restaurant.context";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { RESTAURANT_SCREEN_ROUTES } from "../../../infrastructure/navigation/restaurants";
import { FavoritesBar } from "../../../components/favorites/favorites-bar";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestaurantScreen = ({ navigation }: { navigation: any }) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const { restaurants, isLoading, error } = useContext(
    RestaurantContext
  ) as RestaurantContextType;
  const { favorites } = useContext(FavoritesContext);

  return (
    <>
      {isLoading && (
        <LoadingContainer>
          <Loading color={colors.ui.primary} animating={true} size={50} />
        </LoadingContainer>
      )}
      {/* {error && (
        <LoadingContainer>
          <Loading color={colors.ui.primary} animating={true} size={50} />
        </LoadingContainer>
      )} */}
      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      <RestaurantList
        keyExtractor={(item: any, _index: number) => item.name}
        data={restaurants}
        renderItem={({ item }: { item: any }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(RESTAURANT_SCREEN_ROUTES.Details, {
                restaurant: item,
              })
            }
          >
            <RestaurantCard restaurant={item} />
          </TouchableOpacity>
        )}
      />
    </>
  );
};
