import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import { RootStackParamList } from "../navigation/Types";

type Props = NativeStackScreenProps<RootStackParamList, "PlayThisFavScreen">;

const PlayThisFavScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Play this favorite screen</Text>
    </View>
  );
};

export default PlayThisFavScreen;
