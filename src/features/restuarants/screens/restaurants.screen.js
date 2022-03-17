import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  Searchbar,
  ActivityIndicator,
  Colors,
} from "react-native-paper";
import RestaurantsInfoCard from "../components/restuarant-info-card.component";
import SafeArea from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
const SearchConatainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  justify-content: center;
`;

const RestaurantList = styled(FlatList).attrs({
  contnentContainerStyle: {
    padding: 16,
  },
})`
  padding: 16px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export default function RestaurantsScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const { isLoading, error, restaurants } = useContext(
    RestaurantsContext
  );

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating color={Colors.blue300} />
        </LoadingContainer>
      )}
      <SearchConatainer>
        <Searchbar
          placeholder="search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </SearchConatainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <>
              <Spacer position="bottom" size="large">
                <RestaurantsInfoCard restuarant={item} />
              </Spacer>
            </>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
