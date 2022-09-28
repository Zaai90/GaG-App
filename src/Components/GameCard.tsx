import React from "react";
import { Image, Text, View } from "react-native";
import { Game } from "../Data/game";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <View>
      <Text style={{ color: "red" }}>{game.title}</Text>
      <Text>{game.developer}</Text>
      <Image source={{ uri: game.imgUrl }} style={{ width: 50, height: 50 }} />
    </View>
  );
};

export default GameCard;
