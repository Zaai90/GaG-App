import React, { useEffect, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import TextToSpeech from "../Components/Speech";
import { useGameContext } from "../Context/GameContext";
import { Game } from "../Data/game";
import SoundButton from "./Buttons/SoundButton";
import GAGCard from "./GAGCard";

const GetAGame = () => {
  const { games } = useGameContext();
  const { getGameById } = useGameContext();

  const [rerender, setRerender] = useState<boolean>(true);
  const [game, setGame] = React.useState<Game>();

  useEffect(() => {
    if (rerender) {
      const gameId: string = Math.floor(Math.random() * games.length + 1).toLocaleString();
      setGame(getGameById(gameId));
      setRerender(false);
    }
  }, [rerender, game]);

  return (
    <Animated.View key={game?.id} style={styles.cardContainer}>
      {game ? <GAGCard game={game} /> : null}
      <View style={{ alignItems: "center" }}>
        {game ? <TextToSpeech gameId={game.id} /> : null}
        <SoundButton title='GaG Again😒' onPress={() => setRerender(true)} />
      </View>
    </Animated.View>
  );
};

export default GetAGame;

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "white",
    opacity: 1,
  },
});
