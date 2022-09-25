import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/Home";
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
    </RootStack.Navigator>
  );
};

export default HomeStackNavigator;
