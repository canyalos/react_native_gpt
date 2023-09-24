import * as React from "react";
import { Image, StyleSheet } from "react-native";

const Navhomebtn = () => {
  return (
    <Image
      style={styles.homeBtnYvIcon}
      resizeMode="cover"
      source={require("../assets/home-btn-yv.png")}
    />
  );
};

const styles = StyleSheet.create({
  homeBtnYvIcon: {
    width: 90,
    height: 90,
    zIndex: 0,
  },
});

export default Navhomebtn;
