import {useColorScheme} from "@/hooks/useColorScheme";
import {DarkTheme, DefaultTheme, ThemeProvider} from "@react-navigation/native";
import {useFonts} from "expo-font";
import {Stack} from "expo-router";
import {StatusBar} from "expo-status-bar";
import "react-native-reanimated";
import ComTitle from "./components/ComTitle";
import LeftBtn from "./components/LeftBtn";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerLeft: (props) => {
            return <LeftBtn />;
          },
          headerTitle: (props: any) => {
            return <ComTitle props={props} />;
          },
        }}
      >
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen
          name="drawer"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="modal"
          options={{
            presentation: "formSheet",
          }}
        /> */}
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
