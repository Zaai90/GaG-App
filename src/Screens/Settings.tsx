import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, StyleSheet, Switch, Text, View } from "react-native";
import { VibrationSuccess } from "../Components/Buttons/Haptics";
import SlidingStartExample from "../Components/Slider";
import { useSettings } from "../Context/SettingContext";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Settings">;

const Settings = ({ navigation }: Props) => {
  const {
    isSoundOn,
    isNotificationsOn,
    isVibrationOn,
    toggleSound,
    toggleVibration,
    toggleNotifications,
  } = useSettings();

  return (
    <View>
      <Text>Settings Screen Options</Text>
      {/* SOUND SWITCH */}
      <View style={settingsStyle.settingsContainer}>
        <Text style={settingsStyle.text}>Sound</Text>
        <Switch
          style={settingsStyle.switch}
          value={isSoundOn}
          onChange={() => {
            toggleSound();
            isSoundOn === false ? isVibrationOn === true ? VibrationSuccess() : null : null;
          }}
        />
      </View>
      {/* NOTIFICATION SWITCH */}
      <View style={settingsStyle.settingsContainer}>
        <Text style={settingsStyle.text}>Notifications</Text>
        <Switch
          style={settingsStyle.switch}
          value={isNotificationsOn}
          onChange={() => {
            toggleNotifications();
            isNotificationsOn === false ? isVibrationOn === true ? VibrationSuccess() : null : null;
          }}
        />
      </View>
      {/* VIBRATION SWITCH */}
      <View style={settingsStyle.settingsContainer}>
        <Text style={settingsStyle.text}>Vibration</Text>
        <Switch
          style={settingsStyle.switch}
          value={isVibrationOn}
          onChange={() => {
            toggleVibration();
            isVibrationOn === false ? VibrationSuccess() : null;
          }}
        />
      </View>

      <View style={settingsStyle.settingsContainer}>
        <Text style={settingsStyle.text}>Brightness</Text>
        <SlidingStartExample />
      </View>

      <Button
        title='Delete Account'
        onPress={() => {
          navigation.navigate("Home");
          alert("Account deleted");
        }}
      />
    </View>
  );
};

export default Settings;

const settingsStyle = StyleSheet.create({
  switch: {
    alignSelf: "flex-end",
    flexGrow: 1,
    flexBasis: 150,
    marginHorizontal: 55,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    borderRadius: 10,
    elevation: 3,
    width: 150,
    height: 50,
    Color: "blue",
  },
  text: {
    flexDirection: "column",
    fontSize: 16,
    paddingTop: 5,
    lineHeight: 15,
    marginTop: 5,
    paddingLeft: 10,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  settingsContainer: {
    minHeight: 55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F2F2",
  },
  deletionButton: {
    marginVertical: 5,
  },
});
