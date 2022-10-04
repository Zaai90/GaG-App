import { Audio } from "expo-av";
import React from "react";
import { Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from "react-native";
import DeathSoundEffect from "../../../assets/DeathSoundEffect.wav";

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

  return (
    <Pressable
      style={[basicStyle.button, style?.button]}
      onPress={() => {
        playSound();
        onPress();
        sound?.stopAsync();
      }}
    >
      <Text>{title}</Text>
    </Pressable>
  );
};
export default SoundButton;

const basicStyle = StyleSheet.create({
  button: {
    marginVertical: 5,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#876796",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
