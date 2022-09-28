import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { OmitGotoParamList, RootStackParamList } from "../navigation/types";

interface StyleProps {
  backgroundColor?: string;
  textColor?: string;
}

type Props = {
  navigator: NativeStackScreenProps<RootStackParamList, keyof OmitGotoParamList>;
  to: keyof OmitGotoParamList;
  title: string;
  style?: StyleProps;
}

const GotoButton = ({ navigator, title, to, style }: Props) => {
  return (
    <Pressable style={styles(style).button}
      onPress={() => {
        navigator.navigation.navigate(to);
      }}
    >
      <Text style={styles(style).text}>{title}</Text>

    </Pressable>
  );
};

export default GotoButton;


const styles = (style?: StyleProps) => StyleSheet.create({

  button: {
    marginVertical: 5,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: style?.backgroundColor || '#876796',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: style?.textColor || "white",
  },
});
