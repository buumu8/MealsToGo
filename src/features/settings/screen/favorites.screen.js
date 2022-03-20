import React, { useContext } from "react";
import { FlatList, TouchableOpacity, View, Text } from "react-native";
import styled from "styled-components/native";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import RestaurantsInfoCard from "../../restuarants/components/restuarant-info-card.component";
import SafeArea from "../../../components/utility/safe-area.component";
import { RestaurantList } from "../../restuarants/components/restaurant-list.styles";

const NoFavouriteArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  console.log(favourites);
  return favourites.length ? (
    <RestaurantList
      data={favourites}
      renderItem={({ item }) => {
        return (
          <>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetailScreen", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantsInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          </>
        );
      }}
      keyExtractor={(item) => item.name}
    />
  ) : (
    <NoFavouriteArea>
      <Text center>No favourites yet</Text>
    </NoFavouriteArea>
  );
};
