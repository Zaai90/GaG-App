import React, { createContext, ReactNode, useContext, useState } from "react";
import { Game } from "../Data/game1";
import { mockData } from "../Data/mockData1";

interface GameProviderProps {
  children: ReactNode;
}

interface IGameContext {
  // addGame: (game: GameCreate) => void;
  getAllGames: () => Game[];
  // getGameById: (id: string) => Game;
  // deleteGame: (id: string) => void;
}

const GameContext = createContext({} as IGameContext);

export const useGameContext = (): IGameContext => useContext(GameContext);

function GameContextProvider({ children }: GameProviderProps) {
  const [games, setGames] = useState<Game[]>(mockData);

  const getAllGames = () => {
    return games;
  };

  // function addGame(game: GameCreate) {
  //   const newGame = {
  //     id: uuidv4(),
  //     ...game,
  //   };
  //   setGames([...games, newGame]);
  // }

  // function getGameById(id: string): Game {
  //   const game = games.find((i) => i.id === id);
  //   if (game === undefined) {
  //     return {} as Game;
  //   }
  //   return game;
  // }

  // function deleteGame(id: string) {
  //   setGames((currItems) => currItems.filter((item) => item.id !== id));
  // }

  return (
    <GameContext.Provider
      value={{
        getAllGames,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameContextProvider;
