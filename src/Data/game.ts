export type Game = {
  id: string;
  title: string;
  genre: string;
  score: number;
  developer: string;
  isFavourite: boolean;
  imgUrl: string;
};

export type GameCreate = Omit<Game, "id">;
