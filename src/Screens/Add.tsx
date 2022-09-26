import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Add">;

const Add = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Add game</Text>
      <Button
        title="Add game"
        onPress={() => {
          navigation.navigate("GameList");
        }}
      />
      <Button
        title="Cancel"
        onPress={() => {
          navigation.navigate("GameList");
        }}
      />
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

export default Add;
