import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Pressable, Text, View } from "react-native";
import GameCard from "../Components1/GameCard";
import GotoButton from "../Components1/GotoButton";
import mockData from "../Data/MockData";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "GameList">;

const GameList = (navigator: Props) => (
  <View>
    <Text>Game list screen </Text>

    {mockData.map((game) => (
      <GameCard key={game.id} game={game} />
    ))}

    <GotoButton title='Add game' to='Add' navigator={navigator} />
    <Pressable>
      <Text>Edit</Text>
    </Pressable>
  </View>
);

export default GameList;
