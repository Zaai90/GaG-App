import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Pressable, StyleSheet, StyleProp, ViewStyle, TextStyle, Text} from "react-native";
import { OmitGotoParamList, RootStackParamList } from "../navigation/types";
import * as Haptics from "expo-haptics";
import { useSettings } from "../Context/SettingContext";

// Work as GoToButton but with optional haptic feedback parameter

type Props = {
  navigator: NativeStackScreenProps<RootStackParamList, keyof OmitGotoParamList>;
  to: keyof OmitGotoParamList;
  title: string;
  hapticType?: "Light" | "Medium" | "Heavy" | "Success" | "Warning" | "Error";
  style?: ButtonStyle;
};

type ButtonStyle = {
  button?: StyleProp<ViewStyle>;
  text?: StyleProp<TextStyle>;
};

const HapticButton = ({ navigator, title, to, hapticType, style }: Props) => {
    const {isSoundOn} = useSettings();
    return (
        <Pressable style={[basicStyle.button, style?.button]}
        android_disableSound={!isSoundOn}
        onPress={() => {
            if (hapticType === "Success" || hapticType === "Warning" || hapticType === "Error") {
                Haptics.notificationAsync(Haptics.NotificationFeedbackType[hapticType]);
            }
            if(hapticType === "Light" || hapticType === "Medium" || hapticType === "Heavy") {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle[hapticType]);
            }
            navigator.navigation.navigate(to);
            }}
            >
                <Text style={[basicStyle.text, style?.text]}>{title}</Text>
                </Pressable>
            );
        }
        navigator.navigation.navigate(to);
      }}
    >
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
