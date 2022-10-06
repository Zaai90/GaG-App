import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput } from "react-native";
import BasicButton from "../Components/Buttons/BasicButton";
import GotoButton from "../Components/Buttons/GotoButton";
import { useGameContext } from "../Context/GameContext";
import { GameCreate } from "../Data/game";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Add">;

const Add = (navigator: Props) => {
  const { addGame } = useGameContext();
  const [game, setGame] = useState<GameCreate>({
    title: "",
    genre: "",
    score: 0,
    developer: "",
    imgUrl: "/assets/images/icon.png",
    isFavourite: false,
  });

  const handleChange = (key: string, value: string | number) => {
    setGame((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <ScrollView>
      <Text>Title</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text: string) => handleChange("title", text)}
        value={game.title}
      />
      <Text>Genre</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text: string) => handleChange("genre", text)}
        value={game.genre}
        placeholder='Genre'
      />
      <Text>Score</Text>
      <TextInput
        style={styles.input}
        onChangeText={(num: string) => handleChange("score", Number(num))}
        value={game.score.toString()}
        keyboardType='numeric'
        placeholder='0'
      />
      <Text>Developer</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text: string) => handleChange("developer", text)}
        value={game.developer}
        placeholder='Developer'
      />
      <Text>Image URL</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text: string) => handleChange("imgUrl", text)}
        value={game.imgUrl}
        placeholder='Put an imageurl here'
      />

      <BasicButton
        title='Add game'
        onPress={() => {
          navigator.navigation.goBack();
          addGame(game);
        }}
      />
      <GotoButton title='Cancel' to='GameList' navigator={navigator} />
    </ScrollView>
  );
};

export default Add;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
