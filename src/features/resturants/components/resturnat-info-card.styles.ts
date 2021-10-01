import styled from "styled-components/native";
import { View, Text } from "react-native";
import { Card } from "react-native-paper";
import { Theme } from "../../../infrastructure/theme";

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const Info = styled.View`
  padding: ${({ theme }: { theme: Theme }) => theme.space[3]};
`;

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const ResturnatCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;
export const ResturnatCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.primary};
`;

export const Row = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Rating = styled(View)`
  flex-direction: row;
`;

export const SectionEnd = styled(View)`
  flex-direction: row;
`;
