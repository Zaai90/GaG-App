import { Octicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Pressable } from "react-native";
import { useSettings } from "../../Context/SettingContext";

const SettingsButton = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { isSoundOn } = useSettings();
  if (route.name !== "Settings") {
    return (
      <>
        <Pressable
          android_disableSound={!isSoundOn}
          onPress={() => navigation.navigate("Settings")}
        >
          <Octicons name='gear' size={21} color='black' />
        </Pressable>
      </>
    );
  } else return null;
};

export default SettingsButton;
