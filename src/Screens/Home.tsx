import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import HomeButton from "../Components/Buttons/HomeButton";
import BackgroundHomeVideo from "../Components/Videobackground";
import { useGameContext } from "../Context/GameContext";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = (navigator: Props) => {
  const { games, getFavGames } = useGameContext();
  const FavGames = getFavGames();
  return (
    <View style={{ backgroundColor: "red", height: "100%" }}>
      <BackgroundHomeVideo navigator={navigator} />
      <View style={{ position: "absolute", bottom: "5%", alignSelf: "center" }}>
        {games.length > 0 ? (
          <HomeButton title='GaG me!😘' to='PlayThis' navigator={navigator} hapticType='Heavy' />
        ) : null}
        {FavGames.length > 0 ? (
          <HomeButton
            title='GaG a Fav😊'
            to='PlayThisFav'
            navigator={navigator}
            hapticType='Heavy'
          />
        ) : null}
        <HomeButton title='List of your games' to='GameList' navigator={navigator} />
      </View>
    </View>
  );
};

export default Home;
