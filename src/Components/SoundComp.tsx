import { Audio } from "expo-av";
import React from "react";
import DeathSoundEffect from "../../assets/DeathSoundEffect.wav";

export default function SoundComp() {
  const [sound, setSound] = React.useState<Audio.Sound | null>(null);
  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(DeathSoundEffect);
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

  return playSound;
}
