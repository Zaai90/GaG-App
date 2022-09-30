import * as Speech from "expo-speech";
import React from "react";
import { Button, View } from "react-native";
import { useGameContext } from "../Context/GameContext";

function TextToSpeech(gameId: string) {
  const { getGameById, games } = useGameContext();
  const game = getGameById(gameId);

  const speak = () => {
    const genreToSay = game.genre;
    const titleToSay = game.title;
    const developerToSay = game.developer;
    const scoreToSay = game.score;
    const gameToSay = titleToSay + genreToSay + developerToSay + scoreToSay;
    Speech.speak(gameToSay);
  };

  return (
    <View>
      <Button title='Text to speech' onPress={speak} />
    </View>
  );
}

export default TextToSpeech;
