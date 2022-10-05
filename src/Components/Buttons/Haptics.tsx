import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as Haptics from "expo-haptics";
import React, { ReactNode } from "react";
import { Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from "react-native";
import { useSettings } from "../../Context/SettingContext";
import { OmitGotoParamList, RootStackParamList } from "../../navigation/types";

// Work as GoToButton but with optional haptic feedback parameter

type Props = {
  navigator: NativeStackScreenProps<RootStackParamList, keyof OmitGotoParamList>;
  to: keyof OmitGotoParamList;
  title: string;
  hapticType?: "Light" | "Medium" | "Heavy" | "Success" | "Warning" | "Error";
  style?: ButtonStyle;
  children?: ReactNode;
};

type ButtonStyle = {
  button?: StyleProp<ViewStyle>;
  text?: StyleProp<TextStyle>;
};

const HapticButton = ({ navigator, title, to, hapticType, style, children }: Props) => {
  const { isSoundOn, isVibrationOn } = useSettings();
  return (
    <Pressable
      style={[basicStyle.button, style?.button]}
      android_disableSound={!isSoundOn}
      onPress={() => {
        if (isVibrationOn === true) {
          if (hapticType === "Success" || hapticType === "Warning" || hapticType === "Error") {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType[hapticType]);
          }
          if (hapticType === "Light" || hapticType === "Medium" || hapticType === "Heavy") {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle[hapticType]);
          }
        }
        navigator.navigation.navigate(to);
      }}
    >
      {children}
      <Text style={[basicStyle.text, style?.text]}>{title}</Text>
    </Pressable>
  );
};

export async function VibrationSuccess() {
  await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
}

export default HapticButton;

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
