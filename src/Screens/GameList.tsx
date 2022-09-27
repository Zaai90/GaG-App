import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";
import GotoButton from "../Components/GotoButton";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "GameList">;

const GameList = (navigator: Props) => (
  <View>
    <Text>Game list screen </Text>
    <GotoButton title="Add game" navigator={navigator} />
    <GotoButton title='Settings'  navigator={navigator} />
      <GotoButton title="Home"  navigator={navigator} />
      <GotoButton title="Edit" navigator={navigator} />
  </View>
);

export default GameList;
