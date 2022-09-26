import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Settings">;

const Settings = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Settings screen</Text>
      <Button
        title='Home'
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

export default Settings;
