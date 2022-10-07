import React, { createContext, ReactNode, useContext, useState } from "react";
import uuid from "react-native-uuid";
import { Game, GameCreate } from "../Data/game";
import { mockData } from "../Data/mockData";

interface GameProviderProps {
  children: ReactNode;
}

interface IGameContext {
  addGame: (game: GameCreate) => void;
  games: Game[];
  getFavGames: () => Game[];
  getGameById: (id: string) => Game;
  deleteGame: (id: string) => void;
  toggleFav: (id: string) => void;
  setScore: (id: string, score: number) => void;
}

const GameContext = createContext({} as IGameContext);

export const useGameContext = (): IGameContext => useContext(GameContext);

function GameContextProvider({ children }: GameProviderProps) {
  const [games, setGames] = useState<Game[]>(mockData);

  function addGame(game: GameCreate) {
    const newGame = {
      id: uuid.v4().toString(),
      ...game,
      isFav: false,
    };
    setGames([...games, newGame]);
  }

  function getGameById(id: string): Game {
    const game = games.find((i) => i.id === id);
    if (game === undefined) {
      return {} as Game;
    }
    return game;
  }

  function deleteGame(id: string) {
    setGames((currItems) => currItems.filter((item) => item.id !== id));
  }

  function toggleFav(id: string) {
    const gamesCopy = [...games];
    const game = gamesCopy.find((i) => i.id === id);
    if (game === undefined) {
      return;
    }
    game.isFavourite = !game.isFavourite;
    setGames(gamesCopy);
  }

  function getFavGames(): Game[] {
    return games.filter((game) => game.isFavourite === true);
  }

  function setScore(id: string, score: number) {
    const gamesCopy = [...games];
    const game = gamesCopy.find((i) => i.id === id);
    if (game === undefined) {
      return;
    }
    game.score = score;
    setGames(gamesCopy);
  }

  return (
    <GameContext.Provider
      value={{
        games,
        getFavGames,
        addGame,
        getGameById,
        toggleFav,
        deleteGame,
        setScore,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameContextProvider;
