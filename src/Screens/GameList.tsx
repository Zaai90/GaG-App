import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Pressable, Text, View } from "react-native";
import GameCard from "../Components/GameCard";
import GotoButton from "../Components/GotoButton";
import mockData from "../Data/mockData";
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
