import { Audio } from "expo-av";
import React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import DeathSoundEffect from "../../../assets/DeathSoundEffect.wav";
import { useSettings } from "../../Context/SettingContext";
import BasicButton from "./BasicButton";

interface Props {
  onPress: () => void;
  title: string;
  style?: ButtonStyle;
}

type ButtonStyle = {
  button?: StyleProp<ViewStyle>;
  text?: StyleProp<TextStyle>;
};

const SoundButton = ({ title, onPress, style }: Props) => {
  const [sound, setSound] = React.useState<Audio.Sound | null>(null);
  const { isSoundOn } = useSettings();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(DeathSoundEffect);
    console.log("Loading Sound");
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    sound ? () => {
      console.log("SoundButton: Unloading Sound");
      sound.unloadAsync();
    } : undefined;
  }, [sound]);

  return (
    <BasicButton
      style={style}
      title={title}
      onPress={() => {
        isSoundOn && playSound();
        onPress();
        sound?.stopAsync();
      }}
    />
  );
};
export default SoundButton;
