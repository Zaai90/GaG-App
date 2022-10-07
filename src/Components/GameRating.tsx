import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { useGameContext } from "../Context/GameContext";

interface Props {
  id: string;
  score: number;
}

export default function GameRating({ id, score }: Props) {
  const { setScore } = useGameContext();
  // const [gameScore, setGameScore] = useState();

  function renderHollowStars() {
    for (let index = 0; index < 5 - score; index++) {
      const hollowStar = (
        <MaterialCommunityIcons
          name='star-outline'
          size={24}
          color='purple'
          onPress={() => setScore(id, score++)}
        />
      );
      return hollowStar;
    }
  }

  // return (result*{score});

  function renderStars() {
    for (let index = 0; index < score; index++) {
      return (
        <MaterialCommunityIcons
          name='star'
          size={24}
          color='purple'
          onPress={() => setScore(id, score++)}
        />
      );
    }
  }

  return (
    <View>
      <Text style={{ fontSize: 15 }}>
        {renderStars()}
        {renderHollowStars()}
      </Text>
    </View>
  );
}

/* <MaterialCommunityIcons
  name='star'
  size={24}
  color='purple'
  onPress={() => setScore(id, (score = 1))}
/>

<MaterialCommunityIcons
  name='star-outline'
  size={24}
  color='purple'
  onPress={() => setScore(id, (score = 2))}
/> */

// for (let index = 0; index < score; index++) {
//   <MaterialCommunityIcons
//     name='star'
//     size={24}
//     color='purple'
//     onPress={() => setScore(id, (score = index))}
//   />;
// }
