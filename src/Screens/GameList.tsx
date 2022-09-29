import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import GameCard from "../Components/GameCard";
import GotoButton from "../Components/GotoButton";
import mockData from "../Data/mockData";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "GameList">;

const GameList = (navigator: Props) => (
  <View>
    <ScrollView contentContainerStyle={styles.container}>
      {mockData.map((game) => (
        <View key={game.id} style={styles.cardContainer}>
          <GameCard game={game} />
        </View>
      ))}
    </ScrollView>
    <View style={styles.ButtonBar}>
      <View>
        <GotoButton
          title='Add game'
          to='Add'
          navigator={navigator}
          style={{ button: styles.AddButton, text: styles.buttonText }}
        />
      </View>
    </View>
  </View>
);

export default GameList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
    paddingHorizontal: 4,
    paddingLeft: 4,
    paddingBottom: 85,
  },
  cardContainer: {
    marginBottom: 15,
  },
  ButtonBar: {
    position: "absolute",
    alignItems: "center",
    backgroundColor: "#876796",
    width: "100%",
    bottom: 0,
    paddingVertical: 10,
  },
  AddButton: {
    borderRadius: 15,
    backgroundColor: "#EBD4C2",
    width: "80%",
  },
  buttonText: {
    color: "black",
  },
});
