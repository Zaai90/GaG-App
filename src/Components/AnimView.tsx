import React, { useEffect, useRef } from "react";
import { Animated, ViewStyle } from "react-native";

interface Props {
  style?: ViewStyle;
  children: React.ReactNode;
}

export const FadeInView = ({ style, children }: Props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[style ? style : null, { opacity: fadeAnim }]}>{children}</Animated.View>
  );
};
