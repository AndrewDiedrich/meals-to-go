import * as React from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { ResturantInfo } from "../components/resturant-info-card.component";
import styled from "styled-components/native";

const SearchView = styled(View)`
  padding: 16px;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const ResturantList = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

export const ResturantScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <>
      <SearchView>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchView>
      <ResturantList>
        <ResturantInfo
          resturant={{
            name: "Some resturant",
            icon: "sad",
            photos: [
              "https://media.istockphoto.com/photos/restaurant-kitchen-crew-in-action-picture-id1277763706",
            ],
            address: "1000 some random street",
            isOpen: true,
            rating: 3.2,
            isClosedTemporarily: true,
          }}
        />
      </ResturantList>
    </>
  );
};
