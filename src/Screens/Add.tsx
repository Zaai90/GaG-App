import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import GotoButton from "../components/GotoButton";
import { RootStackParamList } from "../navigation/types1";

type Props = NativeStackScreenProps<RootStackParamList, "Add">;

const Add = (navigator: Props) => {
  const [text, onChangeText] = React.useState("Title");
  const [text2, onChangeText2] = React.useState("Genre");
  const [text3, onChangeText3] = React.useState("Score");
  const [text4, onChangeText4] = React.useState("Developer");
  // const [isFav, onChangeFav] = React.useState("NONE");

  return (
    <View>
      <Text>Add game</Text>
      <Text>Title</Text>
      <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
      <Text>Genre</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText2}
        value={text2}
        placeholder='Genre'
      />
      <Text>Score</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText3}
        value={text3}
        placeholder='Score'
        keyboardType='numeric'
      />
      <Text>Delevoper</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText4}
        value={text4}
        placeholder='Developer'
      />

      <GotoButton title='Add game' to='GameList' navigator={navigator} />
      <GotoButton title='Cancel' to='GameList' navigator={navigator} />
      <GotoButton title='Home' to='Home' navigator={navigator} />
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
