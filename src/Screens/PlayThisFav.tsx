import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import GetAFav from "../Components/GetAFav";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "PlayThisFav">;

const PlayThisFav = () => {
  return (
    <View>
      <GetAFav />
    </View>
  );
};

export default PlayThisFav;
