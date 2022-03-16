import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState } from "react";

import RestaurantsScreen from "./src/features/restuarants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import {
  useFonts as useLato,
  Lato_400Regular,
} from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme/index";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
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
        <RestaurantsScreen
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
