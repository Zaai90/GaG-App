import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Speech from "expo-speech";
import React from "react";
import { View } from "react-native";
import { useGameContext } from "../Context/GameContext";
import { Game } from "../Data/game";

interface Props {
  gameId: string;
}

function TextToSpeech({ gameId }: Props) {
  const { getGameById } = useGameContext();
  const game: Game = getGameById(gameId);

  const speak = () => {
    const genreToSay = game.genre;
    const titleToSay = game.title;
    const developerToSay = game.developer;
    const scoreToSay = game.score;
    const gameToSay =
      "You should play " +
      titleToSay +
      ". The genre is " +
      genreToSay +
      ". Developed by " +
      developerToSay +
      ". You have rated the game " +
      scoreToSay +
      " out of 5";
    Speech.speak(gameToSay, {
      language: "en-EN",
    });
  };

  return (
    <View>
      <MaterialCommunityIcons name='text-to-speech' size={30} color='black' onPress={speak} />
    </View>
  );
}

export default TextToSpeech;
