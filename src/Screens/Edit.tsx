import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Edit">;

const Edit = ({ navigation, route }: Props) => {
  const [text, onChangeText] = React.useState("Title");
  const [text2, onChangeText2] = React.useState("Genre");
  const [text3, onChangeText3] = React.useState("Score");
  const [text4, onChangeText4] = React.useState("Developer");
  return (
    <View>
      <Text>Edit Screen</Text>
      <Text>{route.params.id}</Text>
      <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
      <TextInput style={styles.input} onChangeText={onChangeText2} value={text2} />
      <TextInput style={styles.input} onChangeText={onChangeText3} value={text3} />
      <TextInput style={styles.input} onChangeText={onChangeText4} value={text4} />
      <Button
        title='Save changes'
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

export default Edit;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
