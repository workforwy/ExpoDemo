import {Entypo} from "@expo/vector-icons";
import {Link, useNavigation} from "expo-router";
import {useEffect} from "react";
import {Pressable, Text, View} from "react-native";

export default function RegisterScreen() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>这里是draw页面</Text>

      <Link
        href={"/login"}
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
