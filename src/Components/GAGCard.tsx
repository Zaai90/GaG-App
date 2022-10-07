import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Game } from "../Data/game";

interface Props {
  game: Game;
}

const GAGCard = ({ game }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: game.imgUrl }} style={styles.GAGCardImage} />
      <Text style={{ color: "red" }}>Time to play {game.title}!</Text>
      <Text>Game genre: {game.genre}</Text>
      <Text>Developed by: {game.developer}</Text>
      <Text>Your game score: {game.score}</Text>
      <Text>{game.isFavourite}</Text>
    </View>
  );
};

export default GAGCard;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 4,
    paddingLeft: 4,
    paddingBottom: 70,
  },
  cardContainer: {
    marginBottom: 5,
  },
  GAGCardImage: {
    width: 200,
    height: 225,
  },
});
