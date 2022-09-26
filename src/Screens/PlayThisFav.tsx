import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/Types";

type Props = NativeStackScreenProps<RootStackParamList, "PlayThisFavScreen">;

const PlayThisFavScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Play this favorite screen</Text>
      <Button title="Settings" onPress={() => { navigation.navigate("Settings"); }} />
      <Button title="Home" onPress={() => { navigation.navigate("Home"); }} />
    </View>
  );
};

export default PlayThisFavScreen;
