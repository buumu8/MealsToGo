import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import * as firebase from "firebase";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";
import { Navigation } from "./src/infrastructure/navigation/index";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import LocationContextProvider from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import {
  useFonts as useLato,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyBcQT2yEFm6VVDSya_xq5PS0F8Njtbb8rw",
  authDomain: "mealstogo-66537.firebaseapp.com",
  projectId: "mealstogo-66537",
  storageBucket: "mealstogo-66537.appspot.com",
  messagingSenderId: "235433804181",
  appId: "1:235433804181:web:b53fc87f65ecea9a91f69c",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
