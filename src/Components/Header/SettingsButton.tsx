import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Pressable } from "react-native";
import { Octicons } from "@expo/vector-icons";

const SettingsButton = () => {
  const navigation = useNavigation();
  const route = useRoute();
  if (route.name !== "Settings") {
    return (
      <>
        <Pressable onPress={() => navigation.navigate("Settings")}>
          <Octicons name='gear' size={24} color='black' />
        </Pressable>
      </>
    );
  }else return null;
};

export default SettingsButton;
