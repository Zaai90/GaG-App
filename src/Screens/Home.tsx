import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import GotoButton from "../Components/Buttons/GotoButton";
import HapticButton from "../Components/Buttons/Haptics";
import Frostmourne from "../Components/FrostmourneImage";
import BackgroundHomeVideo from "../Components/Videobackground";
import { useGameContext } from "../Context/GameContext";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = (navigator: Props) => {
  const { getFavGames } = useGameContext();
  const FavGames = getFavGames();
  return (
    <View style={{ position: "relative" }}>
      <BackgroundHomeVideo navigator={navigator} />
      <View
        style={{
          position: "absolute",
          top: "60%",
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Frostmourne />
        <View>
          <HapticButton
            style={{
              button: {
                backgroundColor: "transparent",
                elevation: 0,
                marginVertical: 0,
                marginHorizontal: 0,
                paddingVertical: 0,
              },
              text: {
                color: "white",
                textShadowColor: "rgba(0, 0, 0, 0.25)",
                textShadowOffset: { width: 2, height: 3 },
                textShadowRadius: 5,
              },
            }}
            title='GaG me!😘'
            to='PlayThis'
            navigator={navigator}
            hapticType='Heavy'
          ></HapticButton>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          top: "70%",
          flexDirection: "row",
          width: "100%",

          alignItems: "center",
        }}
      >
        {FavGames.length > 0 ? (
          <View style={{ flexDirection: "row" }}>
            <Frostmourne />

            <HapticButton
              style={{
                button: {
                  backgroundColor: "transparent",
                  elevation: 0,
                  marginVertical: 0,
                  marginHorizontal: 0,
                  paddingVertical: 0,
                },
                text: {
                  color: "white",
                  textShadowColor: "rgba(0, 0, 0, 0.25)",
                  textShadowOffset: { width: 2, height: 3 },
                  textShadowRadius: 5,
                },
              }}
              title='GaG a Fav😊'
              to='PlayThisFav'
              navigator={navigator}
              hapticType='Heavy'
            />
          </View>
        ) : null}
      </View>
      <View
        style={{
          position: "absolute",
          top: "80%",
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Frostmourne />
        <View>
          <GotoButton
            style={{
              button: {
                backgroundColor: "transparent",
                elevation: 0,
                marginVertical: 0,
                marginHorizontal: 0,
                paddingVertical: 0,
              },
              text: {
                color: "white",
                textShadowColor: "rgba(0, 0, 0, 0.25)",
                textShadowOffset: { width: 2, height: 3 },
                textShadowRadius: 5,
              },
            }}
            title='List of your games'
            to='GameList'
            navigator={navigator}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
