import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavGameListScreen from "../Screens/FavGameList";
import HomeScreen from "../Screens/Home";
import PlayThisScreen from "../Screens/PlayThis";
import PlayThisFavScreen from "../Screens/PlayThisFavorite";
import Settings from "../Screens/Settings";
import { RootStackParamList } from "./types";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Settings" component={Settings} />
      <RootStack.Screen
        name="PlayThisFavScreen"
        component={PlayThisFavScreen}
        options={{
          title: "Play this Fav game",
        }}
      />
      <RootStack.Screen
        name="PlayThisScreen"
        component={PlayThisScreen}
        options={{
          title: "Play this game",
        }}
      />
      <RootStack.Screen
        name="FavGameListScreen"
        component={FavGameListScreen}
        options={{
          title: "Display all Fav games",
        }}
      />
    </RootStack.Navigator>
  );
};

export default HomeStackNavigator;
