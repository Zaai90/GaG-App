import { Audio } from "expo-av";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import DeathSoundEffect from "../../assets/DeathSoundEffect.wav";
import { useGameContext } from "../Context/GameContext";
import { Game } from "../Data/game";
import GAGCard from "./GAGCard";

const GetAGame = () => {
  const { games } = useGameContext();
  const { getGameById } = useGameContext();

  const [sound, setSound] = React.useState<Audio.Sound | null>(null);
  const [rerender, setRerender] = useState<boolean>(true);
  const [game, setGame] = React.useState<Game>();

  useEffect(() => {
    if (rerender) {
      const gameId = Math.floor(Math.random() * games.length + 1).toLocaleString();
      setGame(getGameById(gameId));
      setRerender(false);
    }
  }, [rerender, game]);

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(DeathSoundEffect);
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View key={game?.id} style={styles.cardContainer}>
      {game ? <GAGCard game={game} /> : null}
      <Button title='GaG Again😒' onPress={() => setRerender(true)} />
      <Button title='Play Sound' onPress={playSound} />
    </View>
  );
};

export default GetAGame;

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 5,
  },
});
