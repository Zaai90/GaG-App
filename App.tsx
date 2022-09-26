import { StatusBar } from "expo-status-bar";
import React from "react";
import RootNavigator from "./src/navigation/Index";

export default function App() {
  return (
    <>
      <RootNavigator />
      <StatusBar style='auto' />
    </>
  );
}
