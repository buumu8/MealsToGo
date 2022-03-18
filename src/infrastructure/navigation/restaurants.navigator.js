import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantsScreen from "../../features/restuarants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restuarants/screens/restuarant-detail.screen";
const RestaurantStack = createNativeStackNavigator();

export const RestaurantsNavigator = () => {
  //   console.log(route);
  return (
    <RestaurantStack.Navigator
    //   screenOptions={{
    //     headerShown: false,
    //   }}
    >
      <RestaurantStack.Screen
        name="RestaurantsScreen"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetailScreen"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
