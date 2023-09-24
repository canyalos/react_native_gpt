import * as React from "react";
import { Image, StyleSheet } from "react-native";

const Farbtn = () => {
  return (
    <Image
      style={styles.carFarIcon}
      resizeMode="cover"
      source={require("../assets/car-far.png")}
    />
  );
};

const styles = StyleSheet.create({
  carFarIcon: {
    width: 84,
    height: 84,
  },
});

export default Farbtn;
