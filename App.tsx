import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import GameContextProvider from "./src/Context/GameContext";
import RootNavigator from "./src/navigation/Index";

export default function App() {
  return (
    <GameContextProvider>
      <SafeAreaProvider>
        <RootNavigator />
        <StatusBar style='auto' />
      </SafeAreaProvider>
    </GameContextProvider>
  );
}
