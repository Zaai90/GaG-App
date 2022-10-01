import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import GetAGame from "../Components/GetAGame";
import TextToSpeech from "../Components/Speech";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "PlayThis">;

const PlayThis = () => {
  return (
    <View>
      <GetAGame />
    </View>
  );
};

export default PlayThis;
