import React from "react";
import { View } from "react-native";
import {
  Rating,
  RestaurnatCard,
  RestaurnatCardCover,
  Info,
  Icon,
  SectionEnd,
  Row,
  Address,
} from "./restaurnat-info-card.styles";
import {
  Spacer,
  Sizes,
  Positions,
  Varient,
  Text,
} from "../../../infrastructure/ui";
import { SvgFromXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

interface Restaurant {
  name: string;
  icon: string;
  photos: string[];
  vicinity: string;
  isOpen: boolean;
  rating: number;
  isClosedTemporarily: boolean;
  placeId: string;
}

export const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  const {
    name,
    icon,
    photos,
    vicinity,
    isOpen,
    rating,
    isClosedTemporarily,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurnatCard elevation={5}>
      <RestaurnatCardCover key={restaurant.name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant={Varient.LABEL}>{name}</Text>
        <Row>
          <Rating>
            {ratingArray.map((_num: any, index: number) => {
              return (
                <SvgFromXml
                  key={`res-rating-${placeId}-${index}`}
                  xml={star}
                  width={20}
                  height={20}
                />
              );
            })}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant={Varient.ERROR}>CLOSED TEMPORARILY</Text>
            )}
            <Spacer size={Sizes.LARGE} position={Positions.RIGHT} />
            {isOpen && <SvgFromXml xml={open} width={20} height={20} />}
            <View>
              <Icon source={{ uri: icon }} width={20} height={20} />
            </View>
          </SectionEnd>
        </Row>
        <Address>{vicinity}</Address>
      </Info>
    </RestaurnatCard>
  );
};
