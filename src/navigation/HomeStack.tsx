import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/Home";
import PlayThisScreen from "../Screens/PlayThis";
import PlayThisFavScreen from "../Screens/PlayThisFavorite";
import { RootStackParamList } from "./types";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="PlayThisFavScreen"
        component={PlayThisFavScreen}
        options={{
          title: "Play this Fav game",
        }}
      />
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen
        name="PlayThisScreen"
        component={PlayThisScreen}
        options={{
          title: "Play this game",
        }}
      />
    </RootStack.Navigator>
  );
};

export default HomeStackNavigator;
