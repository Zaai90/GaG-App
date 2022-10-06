import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput } from "react-native";
import { useGameContext } from "../Context/GameContext";
import { Game } from "../Data/game";
import { RootStackParamList } from "../navigation/types";

type Props = {
  navigation: NativeStackScreenProps<RootStackParamList, "Edit">;
  id: string;
};

const Edit = ({ navigation, id }: Props) => {
  const { getGameById, editGame } = useGameContext();
  const [gameToEdit, setGame] = useState<Game>(getGameById(id));

  const handleChange = (key: string, value: string | number) => {
    setGame((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <ScrollView>
      <Text>Title</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text: string) => handleChange("title", text)}
        value={gameToEdit.title}
      />
      <Text>Genre</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text: string) => handleChange("genre", text)}
        value={gameToEdit.genre}
      />
      <Text>Score</Text>
      <TextInput
        style={styles.input}
        onChangeText={(num: string) => handleChange("score", Number(num))}
        value={gameToEdit.score.toString()}
        keyboardType='numeric'
        placeholder='0'
      />
      <Text>Developer</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text: string) => handleChange("developer", text)}
        value={gameToEdit.developer}
      />
      <Text>Image url</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text: string) => handleChange("imageUrl", text)}
        value={gameToEdit.imgUrl}
      />

      <Button
        title='Save changes'
        onPress={() => {
          editGame(gameToEdit);
          navigation.navigation.navigate("GameList");
        }}
      />
      <Button
        title='Cancel'
        onPress={() => {
          navigation.navigation.navigate("GameList");
        }}
      />
    </ScrollView>
  );
};

export default Edit;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
