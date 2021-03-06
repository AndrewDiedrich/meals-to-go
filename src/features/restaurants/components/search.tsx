import React, { useContext, useState, useEffect } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchView = styled(View)`
  padding: 16px;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const Search = ({
  isFavoritesToggled,
  onFavoritesToggle,
}: {
  isFavoritesToggled: boolean;
  onFavoritesToggle: () => void;
}) => {
  const { search, keyword } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchView>
      <Searchbar
        icon={isFavoritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavoritesToggle}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text: string) => {
          setSearchKeyword(text);
        }}
      />
    </SearchView>
  );
};
