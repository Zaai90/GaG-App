import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";
import GameCard from "../components/GameCard";
import mockData from "../Data/MockData";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "GameList">;

const GameList = ({ navigation, route }: Props) => {
  // const { getAllGames } = useGameContext();

  return (
    <View>
      <Text>Game list screen </Text>

      {mockData.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}

      <Button
        title='Add game'
        onPress={() => {
          navigation.navigate("Add");
        }}
      />
      <Button
        title='Settings'
        onPress={() => {
          navigation.navigate("Settings");
        }}
      />
      <Button
        title='Home'
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <Button
        title='Edit'
        onPress={() => {
          navigation.navigate("Edit", { id: "1", path: "/" + route.name });
        }}
      />
    </View>
  );
};

export default GameList;
