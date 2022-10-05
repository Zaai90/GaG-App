import * as React from "react";
import { Image, StyleSheet } from "react-native";

const Frostmourne = () => {
  return <Image source={require("../../assets/images/frostmourne.png")} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    height: 45,
    width: 85,
    resizeMode: "contain",
    justifyContent: "flex-start",
  },
});

export default Frostmourne;
