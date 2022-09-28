import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import GotoButton from "../Components/GotoButton";
import { RootStackParamList } from "../navigation/types";
import HapticButton  from "../Components/Haptics";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = (navigator: Props) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <HapticButton title='GaG me!😘' to='PlayThis' navigator={navigator} hapticType="Heavy" />
      <HapticButton title='GaG a Fav😊' to='PlayThisFav' navigator={navigator} hapticType="Heavy" />
      <GotoButton title='List of your games' to='GameList' navigator={navigator} />
      <GotoButton title='List of your favorite games' to='FavGameList' navigator={navigator} />
    </View>
  );
};

export default Home;
