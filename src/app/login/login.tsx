import {Entypo} from "@expo/vector-icons";
import {Link} from "expo-router";
import {Text, View} from "react-native";

export default function LoginScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>这里是页面</Text>

      <Link
        href={"/login/register"}
        style={{
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 5,
          marginTop: 20,
        }}
      >
        <Entypo name="home" size={24} color="white" />
      </Link>
    </View>
  );
}
