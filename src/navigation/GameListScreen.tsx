import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import { RootStackParamList } from "./types";

type Props = NativeStackScreenProps<RootStackParamList, "GameListScreen">;

const GameListScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Game list screen </Text>
    </View>
  );
};

export default GameListScreen;
