import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import TextToSpeech from "../Components/Speech";
import { useGameContext } from "../Context/GameContext";
import { useSettings } from "../Context/SettingContext";
import { Game } from "../Data/game";
import { FadeInView } from "./AnimView";
import SoundButton from "./Buttons/SoundButton";
import GAGCard from "./GAGCard";
import Notification, { schedulePushNotification } from "./Notification";

interface Props {
  title: string;
}

interface GetAGameProps {
  isFav?: boolean;
}

function updateNotification({title}: Props) {
  (async () => await schedulePushNotification({ title}))();
}

const GetAGame = ({isFav}:GetAGameProps) => {
  const { isNotificationsOn } = useSettings();
  const { games, getGameById, getFavGames } = useGameContext();

  const [rerender, setRerender] = useState<boolean>(false);
  const [game, setGame] = React.useState<Game>();
  const [currentGame, setCurrentGame] = React.useState<Game>();

 useEffect(() => {
  if(currentGame !== game){
    if (currentGame) {
      const title = currentGame.title;
      if(isNotificationsOn) {
      updateNotification({ title});
      }
    }
    setGame(currentGame);
  }
},[currentGame]);

  useEffect(() => {
    if (rerender === true || !game) {
      let newGame;
      while(!newGame || newGame === game) {
        if(isFav) {
          const FavGames = getFavGames();
          const FavGameNumber = Math.floor(Math.random() * FavGames.length);
          newGame = (FavGames[FavGameNumber]);
        }
        else {
          const gameId: string = Math.floor(Math.random() * games.length + 1).toLocaleString();
          newGame = getGameById(gameId);
        }
      }
      setCurrentGame(newGame)
    }

    setRerender(false);
  } , [rerender]);

  return (
    <FadeInView key={game?.id} style={styles.cardContainer}>
      {isNotificationsOn === true ? <Notification /> : <></>}
      {game ? <GAGCard game={game} /> : null}
      <View style={{ alignItems: "center" }}>
        {game ? <TextToSpeech gameId={game.id} /> : null}
        <SoundButton
          title='GaG Again😒'
          onPress={() => {
            setRerender(true);
          }}
        />
      </View>
    </FadeInView>
  );
};

export default GetAGame;

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#EBD4C2",
  },
});
