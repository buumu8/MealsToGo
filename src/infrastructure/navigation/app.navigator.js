import React, { useContext } from "react";
import SafeArea from "../../components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { Text, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
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

const SettingScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Setting</Text>
      <Button title="logout" onPress={() => onLogout()} />
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
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Restaurants"
        component={RestaurantsNavigator}
      />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};
