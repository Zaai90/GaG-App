import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/types";
import Slider from '@react-native-community/slider';

type Props = NativeStackScreenProps<RootStackParamList, "Settings">;

const Settings = ({ navigation }: Props) => {
  const [isSoundOn, setisSoundOn] = React.useState(true);
  const [isVibrationOn, setisVibrationOn] = React.useState(true);
  const [isNotificationsOn, setisNotificationsOn] = React.useState(true);
  return (
    <View>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />

      <View>
        <Text>Settings Screen Options</Text>
        <Button title="Sound" onPress={() => {
          setisSoundOn(prev => !prev);
         isSoundOn ? alert("Ljud är på") : alert("Ljud är av")}}  />
        <Button title="Vibration" onPress={() => {
          setisVibrationOn(prev => !prev);
          isVibrationOn ? alert("Vibration är på") : alert("Vibration är av") 
          }} />
        <Button title="Notifications" onPress={() => {
          setisNotificationsOn(prev => !prev);
          isNotificationsOn ? alert("Notifikationer är på") : alert("Notifikationer är av")
        }} />
        <Text>
          Brightness
        <Slider
  style={{width: 350, height: 40}}
  minimumValue={0}
  maximumValue={1}
  minimumTrackTintColor="#FFFFFF"
  maximumTrackTintColor="#000000"
/>
  </Text>
        <Button title="Delete Account" onPress={() => {}} />
        </View>
    </View>

  );
};

export default Settings;
