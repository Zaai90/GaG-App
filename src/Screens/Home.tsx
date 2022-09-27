import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import GotoButton from "../components/GotoButton";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = (navigator: Props) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <GotoButton title='Settings' name='Settings' navigator={navigator} />
      <GotoButton title='GaG me!😘' name='PlayThis' navigator={navigator} />
      <GotoButton title='GaG a Fav😊' name='PlayThisFav' navigator={navigator} />
      <GotoButton title='List of your games' name='GameList' navigator={navigator} />
      <GotoButton title='List of your favorite games' name='FavGameList' navigator={navigator} />
    </View>
  );
};

export default Home;
