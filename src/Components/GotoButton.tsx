import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from "react-native";
import { OmitGotoParamList, RootStackParamList } from "../navigation/types";
import { useSettings } from "../Context/SettingContext";

type Props = {
  navigator: NativeStackScreenProps<RootStackParamList, keyof OmitGotoParamList>;
  to: keyof OmitGotoParamList;
  title: string;
  style?: ButtonStyle;
}

type ButtonStyle = {
  button?: StyleProp<ViewStyle>;
  text?: StyleProp<TextStyle>;
}


const GotoButton = ({ navigator, title, to, style }: Props) => {
  const {isSoundOn} = useSettings();
  return (
    <Pressable style={[basicStyle.button, style?.button]}
    android_disableSound={!isSoundOn}  
    onPress={() => {
        
        navigator.navigation.navigate(to);
      }}
    >
      <Text style={[basicStyle.text, style?.text]}>{title}</Text>

    </Pressable>
  );
};

export default GotoButton;


const basicStyle = StyleSheet.create({

  button: {
    marginVertical: 5,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#876796',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: "white",
  },
});
