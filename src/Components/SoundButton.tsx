import { Audio } from "expo-av";
import React from "react";
import { Pressable, Text } from "react-native";
import DeathSoundEffect from "../../assets/DeathSoundEffect.wav";

interface Props {
  onPress: () => void;
  title: string;
}

const SoundButton = ({ title, onPress }: Props) => {
  const [sound, setSound] = React.useState<Audio.Sound | null>(null);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(DeathSoundEffect);
    console.log("Loading Sound");
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
        console.log("Unloading Sound");
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  return <Pressable onPress={() => {
    playSound();
    onPress();
    sound?.stopAsync();

  }}><Text>{title}</Text></Pressable >
};

export default SoundButton;
