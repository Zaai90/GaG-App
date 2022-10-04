import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
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
      <GotoButton title='List of your favorite games' to='FavGameList' navigator={navigator} />
    </View>
  );
};

export default Home;
