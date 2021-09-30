import React from "react";
import { Text } from "react-native";
import { Intent } from "./Intent";

export const Tag = ({ intent, text }: { intent: Intent; text: string }) => (
  <Text style={{ color: `${intent}` }}>{text}</Text>
);
