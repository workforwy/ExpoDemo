import {Entypo} from "@expo/vector-icons";
import {Link, Slot, useNavigation} from "expo-router";
import {MotiView} from "moti";
import {useEffect, useReducer} from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import LogUtils from "../utils/logUtils";
import {log} from "loglevel";

function Shape(props: any) {
  return (
    <MotiView
      from={{
        opacity: 1,
        scale: 0.5,
      }}
      animate={{
        opacity: 0.5,
        scale: 1,
      }}
      transition={{
        type: "timing",
      }}
      style={styles.shape}
    >
      {props.children}
    </MotiView>
  );
}

export default function homScreen(props: any) {
  const navigation = useNavigation();
  useEffect(() => {}, [navigation]);

  const [visible, toggle] = useReducer((s) => !s, true);

  const [num, addNum] = useReducer((s) => s * 2, 2);

  function handlePress() {}

  LogUtils.log("Home Screen Rendered");

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
