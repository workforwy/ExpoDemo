import {Entypo} from "@expo/vector-icons";
import {Link, useLocalSearchParams} from "expo-router";
import {Text, View} from "react-native";

export default function RegisterScreen() {
  const data = useLocalSearchParams();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>这里是draw页面</Text>
      <Text>data: {JSON.stringify(data?.userId)}</Text>
      <Link
        href={"/login/login"}
        style={{
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 5,
          marginTop: 20,
        }}
      >
        <Entypo name="arrow-left" size={24} color="white" />
      </Link>
    </View>
  );
}
