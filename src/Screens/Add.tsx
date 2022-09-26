import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View, TextInput, StyleSheet } from "react-native";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Add">;




const Add = ({ navigation }: Props) => {
  const [text, onChangeText] = React.useState("Title");
  const [text2, onChangeText2] = React.useState("Genre");
  const [text3, onChangeText3] = React.useState("Score");
  const [text4, onChangeText4] = React.useState("Developer");
  // const [isFav, onChangeFav] = React.useState("NONE");
  return (
    <View>
      <Text>Add game</Text>
      <Text>Title</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Text>Genre</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText2}
        value={text2}
        placeholder="Genre"
      />
      <Text>Score</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText3}
        value={text3}
        placeholder="Score"
        keyboardType="numeric"
      />
      <Text>Delevoper</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText4}
        value={text4}
        placeholder="Developer"
      />

      <Button
        title='Add game'
        onPress={() => {
          navigation.navigate("GameList");
        }}
      />
      <Button
        title='Cancel'
        onPress={() => {
          navigation.navigate("GameList");
        }}
      />
      <Button
        title='Home'
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
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
