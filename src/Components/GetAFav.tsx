// import React, { useEffect, useState } from "react";
// import { Button, StyleSheet, View } from "react-native";
// import { useGameContext } from "../Context/GameContext";
// import { Game } from "../Data/game";
// import GAGCard from "./GAGCard";

// const GAGFav = () => {
//   const { games } = useGameContext();
//   const { getGameById } = useGameContext();

//   const [rerender, setRerender] = useState<boolean>(true);
//   const [game, setGame] = React.useState<Game>();

//   useEffect(() => {
//     if (rerender) {
//       const getFavGames = useGameContext();
//       const gameId = Math.floor(Math.random() * games.length + 1).toLocaleString();
//       setGame(getGameById(gameId));
//       setRerender(false);
//     }
//   }, [rerender, game]);

//   return (
//     <View key={game?.id} style={styles.cardContainer}>
//       {game ? <GAGCard game={game} /> : null}
//       <Button title='GaG another Fav' onPress={() => setRerender(true)} />
//     </View>
//   );
// };

// export default GAGFav;

// const styles = StyleSheet.create({
//   cardContainer: {
//     marginBottom: 5,
//   },
// });
