import {Pressable, StyleSheet, Text} from "react-native";

export default function homScreen(props: any) {
  return (
    <Pressable style={styles.contanier}>
      <Text>Home Screen</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
