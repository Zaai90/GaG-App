import {RouteProp} from '@react-navigation/native';
export type RootStackParamList = {
    Home: undefined;
    Settings: undefined;
    SelectScreen: undefined;
    AddScreen: undefined;
    EditScreen: {id: string;}
    FavoriteScreen: undefined;
    GameListScreen: undefined;
}

export type SelectScreenRootProps = RouteProp<RootStackParamList, 'SelectScreen'>;
