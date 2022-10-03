import Slider, { SliderProps } from "@react-native-community/slider";
import * as Brightness from "expo-brightness";
import React, { useEffect, useState } from "react";

const SliderExample = (props: SliderProps) => {
  const [brightness, setBrightness] = useState(0);
  const [granted, setGranted] = useState(false);

  //   const [slideStartingValue, setSlideStartingValue] = useState(0);
  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      console.log(status);
      setGranted(status === "granted");
    })();
  }, []);

  useEffect(() => {
    if (granted === true) {
      (async () => {
        const brigth = await Brightness.getBrightnessAsync();
        setBrightness(brigth);
      })();
    }
    console.log(brightness);
  }, [granted]);

  useEffect(() => {
    (async () => {
      Brightness.setBrightnessAsync(brightness);
    })();

    console.log(brightness);
  }, [brightness]);

  return (
    <Slider
      step={0.05}
      value={brightness}
      {...props}
      onValueChange={setBrightness}
      style={{ width: "75%", height: 40 }}
      // minimumTrackTintColor='#0FE2FF'
      // maximumTrackTintColor='#3837BA'
    />
  );
};

export default SliderExample;
