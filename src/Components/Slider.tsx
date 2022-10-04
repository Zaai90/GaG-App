import Slider, { SliderProps } from "@react-native-community/slider";
import * as Brightness from "expo-brightness";
import React, { useEffect, useState } from "react";

const BrightnessSlider = (props: SliderProps) => {
  const [brightness, setBrightness] = useState(0.5);
  const [granted, setGranted] = useState(false);

  const getBrightnessFromSystemAsync = async () => {
    const { status } = await Brightness.requestPermissionsAsync();
    setGranted(status === "granted");
    if (status === "granted") {
      await Brightness.useSystemBrightnessAsync();
      const value = await Brightness.getSystemBrightnessAsync();
      console.log("Set to " + value);
      setBrightness(value);
    }
  };

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
        console.log("Getting Systems brightness");
        await getBrightnessFromSystemAsync();
      })();
    }
  }, [granted]);

  useEffect(() => {
    (async () => {
      console.log("Brightness set to " + brightness);
      if (granted) {
        await Brightness.setSystemBrightnessAsync(brightness);
      }
    })();
  }, [brightness]);

  return (
    <Slider
      step={0.05}
      value={brightness}
      maximumValue={0.9}
      {...props}
      onValueChange={setBrightness}
      style={{ width: "75%", height: 40 }}
      // minimumTrackTintColor='#0FE2FF'
      // maximumTrackTintColor='#3837BA'
    />
  );
};

export default BrightnessSlider;
