import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { useGameContext } from "../Context/GameContext";

interface Props {
  id: string;
  score: number;
}

export default function GameRating({ id, score }: Props) {
  const { setScore } = useGameContext();
  const [gameScore, setGameScore] = useState();

  return (
    <View>
      <Text style={{ fontSize: 15 }}>
        <MaterialCommunityIcons
          name='star'
          size={24}
          color='purple'
          onPress={() => setScore(id, (score = 1))}
        />
        <MaterialCommunityIcons
          name='star'
          size={24}
          color='purple'
          onPress={() => setScore(id, (score = 2))}
        />
        <MaterialCommunityIcons
          name='star'
          size={24}
          color='purple'
          onPress={() => setScore(id, (score = 3))}
        />
        <MaterialCommunityIcons
          name='star'
          size={24}
          color='purple'
          onPress={() => setScore(id, (score = 4))}
        />
        <MaterialCommunityIcons
          name='star'
          size={24}
          color='purple'
          onPress={() => setScore(id, (score = 5))}
        />
      </Text>
    </View>
  );
}
