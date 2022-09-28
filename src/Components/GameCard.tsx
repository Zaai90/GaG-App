import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Game } from "../Data/game";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <View style={style.container}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Image resizeMode='stretch' source={{ uri: game.imgUrl }} style={style.image} />
        <View style={{ flexShrink: 1 }}>
          <Text style={style.titleText}>{game.title}</Text>
          <Text style={style.text}>Genre: {game.genre}</Text>
          <Text style={style.text}>{game.developer}</Text>
          <Text style={style.text}>{game.score}</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#EBD4C2",
    padding: 10,
    minWidth: "95%",
    maxWidth: "95%",
    borderRadius: 10,
    margin: 5,
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: -10, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 15,
  },
  titleText: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "700",
  },
  image: {
    height: "100%",
    width: 90,
  },
});

export default GameCard;
