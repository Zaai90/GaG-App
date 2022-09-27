import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, Pressable, Text, View } from "react-native";
import GotoButton from "../Components/GotoButton";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "GameList">;

const GameList = (navigator: Props) => (
  <View>
    <Text>Game list screen </Text>
    <GotoButton title="Add game" to="Add" navigator={navigator} />
    <GotoButton title='Settings' to="Settings" navigator={navigator} />
    <GotoButton title="Home" to="Home" navigator={navigator} />
    <Pressable>Edit</Pressable>
  </View>
);

export default GameList;
