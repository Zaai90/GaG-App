import React from "react";
import { Text, View } from "react-native";
import { Game } from "../Data/Game";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <View>
      <Text style={{ color: "red" }}>{game.title}</Text>
      <Text>{game.developer}</Text>
    </View>
  );
};

export default GameCard;
