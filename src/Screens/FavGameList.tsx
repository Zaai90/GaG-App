import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "FavGameListScreen">;

const FavGameList = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Show all fav games</Text>
    </View>
  );
};

export default FavGameList;
