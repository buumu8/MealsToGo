import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RestaurantsScreen from "./src/features/restuarants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";
import SafeArea from "./src/components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import {
  useFonts as useLato,
  Lato_400Regular,
} from "@expo-google-fonts/lato";

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColr: "tomato",
    tabBarInactiveTintColor: "gray",
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

export default function App() {
  const Tab = createBottomTabNavigator();

  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator screenOptions={screenOptions}>
              <Tab.Screen
                name="Restaurants"
                component={RestaurantsScreen}
              />
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Settings" component={SettingScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
