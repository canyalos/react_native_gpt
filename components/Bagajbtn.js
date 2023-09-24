import * as React from "react";
import { Image, StyleSheet } from "react-native";

const Bagajbtn = () => {
  return (
    <Image
      style={styles.carBagajIcon}
      resizeMode="cover"
      source={require("../assets/car-bagaj.png")}
    />
  );
};

const styles = StyleSheet.create({
  carBagajIcon: {
    width: 84,
    height: 84,
  },
});

export default Bagajbtn;
