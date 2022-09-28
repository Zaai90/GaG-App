import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Pressable, Text } from "react-native";
import { Octicons, Ionicons } from '@expo/vector-icons'; 

const HomeButton = () => {
    const navigation = useNavigation();
    const route = useRoute();
  if (route.name !== "Home"){
    return (
      <>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Ionicons name="md-home" size={21} color="black" />
      </Pressable>
      </>
      );
    } else return null;
  };

  export default HomeButton;