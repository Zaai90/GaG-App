import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button} from "react-native";
import { OmitGotoParamList, RootStackParamList } from "../navigation/types";
import * as Haptics from "expo-haptics";

// Work as GoToButton but with optional haptic feedback parameter


type Props = {
    navigator: NativeStackScreenProps<RootStackParamList, keyof OmitGotoParamList>;
    to: keyof OmitGotoParamList;
    title: string;
    hapticType?: "Light" | "Medium" | "Heavy" | "Success" | "Warning" | "Error";
};

const HapticButton = ({ navigator, title, to, hapticType }: Props) => {
    return (
        <Button
            title={title}
            onPress={() => {
                if (hapticType === "Success" || hapticType === "Warning" || hapticType === "Error") {
                    Haptics.notificationAsync(Haptics.NotificationFeedbackType[hapticType]);
                }
                if(hapticType === "Light" || hapticType === "Medium" || hapticType === "Heavy") {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle[hapticType]);
                }
                navigator.navigation.navigate(to);
            }}
        />
    );
}

export default HapticButton;