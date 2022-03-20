import React, { useContext } from "react";

import { Avatar, List } from "react-native-paper";
import styled from "styled-components/native";

import { TouchableOpacity } from "react-native";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import SafeArea from "../../../components/utility/safe-area.component";

const SettingsItems = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity
          onPress={() => navigation.navigate("Camera")}
        >
          <Avatar.Icon
            size={180}
            icon="human"
            backgroundColor="#2182BD"
          />
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
            <List.Icon {...props} color="black" icon="heart" />
          )}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItems
          title="Logout"
          left={(props) => (
            <List.Icon {...props} color="black" icon="door" />
          )}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
