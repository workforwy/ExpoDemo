import {ExpoConfig} from "expo/config";

const config: ExpoConfig = {
  name: "ExpoDemo",
  slug: "ExpoDemo",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/1024.png",
  scheme: "expodemo",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "cover",
    backgroundColor: "#162326",
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.erik2025.ExpoDemo",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    edgeToEdgeEnabled: true,
    package: "com.erik2025.ExpoDemo",
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash.png",
        resizeMode: "cover",
        backgroundColor: "#162326",
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
};

export default config;
