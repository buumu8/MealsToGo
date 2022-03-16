import React from "react";
import styled from "styled-components/native";

import { StatusBar, Platform } from "react-native";

import { Searchbar } from "react-native-paper";
import RestaurantsInfoCard from "../components/restuarant-info-card.component";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === "android"
    ? StatusBar.currentHeight
    : 0}px;
`;

const SearchConatainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
  justify-content: center;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

export default function RestaurantsScreen({
  searchQuery,
  setSearchQuery,
}) {
  return (
    <SafeArea>
      <SearchConatainer>
        <Searchbar
          placeholder="search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </SearchConatainer>
      <RestaurantListContainer>
        <RestaurantsInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
}
