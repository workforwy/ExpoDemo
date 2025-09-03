import {MotiView} from "moti";
import React from "react";
import {StyleSheet} from "react-native";

export default function Shape({children}: {children: React.ReactNode}) {
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
      {children}
    </MotiView>
  );
}

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
  },
  shape: {
    justifyContent: "center",
    alignItems: "center",
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
