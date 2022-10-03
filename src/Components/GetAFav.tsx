import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useGameContext } from "../Context/GameContext";
import { Game } from "../Data/game";
import GAGCard from "./GAGCard";
import SoundButton from "./SoundButton";

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
    <View key={game?.id} style={styles.cardContainer}>
      {game ? <GAGCard game={game} /> : null}
      <SoundButton title='GaG another Fav 😍' onPress={() => setRerender(true)} />
    </View>
  );
};

export default GetAFav;

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 5,
  },
});
