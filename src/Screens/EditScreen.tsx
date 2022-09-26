import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "EditScreen">;

const EditScreen = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>Edit Screen</Text>
    </View>
  );
};

export default EditScreen;
