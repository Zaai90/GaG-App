import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "AddScreen">;

const AddScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Add game</Text>
      <Button
        title='Add game'
        onPress={() => {
          navigation.navigate("GameListScreen");
        }}
      />
      <Button
        title='Cancel'
        onPress={() => {
          navigation.navigate("GameListScreen");
        }}
      />
      <Button
        title='Home'
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

export default AddScreen;
