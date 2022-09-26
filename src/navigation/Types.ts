import { RouteProp } from "@react-navigation/native";
export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  PlayThisScreen: undefined;
  SelectScreen: undefined;
  AddScreen: undefined;
  EditScreen: { id: string };
  PlayThisFavScreen: undefined;
  GameListScreen: undefined;
  FavGameListScreen: undefined;
};

export type SelectScreenRootProps = RouteProp<RootStackParamList, "SelectScreen">;
