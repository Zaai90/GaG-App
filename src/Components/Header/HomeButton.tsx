import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Pressable, Text } from "react-native";
import { Octicons, Ionicons } from "@expo/vector-icons";
import { useSettings } from "../../Context/SettingContext";

const HomeButton = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { isSoundOn } = useSettings();
  if (route.name !== "Home") {
    return (
      <>
        <Pressable android_disableSound={!isSoundOn} onPress={() => navigation.navigate("Home")}>
          <Ionicons name='md-home' size={21} color='black' />
        </Pressable>
      </>
    );
  } else return null;
};

export default HomeButton;
