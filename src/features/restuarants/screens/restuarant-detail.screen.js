import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List, Divider } from "react-native-paper";
import RestaurantsInfoCard from "../components/restuarant-info-card.component";
import SafeArea from "../../../components/utility/safe-area.component";
export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  return (
    <SafeArea>
      <RestaurantsInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          left={(props) => (
            <List.Icon {...props} icon="bread-slice" />
          )}
        >
          <List.Item title="Eggs Benedict" />
          <Divider />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Lunch"
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
          left={(props) => <List.Icon {...props} icon="hamburger" />}
        >
          <List.Item title="Burger w/ Fries" />
          <Divider />
          <List.Item title="Steak Sandwich" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Dinner"
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
          left={(props) => (
            <List.Icon {...props} icon="food-variant" />
          )}
        >
          <List.Item title="Pork Cutlet" />
          <Divider />
          <List.Item title="Spaghetti Bolognese" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Drinks"
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
          left={(props) => <List.Icon {...props} icon="cup" />}
        >
          <List.Item title="Coffee" />
          <Divider />
          <List.Item title="Tea" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
