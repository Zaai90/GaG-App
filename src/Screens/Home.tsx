import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ navigation }: Props) => {
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
          navigation.navigate("PlayThisScreen");
        }}
      />
      <Button
        title='Gag me this Fav😊'
        onPress={() => {
          navigation.navigate("PlayThisFavScreen");
        }}
      />
      <Button
        title='List of your games'
        onPress={() => {
          navigation.navigate("GameListScreen");
        }}
      />
      <Button
        title='List of your favorite games'
        onPress={() => {
          navigation.navigate("FavGameListScreen");
        }}
      />
    </View>
  );
};

export default HomeScreen;
