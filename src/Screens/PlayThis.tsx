import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import GAG from "../Components/GetAGame";
import HapticButton from "../Components/HapticButton";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "PlayThis">;

const PlayThis = (navigator: Props) => {
  return (
    <View>
      <View>
        <GAG />
      </View>

      <HapticButton title='GaG Again😒' to='PlayThis' navigator={navigator} hapticType='Success' />
    </View>
  );
};

export default PlayThis;
