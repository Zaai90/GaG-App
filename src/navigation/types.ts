export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  PlayThis: undefined;
  Add: undefined;
  Edit: { id: string };
  PlayThisFav: undefined;
  GameList: undefined;
};

export type OmitGotoParamList = Omit<RootStackParamList, "Edit" | "Settings">;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
