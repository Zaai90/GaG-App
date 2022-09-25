import { RouteProp } from "@react-navigation/native";
export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  SelectScreen: undefined;
  AddScreen: undefined;
  EditScreen: { id: string };
  PlayThisFavScreen: undefined;
  GameListScreen: undefined;
};

export type SelectScreenRootProps = RouteProp<RootStackParamList, "SelectScreen">;
