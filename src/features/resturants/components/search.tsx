import React, { useContext, useState, useEffect } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchView = styled(View)`
  padding: 16px;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const Search = () => {
  const { search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    search(searchKeyword);
  }, [searchKeyword, search]);

  return (
    <SearchView>
      <Searchbar
        placeholder="Search"
        value={searchKeyword}
        onSubmitEditing={() => {
          console.log("submitted");
          search(searchKeyword);
        }}
        onChangeText={(text: string) => {
          console.log("skldjhf");
          setSearchKeyword(text);
        }}
      />
    </SearchView>
  );
};
