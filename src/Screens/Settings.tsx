import Slider from "@react-native-community/slider";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, Switch, Text, View, StyleSheet, StyleProp, Pressable } from "react-native";
import { RootStackParamList } from "../navigation/types";
import { VibrationSuccess } from "../Components/Haptics";

type Props = NativeStackScreenProps<RootStackParamList, "Settings">;

const Settings = ({ navigation }: Props) => {
  const [isSoundOn, setisSoundOn] = React.useState<boolean>(true);
  const [isVibrationOn, setisVibrationOn] = React.useState(true);
  const [isNotificationsOn, setisNotificationsOn] = React.useState(true);
  return (
    <View>
      <Button
        title='Home'
        onPress={() => {
          navigation.navigate("Home");
        }}
      />

      <Text>Settings Screen Options</Text>

      <View style={settingsStyle.settingsContainer}>
        <Text style={settingsStyle.text}>Sound</Text>
        <Switch
          style={settingsStyle.switch}
          value={isSoundOn}
          onChange={() => {
            setisSoundOn((prev) => {
              prev == false ? VibrationSuccess() : null;
              return !prev;
            });
          }}
        />
      </View>

      <View style={settingsStyle.settingsContainer}>
        <Text style={settingsStyle.text}>Notifications</Text>
        <Switch
          style={settingsStyle.switch}
          value={isNotificationsOn}
          onChange={() => {
            setisNotificationsOn((prev) => {
              prev == false ? VibrationSuccess() : null;
              return !prev;
            });
          }}
        />
      </View>

      <View style={settingsStyle.settingsContainer}>
        <Text style={settingsStyle.text}>Vibration</Text>
        <Switch
          style={settingsStyle.switch}
          value={isVibrationOn}
          onChange={() => {
            setisVibrationOn((prev) => {
              prev == false ? VibrationSuccess() : null;
              return !prev;
            });
          }}
        />
      </View>

      <Text>
        Brightness
        <Slider
          style={{ width: 350, height: 40 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor='#0FE2FF'
          maximumTrackTintColor='#3837BA'
        />
      </Text>
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
