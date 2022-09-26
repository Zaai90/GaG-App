import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Settings">;

const Settings = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Settings screen</Text>
    </View>
  );
};

export default Settings;
