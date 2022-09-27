export type Game = {
  id: string;
  title: string;
  genre: string;
  score: number;
  developer: string;
  isFavourite: boolean;
};

export type GameCreate = Omit<Game, "id">;
