import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title='Settings'
        onPress={() => {
          navigation.navigate("Settings");
        }}
      />
      <Button
        title='GaG me!😘'
        onPress={() => {
          navigation.navigate("PlayThis");
        }}
      />
      <Button
        title='Gag me this Fav😊'
        onPress={() => {
          navigation.navigate("PlayThisFav");
        }}
      />
      <Button
        title='List of your games'
        onPress={() => {
          navigation.navigate("GameList");
        }}
      />
      <Button
        title='List of your favorite games'
        onPress={() => {
          navigation.navigate("FavGameList");
        }}
      />
    </View>
  );
};

export default Home;
