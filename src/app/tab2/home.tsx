import {useReducer} from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import Shape from "../../components/Shape";

export default function HomeScreen() {
  const [visible, toggle] = useReducer((s) => !s, true);

  return (
    <View style={styles.contanier}>
      <Pressable onPress={toggle} style={styles.container}>
        {visible && (
          <Shape>
            <Text style={{fontSize: 20, color: "white"}}>Home Screen</Text>
          </Shape>
        )}
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
  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#234244",
  },
});
