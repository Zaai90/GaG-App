import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, View } from "react-native";
import GotoButton from "../Components/Buttons/GotoButton";
import HapticButton from "../Components/Buttons/Haptics";
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
        <Image
          source={require("../../assets/images/frostmourne.png")}
          style={{
            height: 45,
            width: 85,
            resizeMode: "contain",
            justifyContent: "flex-start",
          }}
        />
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
        <Image
          source={require("../../assets/images/frostmourne.png")}
          style={{
            height: 45,
            width: 85,
            resizeMode: "contain",
            justifyContent: "flex-start",
          }}
        />

        <View>
          {FavGames.length > 0 ? (
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
          ) : null}
        </View>
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
        <Image
          source={require("../../assets/images/frostmourne.png")}
          style={{
            height: 45,
            width: 85,
            resizeMode: "contain",
            justifyContent: "flex-start",
          }}
        />
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
