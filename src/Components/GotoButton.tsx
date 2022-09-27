import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, StyleSheet } from "react-native";
import { OmitGotoParamList, RootStackParamList } from "../navigation/types";

type Props = {
  navigator: NativeStackScreenProps<RootStackParamList, keyof OmitGotoParamList>;
  to: keyof OmitGotoParamList;
  title: string;
};

const GotoButton = ({ navigator, title, to }: Props) => {
  return (
    <Button
      title={title}
      onPress={() => {
        navigator.navigation.navigate(to);
      }}
    />
  );
};

export default GotoButton;

const styles = StyleSheet.create({});
