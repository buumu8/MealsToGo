import React, {
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";
import { Camera } from "expo-camera";
import styled from "styled-components/native";

import { View } from "react-native";
import { Button } from "react-native-paper";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { Text } from "../../../components/typography/text.component";

const CameraContainer = styled.View`
  flex: 1;
`;

const ButtonContainer = styled.View`
  flex: 1;
  background-color: transparent;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
`;

const CameraButton = styled(Button)`
  flex: 0.1;
  align-self: flex-end;
  align-items: center;
`;

const ProfileCamera = styled(Camera)`
  flex: 1;
`;

export const CameraScreen = ({ navigation }) => {
  const cameraRef = useRef();
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const { user } = useContext(AuthenticationContext);
  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <CameraContainer>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={type}
      >
        <ButtonContainer>
          <CameraButton
            icon="flip-to-back"
            mode="contained"
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            Flip
          </CameraButton>
          <CameraButton
            icon="camera"
            mode="contained"
            onPress={() => snap()}
          >
            Snap
          </CameraButton>
        </ButtonContainer>
      </ProfileCamera>
    </CameraContainer>
  );
};
