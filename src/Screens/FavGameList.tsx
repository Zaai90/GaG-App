import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "FavGameList">;

const FavGameList = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Show all fav games</Text>
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
    </View>
  );
};

export default FavGameList;
