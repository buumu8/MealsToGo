import styled from "styled-components/native";

import { StatusBar, Platform } from "react-native";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === "android"
    ? StatusBar.currentHeight
    : 0}px;
`;

export default SafeArea;
