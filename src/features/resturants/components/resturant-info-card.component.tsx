import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import {
  Tag,
  Intent,
  Spacer,
  Sizes,
  Positions,
} from "../../../infrastructure/ui";
import { SvgFromXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

interface Resturant {
  name: string;
  icon: string;
  photos: string[];
  address: string;
  isOpen: boolean;
  rating: number;
  isClosedTemporarily: boolean;
}

const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const ResturnatCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;
const ResturnatCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[4]};
  background-color: ${(props) => props.theme.colors.ui.primary};
`;

const Row = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Rating = styled(View)`
  flex-direction: row;
`;

const SectionEnd = styled(View)`
  flex-direction: row;
`;

export const ResturantInfo = ({ resturant }: { resturant: Resturant }) => {
  const { name, icon, photos, address, isOpen, rating, isClosedTemporarily } =
    resturant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <ResturnatCard elevation={5}>
      <ResturnatCardCover key={resturant.name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Row>
          <Rating>
            {ratingArray.map(() => (
              <SvgFromXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Tag intent={Intent.DANGER} text={"CLOSED TEMPORARILY"} />
            )}
            <Spacer size={Sizes.LARGE} position={Positions.RIGHT} />
            {isOpen && <SvgFromXml xml={open} width={20} height={20} />}
            <View>{/* <Image /> */}</View>
          </SectionEnd>
        </Row>
        <Address>{address}</Address>
      </Info>
    </ResturnatCard>
  );
};
