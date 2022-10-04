import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import { FadeInView } from "../Components/AnimView";
import GotoButton from "../Components/Buttons/GotoButton";
import HapticButton from "../Components/Buttons/Haptics";
import { useGameContext } from "../Context/GameContext";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = (navigator: Props) => {
  const { getFavGames } = useGameContext();
  const FavGames = getFavGames();
  return (
    <View>
      <HapticButton title='GaG me!😘' to='PlayThis' navigator={navigator} hapticType='Heavy' />
      {FavGames.length > 0 ? (
        <HapticButton
          title='GaG a Fav😊'
          to='PlayThisFav'
          navigator={navigator}
          hapticType='Heavy'
        />
      ) : null}

      <GotoButton title='List of your games' to='GameList' navigator={navigator} />
      <FadeInView style={{ width: 250, height: 50, backgroundColor: "powderblue" }}>
        <Text>Hello</Text>
      </FadeInView>
    </View>
  );
};

export default Home;
