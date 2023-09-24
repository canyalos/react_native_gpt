import * as React from "react";
import { Image, StyleSheet } from "react-native";

const Navayarbtn = () => {
  return (
    <Image
      style={styles.frameChild}
      resizeMode="cover"
      source={require("../assets/ellipse-3.png")}
    />
  );
};

const styles = StyleSheet.create({
  frameChild: {
    width: 90,
    height: 90,
    zIndex: 0,
  },
});

export default Navayarbtn;
