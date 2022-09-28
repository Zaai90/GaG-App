import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { Game } from "../Data/game";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <View style={style.container}>
      <View>
        <Image resizeMode='stretch' source={{ uri: game.imgUrl }} style={style.image} />
      </View>

      <View>
        <View style={{ flexDirection: "row" }}>
          <View style={style.textContainer}>
            <Text style={style.titleText}>{game.title}</Text>
            <Text style={style.text}>Genre: {game.genre}</Text>
            <Text style={style.text}>Developer: {game.developer}</Text>
            <Text style={style.text}>{game.score}</Text>
          </View>

          <View style={{ backgroundColor: "green" }}>
            <MaterialCommunityIcons name='cards-heart-outline' size={24} color='purple' />
            <MaterialCommunityIcons name='pencil' size={24} color='purple' />
          </View>
        </View>

        <View style={{ justifyContent: "flex-end", flexGrow: 1, backgroundColor: "yellow" }}>
          <Button title='Delete game' />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
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
    height: 185,
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 15,
  },
  titleText: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "700",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 5,
    textShadowOpacity: 0.2,
  },
  image: {
    height: 100,
    width: 90,
  },
  textContainer: {
    flexGrow: 1,
    paddingLeft: 10,
    backgroundColor: "red",
    flexWrap: "wrap",
  },
});

export default GameCard;
