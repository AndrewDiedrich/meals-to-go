import React from "react";
import styled from "styled-components/native";
import { View, Image, Platform } from "react-native";
import { Text, Varient } from "../../infrastructure/ui/typography/text";
import WebView from "react-native-webview";

const CompactImage = styled(Image)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;
const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled(View)`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant }: { restaurant: any }) => {
  const ImageComp = isAndroid ? CompactWebview : CompactImage;
  return (
    <Item>
      <CompactImage source={{ uri: restaurant.photos[0] }} />
      <Text variant={Varient.CAPTION}>{restaurant.name}</Text>
    </Item>
  );
};
