import * as Sentry from "@sentry/react-native";
import {Stack} from "expo-router";
import {useEffect} from "react";
import ComTitle from "./components/ComTitle";
import LeftBtn from "./components/LeftBtn";

export default function RootLayout() {
  function initSentry() {
    Sentry.init({
      dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for tracing.
      // We recommend adjusting this value in production
      tracesSampleRate: 1.0,
    });
  }

  useEffect(() => {
    initSentry();
  }, []);

  return (
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
      <Stack.Screen
        name="tabs"
        options={{
          headerShown: false,
        }}
      />
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
      <Stack.Screen
        name="modal"
        options={{
          presentation: "formSheet",
        }}
      />
      <Stack.Screen name="selectPic" />
    </Stack>
  );
}
