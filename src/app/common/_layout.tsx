import {Stack} from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="modal"
        options={{
          title: "弹窗",
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="selectPic"
        options={{
          title: "选择图片",
        }}
      />
    </Stack>
  );
}
