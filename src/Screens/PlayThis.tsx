import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, StyleSheet } from "react-native";
import GetAGame from "../Components/GetAGame";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "PlayThis">;

const PlayThis = () => {
  return (
    <View style={styles.container}>
      <GetAGame />
    </View>
  );
};

export default PlayThis;

const styles = StyleSheet.create({
  container : {
    justifyContent: "center",
    backgroundColor : "#EBD4C2",
    flex : 1,
  }
})