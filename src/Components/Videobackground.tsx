import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Video } from "expo-av";
import * as React from "react";
import { View } from "react-native";
import { useSettings } from "../Context/SettingContext";
import { RootStackParamList } from "../navigation/types";

interface Props {
  navigator: NativeStackScreenProps<RootStackParamList, "Home">;
}

function BackgroundHomeVideo({ navigator }: Props) {
  const { isSoundOn } = useSettings();
  const video = React.useRef<Video>(null);
  const [status, setStatus] = React.useState();

  React.useEffect(() => {
    const startVideo = navigator.navigation.addListener("focus", () => {
      (async () => {
        await video.current?.playAsync();
      })();
    });
    return startVideo;
  });

  React.useEffect(() => {
    const stopVideo = navigator.navigation.addListener("blur", () => {
      (async () => {
        await video.current?.pauseAsync();
      })();
    });
    return stopVideo;
  }, [navigator]);

  return (
    <View style={{ height: "79%", width: "100%" }}>
      <Video
        ref={video}
        source={require("../../assets/Wrath.mp4")}
        style={{ height: "100%", width: "100%" }}
        resizeMode='stretch'
        onPlaybackStatusUpdate={() => setStatus(status)}
        isLooping={true}
        isMuted={!isSoundOn}
      />
    </View>
  );
}

// function unLoadVideo() => {

// }

export default BackgroundHomeVideo;
