import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import { OmitGotoParamList, RootStackParamList } from "../../navigation/types";
import Frostmourne from "../FrostmourneImage";
import { ButtonStyle } from "./GotoButton";
import HapticButton from "./Haptics";

type Props = {
  navigator: NativeStackScreenProps<RootStackParamList, keyof OmitGotoParamList>;
  style?: ButtonStyle;
  title: string;
  to: keyof OmitGotoParamList;
  hapticType?: "Light" | "Medium" | "Heavy" | "Success" | "Warning" | "Error";
};

const HomeButton = ({ navigator, style, title, to, hapticType }: Props) => {
  return (
    <HapticButton
      style={style ? style : basicStyle}
      title={title}
      to={to}
      navigator={navigator}
      hapticType={hapticType}
    >
      <Frostmourne />
    </HapticButton>
  );
};

export default HomeButton;

const basicStyle = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: "#91909d70",
    justifyContent: "flex-start",
    borderRadius: 10,
    marginBottom: 5,
    elevation: 0,
    marginVertical: 0,
    marginHorizontal: 0,
    paddingVertical: 0,
  },
  text: {
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 5,
  },
});
