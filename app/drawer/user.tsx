import {Entypo} from "@expo/vector-icons";
import {Link, Slot, useNavigation} from "expo-router";
import {useEffect} from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";

export default function homScreen(props: any) {
  const navigation = useNavigation();

  useEffect(() => {}, [navigation]);

  return <View style={styles.contanier}></View>;
}

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
  },
});
