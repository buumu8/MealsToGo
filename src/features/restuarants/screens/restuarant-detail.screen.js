import React from "react";
import RestaurantsInfoCard from "../components/restuarant-info-card.component";
import SafeArea from "../../../components/utility/safe-area.component";
export const RestaurantDetailScreen = ({ route }) => {
  const restuarant = route.params;
  return (
    <SafeArea>
      <RestaurantsInfoCard restuarant={restuarant} />
    </SafeArea>
  );
};
