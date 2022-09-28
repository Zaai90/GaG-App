import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Pressable, Text, View, StyleSheet, ScrollView } from "react-native";
import GameCard from "../Components/GameCard";
import GotoButton from "../Components/GotoButton";
import mockData from "../Data/mockData";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "GameList">;

const GameList = (navigator: Props) => (
  <View>
  <ScrollView contentContainerStyle={styles.container}>
    {/* <View style={styles.container}> */}

    {mockData.map((game) => (
      <View key={game.id} style={styles.cardContainer}>
        <GameCard game={game} />
      </View>
      ))}
  </ScrollView>
  <View style={styles.ButtonBar}>
    <View style={styles.AddButton}>
    <GotoButton title='Add game' to='Add' navigator={navigator} />
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
    paddingBottom: 70,
  },
  cardContainer: {
    marginBottom: 5,
  },
  ButtonBar: {
    flex: 1,
    position: "absolute",
    alignItems: "center",
    backgroundColor: "#876796",
    width: "100%",
    bottom: 0,
    paddingVertical:10,
  },
  AddButton: {
    backgroundColor: "#876796",
    borderRadius: 10,
  },
});