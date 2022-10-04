import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import HomeButton from "../Components/Header/HomeButton";
import SettingsButton from "../Components/Header/SettingsButton";
import TitlePlacer from "../Components/Header/TitlePlacer";
import Add from "../Screens/Add";
import Edit from "../Screens/Edit";
import GameList from "../Screens/GameList";
import Home from "../Screens/Home";
import PlayThis from "../Screens/PlayThis";
import PlayThisFav from "../Screens/PlayThisFav";
import Settings from "../Screens/Settings";
import { RootStackParamList } from "./types";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => {
  return (
    <RootStack.Navigator  screenOptions={{ 
      headerBackground: () => <View style={{ backgroundColor: '#876796', flex: 1, paddingLeft: 8 }} >
      </View>,
      headerRight: () => <HomeButton />,
      headerLeft: () => <SettingsButton />,
      headerTitle: () => <TitlePlacer />,      
    }}>
      <RootStack.Screen name='Home' component={Home} />
      <RootStack.Screen name='Settings' component={Settings} />
      <RootStack.Screen
        name='PlayThisFav'
        component={PlayThisFav}
        options={{
          title: "Play this Fav game",
        }}
      />
      <RootStack.Screen
        name='PlayThis'
        component={PlayThis}
        options={{
          title: "Play this game",
        }}
      />
      <RootStack.Screen
        name='GameList'
        component={GameList}
        options={{
          title: "List of all your games",
        }}
      />
      <RootStack.Screen
        name='Add'
        component={Add}
        options={{
          title: "Add game",
        }}
      />
      <RootStack.Screen
        name='Edit'
        component={Edit}
        options={({ route }) => ({ title: "Edit" + route.params.id })}
      />
    </RootStack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({
  SettingsButton: {
    Image: "",
    width: 50,
    height: 50,
  },
});