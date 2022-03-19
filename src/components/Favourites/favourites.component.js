import React, { useContext } from "react";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const FavouriteButton = styled(TouchableOpacity)`
  background-color: transparent;
  border-color: #20232a;
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;
export const Favourites = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);
  const isFavourite = favourites.find(
    (r) => r.placeId === restaurant.placeId
  );
  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
