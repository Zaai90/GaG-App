import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useGameContext } from "../Context/GameContext";
import { Game } from "../Data/game";
import { FadeInView } from "./AnimView";
import SoundButton from "./Buttons/SoundButton";
import GAGCard from "./GAGCard";
import TextToSpeech from "./Speech";

const GetAFav = () => {
  const { getFavGames } = useGameContext();

  const [rerender, setRerender] = useState<boolean>(true);
  const [game, setGame] = React.useState<Game>();

  useEffect(() => {
    if (rerender) {
      const FavGames = getFavGames();
      const FavGameNumber = Math.floor(Math.random() * FavGames.length);
      setGame(FavGames[FavGameNumber]);
      setRerender(false);
    }
  }, [rerender, game]);

  return (
    <FadeInView key={game?.id} style={styles.cardContainer}>
      {game ? <GAGCard game={game} /> : null}
      <View style={{ alignItems: "center" }}>
        {game ? <TextToSpeech gameId={game.id} /> : null}
        <SoundButton title='GaG another Fav 😍' onPress={() => setRerender(true)} />
      </View>
    </FadeInView>
  );
};

export default GetAFav;

const styles = StyleSheet.create({
  cardContainer: {
    margintop: 20,
    marginBottom: 5,
    backgroundColor: "white",
  },
});
