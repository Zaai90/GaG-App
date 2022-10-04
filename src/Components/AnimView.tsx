import React, { useEffect, useRef } from "react";
import { Animated, ViewProps } from "react-native";

type Props = ViewProps;

export const FadeInView = (props: Props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

// <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//   <FadeInView style={{ width: 250, height: 50, backgroundColor: "powderblue" }}>
//     <Text style={{ fontSize: 28, textAlign: "center", margin: 10 }}>Fading in</Text>
//   </FadeInView>
// </View>

// export default function AnimView() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <FadeInView style={{ width: 250, height: 50, backgroundColor: "powderblue" }}>
//         <Text style={{ fontSize: 28, textAlign: "center", margin: 10 }}>Fading in</Text>
//       </FadeInView>
//     </View>
//   );
// }
