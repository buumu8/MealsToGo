import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SafeArea from "../../components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsNavigator } from "./restaurants.navigator";
const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColr: "tomato",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  };
};

const MapScreen = () => {
  return (
    <SafeArea>
      <Text>Map</Text>
    </SafeArea>
  );
};

const SettingScreen = () => {
  return (
    <SafeArea>
      <Text>Setting</Text>
    </SafeArea>
  );
};

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Restaurants"
          component={RestaurantsNavigator}
        />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
