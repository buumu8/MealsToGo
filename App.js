import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState } from "react";

import RestaurantsScreen from "./src/features/restuarants/screens/restaurants.screen";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <RestaurantsScreen
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ExpoStatusBar style="auto" />
    </>
  );
}
