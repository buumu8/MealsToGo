import styled from "styled-components/native";

import { StatusBar, Platform } from "react-native";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary}
  padding-top: ${
    Platform.OS === "android" ? StatusBar.currentHeight : 0
  }px;
`;

export default SafeArea;
