import React, { useState, useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
} from "../components/account.styles";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { isLoading, onRegister, error } = useContext(
    AuthenticationContext
  );

  return (
    <AccountBackground>
      <Title variant="body">Meals To Go</Title>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label="email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <Spacer position="top" size="medium">
          <AuthInput
            label="password"
            textContentType="password"
            value={password}
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        <Spacer position="top" size="medium">
          <AuthInput
            label="confirm password"
            textContentType="password"
            value={repeatedPassword}
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setRepeatedPassword(p)}
          />
        </Spacer>
        <Spacer position="top" size="medium">
          <ErrorContainer>
            {error && <Text variant="error">{error}</Text>}
          </ErrorContainer>
        </Spacer>
        <Spacer position="top" size="medium">
          {!isLoading ? (
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => {
                onRegister(email, password, repeatedPassword);
              }}
            >
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator
              size={50}
              animating
              color={Colors.blue300}
            />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer position="top" size="large">
        <AuthButton
          mode="contained"
          onPress={() => navigation.goBack()}
        >
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
