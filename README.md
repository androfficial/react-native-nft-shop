# NFT Shop

Mobile NFT marketplace built with Expo: browse NFT cards, search them by name and open a details screen with the description and the bid history. Built in August 2023 as a learning project.

## Features

- A home screen with seven NFT cards, each with an image, the title, the creator and a price in ETH. Place a bid on a card opens its details.
- A search field that filters the NFTs by name while typing and shows the full list again when nothing matches.
- A details screen with a full-width image, the description with Read More and Show Less, and the bids with bidder, date and price.
- Stack navigation with React Navigation: the details screen opens on top of the list, and its back button returns to it.

## Tech stack

- **Framework:** React Native 0.72 with Expo SDK 49, TypeScript 5 and JavaScript
- **Routing:** React Navigation 6 (stack navigator)
- **Styling:** inline style objects with shared colors, sizes, fonts and shadows from `themes/theme.ts`, Inter font through expo-font
- **Tooling:** Expo CLI, Babel with babel-preset-expo, webpack through @expo/webpack-config 19 for the web target

## Getting started

You need Node.js 18 and an Android emulator, the iOS simulator on macOS, a browser or a phone with Expo Go.

```bash
git clone https://github.com/androfficial/react-native-nft-shop.git
cd react-native-nft-shop
yarn install
yarn start
```

In the Expo CLI terminal, press `a` for Android, `i` for iOS or `w` for the web, or scan the QR code with Expo Go.

## Scripts

| Command | Description |
| --- | --- |
| `yarn start` | Starts the Expo dev server |
| `yarn android` | Starts Expo and opens the app on an Android emulator or device |
| `yarn ios` | Starts Expo and opens the app in the iOS simulator |
| `yarn web` | Starts Expo for the web with react-native-web |

## Project structure

```text
assets/       Inter fonts, icons, NFT images and avatars
components/   NFT card, buttons, headers, bids, price, title and info blocks
constants/    NFT data and the asset map
hooks/        font loading
screens/      Home and Details
themes/       colors, sizes, fonts, shadows and the navigation theme
```

## Notes

- The data is static: NFTs and bids come from `constants/nftData.ts`.
- The TypeScript migration is partial: the app entry, screens, hooks, constants and themes are TypeScript, while most components are still JavaScript.
- The project is on Expo SDK 49, while Expo Go from the app stores runs only the latest SDK, so scanning the QR code on a phone may fail. On an Android emulator or the iOS simulator Expo CLI offers to install a compatible Expo Go, and the web target does not need Expo Go.
