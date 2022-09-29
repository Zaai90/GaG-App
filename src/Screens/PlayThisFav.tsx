import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, View } from "react-native";
import GAGAFav from "../Components/GetAFav";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "PlayThisFav">;

const PlayThisFav = (navigator: Props) => {
  return (
    <View>
      <GAGAFav />
      <Button title={"Go back"} onPress={() => navigator.navigation.goBack()} />
    </View>
  );
};

export default PlayThisFav;
