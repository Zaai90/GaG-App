export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  PlayThis: undefined;
  Add: undefined;
  Edit: { id: string; path?: string };
  PlayThisFav: undefined;
  GameList: undefined;
  FavGameList: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}