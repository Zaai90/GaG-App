import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useGameContext } from "../Context/GameContext";
import { Game } from "../Data/game";
import { FadeInView } from "./AnimView";
import SoundButton from "./Buttons/SoundButton";
import GAGCard from "./GAGCard";
import TextToSpeech from "./Speech";
import Notification, { schedulePushNotification } from "./Notification";

interface Props {
  title: string;
}

function updateNotification({title}: Props) {
  (async () => await schedulePushNotification({ title}))();
}
let firstRender = 0;

const GetAFav = () => {
  const { getFavGames } = useGameContext();

  const [rerender, setRerender] = useState<boolean>(false);
  const [game, setGame] = React.useState<Game>();

  useEffect(() => {
    if (!rerender) {
      const FavGames = getFavGames();
      if (firstRender <= 0) {
        const FavGameNumber = Math.floor(Math.random() * FavGames.length);
        
        firstRender++;
        setGame(FavGames[FavGameNumber]);
      }
      if (game) {
        const title = game.title;
        updateNotification({ title});
      }
    }
    setRerender(false);
  }, [rerender, game]);
  return (
    <FadeInView key={game?.id} style={styles.cardContainer}>
      <Notification />
      {game ? <GAGCard game={game} /> : null}
      <View style={{ alignItems: "center" }}>
        {game ? <TextToSpeech gameId={game.id} /> : null}
        <SoundButton
          title='GaG Again😒'
          onPress={() => {
            const FavGames = getFavGames();
            const FavGameNumber = Math.floor(Math.random() * FavGames.length);
            setGame(FavGames[FavGameNumber]);
            setRerender(true);
          }}
        />
      </View>
    </FadeInView>
  );
};

export default GetAFav;

const styles = StyleSheet.create({
  cardContainer: {
    margintop: 5,
    marginBottom: 5,
    backgroundColor: "EBD4C2",
  },
});


// const GetAFav = () => {
  // const { getFavGames } = useGameContext();

{/* <SoundButton title='GaG another Fav 😍' onPress={() => setRerender(true)} /> */}