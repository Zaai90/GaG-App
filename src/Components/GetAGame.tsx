import React from "react";
import { StyleSheet, View } from "react-native";
import { useGameContext } from "../Context/GameContext";
import GameCard from "./GameCard";

const GAG = () => {
  const { games } = useGameContext();
  const gameId = Math.floor(Math.random() * games.length + 1).toLocaleString();
  const { getGameById } = useGameContext();
  const game = getGameById(gameId);

  return (
    <View key={game.id} style={styles.cardContainer}>
      <GameCard game={game} />
    </View>
  );
};

export default GAG;

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 5,
  },
});
