import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ActivityIndicator, Colors } from "react-native-paper";
import RestaurantsInfoCard from "../components/restuarant-info-card.component";
import SafeArea from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

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
  const { isLoading, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />
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
