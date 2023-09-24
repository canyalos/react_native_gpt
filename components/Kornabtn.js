import * as React from "react";
import { Image, StyleSheet } from "react-native";

const Kornabtn = () => {
  return (
    <Image
      style={styles.carKornaIcon}
      resizeMode="cover"
      source={require("../assets/car-korna.png")}
    />
  );
};

const styles = StyleSheet.create({
  carKornaIcon: {
    width: 84,
    height: 84,
  },
});

export default Kornabtn;
