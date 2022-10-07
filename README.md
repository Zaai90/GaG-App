# Assignment 1- GaG-App

Gimmie a game - an app for the person that cannot decide what game they want to play on their own!

## Created by:

- [Erik G](https://github.com/Zaai90)
- [Frans](https://https://github.com/FransBillqvist)
- [Daniel T](https://https://github.com/DTSD21)
- [Lucas](https://github.com/LucBen93)

## Server setup

You need to have `Node.js` installed on your computer and the Expo go app on your mobile device or an emulator, Android studio for example.

```
$ git clone https://github.com/Zaai90/Gag-App.git
$ npm install
```

## Run application

```
$ npm start
```

GAG runs on `localhost:19000` by default.

## Used modules and components

- [React Native](https://facebook.github.io/react-native/)

  - [Pressable](https://reactnative.dev/docs/pressable) - used in GotoButton.tsx

  - [ScrollView](https://reactnative.dev/docs/scrollview) - used in GameList.tsx

  - [View](https://reactnative.dev/docs/view) - used in GameCard.tsx

  - [Text](https://reactnative.dev/docs/text) - used in GameCard.tsx

  - [Image](https://reactnative.dev/docs/image) - used in GameCard.tsx

  - [StyleSheet](https://reactnative.dev/docs/stylesheet) - used in GameCard.tsx

  - [TextInput](https://reactnative.dev/docs/textinput) - used in Add.tsx

  - [Button](https://reactnative.dev/docs/button) - used in Settings.tsx

  - [Switch](https://reactnative.dev/docs/switch) - used in Settings.tsx

  - [Animated](https://reactnative.dev/docs/animated) - used in AnimView.tsx

  - [Platform](https://docs.expo.dev/versions/v46.0.0/react-native/platform/) - used in Notification.tsx

- [Expo](https://docs.expo.dev/)

  - [Device](https://docs.expo.dev/versions/v46.0.0/sdk/device/) - used in Notifications.tsx

  - [Notifications](https://docs.expo.dev/versions/latest/sdk/notifications/) - used in Notifications.tsx

  - [Haptics](https://docs.expo.dev/versions/latest/sdk/haptics/) - used in Haptics.tsx

  - [Slider](https://docs.expo.dev/versions/latest/sdk/slider/) - used in Slider.tsx

  - [Video/Audio/Expo-AV](https://docs.expo.dev/versions/latest/sdk/audio/) - used in SoundButton.tsx

  - [Speech](https://docs.expo.dev/versions/latest/sdk/speech/) - used in Speech.tsx

  - [Brightness](https://docs.expo.dev/versions/latest/sdk/brightness/) - used in Slider.tsx

  - [StatusBar](https://docs.expo.dev/versions/latest/sdk/status-bar/) - used in App.tsx

  - [AsyncStorage](https://docs.expo.dev/versions/v46.0.0/sdk/async-storage/) - used in Storage.tsx

- [Third party modules]

  - [React Navigation](https://reactnavigation.org/) - used in Index.tsx

  - [Stack-navigator](https://reactnavigation.org/docs/en/stack-navigator.html) - used in HomeStack.tsx

  - [React Native Uuid](https://www.npmjs.com/package/react-native-uuid) - used in GameContext.tsx

  - [Subscription](https://www.npmjs.com/package/expo-modules-core) - used in Notifications.tsx

## Demands for a passing grade

- [x] Projektet använder minst 6 stycken RN-komponenter och minst 6 stycken Expo
      komponenter.
- [x] De utvalda komponenterna ska antecknas i er README tillsammans med en lista över
      genomförda krav.
- [x] Git & GitHub har använts
- [x] Projektmappen innehåller en README.md fil - (läs ovan för mer info)
- [x] Uppgiften lämnas in i tid!
- [x] Muntlig presentation är genomförd

## Demands for a higher grade

- [x] Alla punkter för godkänt är uppfyllda
- [x] React Navigation används för att skapa en bättre upplevelse i appen.
- [x] Ytterligare en valfri extern modul används i projektet.
- [x] Prototyper för applikation tas fram innan den implementeras. Bilder på prototypen
      skall finnas i projektet vid inlämning.

## Limitations

- Delete Account button in Settings does not do anything - because no User functionality exists.

- Text to Speech in Playthis.tsx and Playthisfav.tsx will keep talking even though the sound is set to OFF in Settings and when you navigate around.

- No validation exists in add/edit game right now.

- Games doesn't get saved with AsyncStorage for the moment.
