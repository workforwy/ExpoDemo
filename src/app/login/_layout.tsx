import {Stack, useNavigation} from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          title: "登录",
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          title: "注册",
        }}
      />
    </Stack>
  );
}
