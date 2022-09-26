import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddScreen from "../Screens/Add";
import EditScreen from "../Screens/Edit";
import FavGameListScreen from "../Screens/FavGameList";
import GameListScreen from "../Screens/GameList";
import HomeScreen from "../Screens/Home";
import PlayThisScreen from "../Screens/PlayThis";
import PlayThisFavScreen from "../Screens/PlayThisFav";
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
        name="GameListScreen"
        component={GameListScreen}
        options={{
          title: "List of all your games",
        }}
      />
      <RootStack.Screen
        name="FavGameListScreen"
        component={FavGameListScreen}
        options={{
          title: "Display all Fav games",
        }}
      />
      <RootStack.Screen
        name="AddScreen"
        component={AddScreen}
        options={{
          title: "Add game",
        }}
      />
      <RootStack.Screen
        name="EditScreen"
        component={EditScreen}
        options={({ route }) => ({ title: "EditScreen" + route.params.id })}
      />
    </RootStack.Navigator>
  );
};

export default HomeStackNavigator;
