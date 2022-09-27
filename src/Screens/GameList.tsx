import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Pressable, Text, View } from "react-native";
import GotoButton from "../components/GotoButton";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "GameList">;

const GameList = (navigator: Props) => (
  <View>
    <Text>Game list screen </Text>
    <GotoButton title='Add game' to='Add' navigator={navigator} />
    <Pressable>
      <Text>Edit</Text>
    </Pressable>
  </View>
);

export default GameList;
