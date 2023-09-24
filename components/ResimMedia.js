import * as React from "react";
import { Image, StyleSheet } from "react-native";

const ResimMedia = () => {
  return (
    <Image
      style={styles.frameChild}
      resizeMode="cover"
      source={require("../assets/rectangle-13.png")}
    />
  );
};

const styles = StyleSheet.create({
  frameChild: {
    borderRadius: 8,
    width: 120,
    height: 94,
  },
});

export default ResimMedia;
