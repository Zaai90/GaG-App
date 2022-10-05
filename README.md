#### Assignment 1- GaG-App

Gimmie a game - an app for the person that cannot decide what game they want to play on their own!

## Server setup

You need to have `Node.js` installed on your computer

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

  - [Animated] (https://reactnative.dev/docs/animated) - used in AnimView.tsx

- [Expo](https://docs.expo.dev/)

  - [Haptics](https://docs.expo.dev/versions/latest/sdk/haptics/) - used in Haptics.tsx

  - [Slider](https://docs.expo.dev/versions/latest/sdk/slider/) - used in Slider.tsx

  - [Audio](https://docs.expo.dev/versions/latest/sdk/audio/) - used in SoundButton.tsx

  - [Speech](https://docs.expo.dev/versions/latest/sdk/speech/) - used in Speech.tsx

  - [Brightness](https://docs.expo.dev/versions/latest/sdk/brightness/) - used in Slider.tsx

- [Third party modules]

- [React Navigation](https://reactnavigation.org/) - used in SettingsButton.tsx

- [Stack-navigator](https://reactnavigation.org/docs/en/stack-navigator.html) - used in HomeStack.tsx

- [Uuid](https://www.npmjs.com/package/uuid) - used in GameContext.tsx

## Demands for a passing grade

- [/] Projektet använder minst 6 stycken RN-komponenter och minst 6 stycken Expo
  komponenter.
- [/] De utvalda komponenterna ska antecknas i er README tillsammans med en lista över
  genomförda krav.
- [x] Git & GitHub har använts
- [x] Projektmappen innehåller en README.md fil - (läs ovan för mer info)
- [ ] Uppgiften lämnas in i tid!
- [ ] Muntlig presentation är genomförd

## Demands for a higher grade

- [/] Alla punkter för godkänt är uppfyllda
- [x] React Navigation används för att skapa en bättre upplevelse i appen.
- [x] Ytterligare en valfri extern modul används i projektet.
- [x] Prototyper för applikation tas fram innan den implementeras. Bilder på prototypen
      skall finnas i projektet vid inlämning.
