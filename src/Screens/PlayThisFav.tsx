import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, StyleSheet } from "react-native";
import GetAFav from "../Components/GetAFav";
import GetAGame from "../Components/GetAGame";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "PlayThisFav">;

const PlayThisFav = () => {
  return (
    <View style={styles.container}>
      <GetAGame isFav={true} />
    </View>
  );
};

export default PlayThisFav;

const styles = StyleSheet.create({
  container : {
    justifyContent: "center",
    backgroundColor : "#EBD4C2",
    flex : 1,
  }
})
