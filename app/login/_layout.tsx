import {Entypo} from "@expo/vector-icons";
import {Stack, useNavigation} from "expo-router";
import {Pressable, Text, View} from "react-native";
import LeftBtn from "../components/LeftBtn";
import ComTitle from "../components/ComTitle";

export default function RootLayout() {
  const navigation = useNavigation();
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
        name="index"
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
