import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { OmitGotoParamList, RootStackParamList } from "../navigation/types";
import BasicButton from "./BasicButton";

type Props = {
  navigator: NativeStackScreenProps<RootStackParamList, keyof OmitGotoParamList>;
  to: keyof OmitGotoParamList;
  title: string;
  style?: ButtonStyle;
};

type ButtonStyle = {
  button?: StyleProp<ViewStyle>;
  text?: StyleProp<TextStyle>;
};

const GotoButton = ({ navigator, title, to, style }: Props) => {
  return (
    <BasicButton title={title} style={style} onPress={() => navigator.navigation.navigate(to)} />
  )
};

export default GotoButton;