import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, Button } from "react-native";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>Home Screen</Text>
      {/* <Button title="GAG me" onPress={() => {navigation.navigate('SelectScreen')}}/> */}
    </View>
  );
};

export default HomeScreen;