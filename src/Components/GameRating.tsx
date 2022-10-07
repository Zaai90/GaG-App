import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

interface Props {
  id: string;
  score: number;
}

export default function GameRating({ id, score }: Props) {
  const [stars, setStars] = React.useState<JSX.Element[]>([]);

  useEffect(() => {
    addStars();
  }, [id, score]);

  const addStars = () => {
    const stars: JSX.Element[] = [];

    for (let index = 0; index < score; index++) {
      stars.push(
        <MaterialCommunityIcons key={"filled-" + index} name='star' size={24} color='purple' />,
      );
    }

    for (let index = 0; index < 5 - score; index++) {
      stars.push(
        <MaterialCommunityIcons
          key={"outline-" + index}
          name='star-outline'
          size={24}
          color='purple'
        />,
      );
    }
    setStars(stars);
  };

  return (
    <View>
      <Text style={{ fontSize: 15 }}>{stars}</Text>
    </View>
  );
}
