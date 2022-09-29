import React, { createContext, ReactNode, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
  toggleFav: (id: string) => Game;
}

const GameContext = createContext({} as IGameContext);

export const useGameContext = (): IGameContext => useContext(GameContext);

function GameContextProvider({ children }: GameProviderProps) {
  const [games, setGames] = useState<Game[]>(mockData);

  function addGame(game: GameCreate) {
    const newGame = {
      id: uuidv4(),
      ...game,
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
    const game = games.find((i) => i.id === id);
    if (game === undefined) {
      return {} as Game;
    }
    if (game.isFavourite == false) {
      game.isFavourite = true;
      return game;
    } else {
      game.isFavourite = false;
      return game;
    }
  }

  function getFavGames(): Game[] {
    return games.filter((game) => game.isFavourite === true);
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
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameContextProvider;
