import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingScreen } from "../../features/settings/screen/setting.screen";
import { FavouritesScreen } from "../../features/settings/screen/favorites.screen";
import { CameraScreen } from "../../features/settings/screen/camera.screen";

const SettingsStack = createNativeStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        options={{ header: () => null }}
        name="SettingsScreen"
        component={SettingScreen}
      />
      <SettingsStack.Screen
        name="Favourites"
        component={FavouritesScreen}
      />
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};
