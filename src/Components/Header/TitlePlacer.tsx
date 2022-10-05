import React from "react";
import { StyleSheet, View } from "react-native";

const TitlePlacer = () => {
  return <View style={styles.PlaceTitle}></View>;
};

export default TitlePlacer;

const styles = StyleSheet.create({
  PlaceTitle: {
    width: 200,
    height: 45,
    paddingLeft: 75,
    paddingTop: 15,
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 36,
    fontVariant_caps: "small-caps",
  },
});
