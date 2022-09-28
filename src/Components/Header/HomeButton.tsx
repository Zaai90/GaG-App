import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Pressable } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 

const HomeButton = () => {
    const navigation = useNavigation();
    const route = useRoute();
  if (route.name != "home"){
    return (<Pressable onPress={
        () => navigation.navigate("Home")}>
      <FontAwesome name="home" size={24} color="black" />
      </Pressable>)
      }
      else return null;
  }

  export default HomeButton;