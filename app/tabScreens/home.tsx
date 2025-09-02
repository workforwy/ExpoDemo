import {useNavigation} from "expo-router";
import {useEffect, useReducer} from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {Shape} from "./components/Shape";

export default function HomeScreen(props: any) {
  const navigation = useNavigation();
  const [visible, toggle] = useReducer((s) => !s, true);
  const [num, addNum] = useReducer((s) => s * 2, 2);

  useEffect(() => {}, [navigation]);

  return (
    <View style={styles.contanier}>
      <Pressable onPress={toggle} style={styles.container}>
        {visible && (
          <Shape>
            <Text style={{fontSize: 20, color: "white"}}>Home Screen</Text>
          </Shape>
        )}
      </Pressable>
      <Pressable onPress={addNum} style={styles.container}>
        <Text>{num}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
  },
  shape: {
    justifyContent: "center",
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#9c1aff",
  },
});
