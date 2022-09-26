import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "GameListScreen">;

const GameListScreen = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>Game list screen </Text>
      <Button
        title='Add game'
        onPress={() => {
          navigation.navigate("AddScreen");
        }}
      />
      <Button
        title='Settings'
        onPress={() => {
          navigation.navigate("Settings");
        }}
      />
      <Button
        title='Home'
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <Button
        title='Edit'
        onPress={() => {
          navigation.navigate("EditScreen", { id: "1", path: "/" + route.name });
        }}
      />
    </View>
  );
};

export default GameListScreen;
