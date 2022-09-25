import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "PlayThisScreen">;

const PlayThisScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Play this screen </Text>
    </View>
  );
};

export default PlayThisScreen;
