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
          </View>
          <View style={style.icons}>
            <MaterialCommunityIcons name='cards-heart-outline' size={24} color='purple' />
            <MaterialCommunityIcons name='pencil' size={24} color='purple' />
          </View>
        </View>

        <View style={style.score}>
          <Text style={{ fontSize: 20 }}>🍕🍕🍕🍕🍕</Text>
        </View>

        <View style={style.button}>
          <Button color='red' title='Delete game' />
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
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: -10, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    height: 150,
    position: "relative",
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
    height: "100%",
    width: 100,
  },
  textContainer: {
    paddingLeft: 10,
    width: 250,
    flexGrow: 1,
  },
  icons: {
    alignItems: "flex-end",
    position: "absolute",
    right: -20,
    height: 60,
    justifyContent: "space-between",
  },
  button: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "absolute",
    bottom: 0,
    right: -15,
  },
  score: {
    bottom: 5,
    position: "absolute",
    left: 10,
  },
});

export default GameCard;
