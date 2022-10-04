import React from "react";
import {
  GestureResponderEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import { useSettings } from "../Context/SettingContext";

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  style?: ButtonStyle;
};

type ButtonStyle = {
  button?: StyleProp<ViewStyle>;
  text?: StyleProp<TextStyle>;
};

const BasicButton = ({ onPress, title, style }: Props) => {
  const { isSoundOn } = useSettings();

  return (
    <Pressable
      style={[basicStyle.button, style?.button]}
      android_disableSound={!isSoundOn}
      onPress={onPress}
    >
      <Text style={[basicStyle.text, style?.text]}>{title}</Text>
    </Pressable>
  );
};

export default BasicButton;

const basicStyle = StyleSheet.create({
  button: {
    marginVertical: 5,
    marginHorizontal: 70,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#876796",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
