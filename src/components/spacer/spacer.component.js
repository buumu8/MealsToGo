import React from "react";
import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  bottom: "marginBottom",
  right: "marginRigth",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  return `${property}:${theme.space[sizeIndex]}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};
Spacer.defaultProps = {
  postion: "top",
  size: "small",
};
