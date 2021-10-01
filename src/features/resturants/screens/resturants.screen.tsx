import React, { useContext } from "react";
import { View } from "react-native";
import { Search } from "../components/search";
import { ActivityIndicator } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { FlatList } from "react-native";
import { ResturantCard } from "../components/resturant-info-card.component";
import styled from "styled-components/native";
import {
  ResturantContext,
  ResturantContextType,
} from "../../../services/resturant/resturant.context";

const ResturantList = styled(FlatList).attrs({
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

export const ResturantScreen = () => {
  const { resturants, isLoading, error } = useContext(
    ResturantContext
  ) as ResturantContextType;

  return (
    <>
      {isLoading && (
        <LoadingContainer>
          <Loading color={colors.ui.primary} animating={true} size={50} />
        </LoadingContainer>
      )}
      {error && (
        <LoadingContainer>
          <Loading color={colors.ui.primary} animating={true} size={50} />
        </LoadingContainer>
      )}
      <Search />
      <ResturantList
        keyExtractor={(item: any, _index: number) => item.name}
        data={resturants}
        renderItem={({ item }: { item: any }) => (
          <ResturantCard resturant={item} />
        )}
      />
    </>
  );
};
