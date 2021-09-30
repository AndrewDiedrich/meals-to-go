import React from "react";
import { View } from "react-native";
import styled, { useTheme } from "styled-components/native";

export enum Sizes {
  SMALL = 1,
  MEDIUM = 2,
  LARGE = 3,
}

export enum Positions {
  TOP = "margin-top",
  LEFT = "margin-left",
  RIGHT = " margin-right",
  BOTTOM = "margin-bottom",
}

const getVariant = (position: Positions, size: Sizes, theme: any) => {
  return `${position}: ${theme.space[size]}`;
};

const SpacerView = styled(View)`
  ${({ variant }: { variant: string }) => variant}
`;

export const Spacer = ({
  position = Positions.RIGHT,
  size = Sizes.MEDIUM,
  children = null,
}: {
  position: Positions;
  size: Sizes;
  children?: any;
}) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};
