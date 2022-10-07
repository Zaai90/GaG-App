import { RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput } from "react-native";
import BasicButton from "../Components/Buttons/BasicButton";
import { useGameContext } from "../Context/GameContext";
import { Game } from "../Data/game";
import { RootStackParamList } from "../navigation/types";

type EditScreenRouteProp = RouteProp<RootStackParamList, "Edit">;

type Props = NativeStackScreenProps<RootStackParamList, "Edit">;

const Edit = (navigator: Props) => {
  const route = useRoute<EditScreenRouteProp>();
  const { id } = route.params;
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
        placeholder={gameToEdit.title}
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
        value={gameToEdit.score?.toString()}
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

      <BasicButton
        title='Save changes'
        onPress={() => {
          editGame(gameToEdit);
          navigator.navigation.goBack();
        }}
      />
      <BasicButton
        title='Cancel'
        onPress={() => {
          navigator.navigation.goBack();
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
