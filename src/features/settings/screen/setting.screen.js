import React, { useContext, useState } from "react";

import { useFocusEffect } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Avatar, List } from "react-native-paper";
import styled from "styled-components/native";

import { TouchableOpacity } from "react-native";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import SafeArea from "../../../components/utility/safe-area.component";
import { colors } from "../../../infrastructure/theme/colors";

const SettingsItems = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  background-color: rgba(255, 255, 255, 0.4);
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

const SettingBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
    flex: 1;
    position absolute;
`;

const TransparentSafeArea = styled(SafeArea)`
  background-color: transparent;
`;

export const SettingScreen = ({ navigation }) => {
  const [photo, setPhoto] = useState(null);
  const { onLogout, user } = useContext(AuthenticationContext);

  async function getProfilePicture(currentUSer) {
    const photoUri = await AsyncStorage.getItem(
      `${currentUSer.uid}-photo`
    );
    setPhoto(photoUri);
  }
  useFocusEffect(() => {
    getProfilePicture(user);
  }, [user]);

  return (
    <SettingBackground>
      <TransparentSafeArea>
        <AvatarContainer>
          <TouchableOpacity
            onPress={() => navigation.navigate("Camera")}
          >
            {!photo && (
              <Avatar.Icon
                size={180}
                icon="human"
                backgroundColor={colors.brand.primary}
              />
            )}
            {photo && (
              <Avatar.Image
                size={180}
                source={{ uri: photo }}
                backgroundColor={colors.brand.primary}
              />
            )}
          </TouchableOpacity>
          <Spacer position="top" size="large">
            <Text variant="label">{user.email}</Text>
          </Spacer>
        </AvatarContainer>
        <List.Section>
          <SettingsItems
            title="Favourites"
            description="View your favourites"
            left={(props) => (
              <List.Icon
                {...props}
                color={colors.ui.error}
                icon="heart"
              />
            )}
            onPress={() => navigation.navigate("Favourites")}
          />
          <SettingsItems
            title="Payment"
            description="Coming Soon!"
            left={(props) => (
              <List.Icon
                {...props}
                color={colors.ui.secondary}
                icon="cart"
              />
            )}
            onPress={() => null}
          />
          <SettingsItems
            title="Past Orders"
            description="Coming Soon!"
            left={(props) => (
              <List.Icon
                {...props}
                color={colors.ui.secondary}
                icon="history"
              />
            )}
            onPress={() => null}
          />
          <Spacer position="top" />
          <SettingsItems
            title="Logout"
            left={(props) => (
              <List.Icon
                {...props}
                color={colors.ui.secondary}
                icon="door"
              />
            )}
            onPress={onLogout}
          />
        </List.Section>
      </TransparentSafeArea>
    </SettingBackground>
  );
};
