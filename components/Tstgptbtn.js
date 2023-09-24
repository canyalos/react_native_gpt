import * as React from "react";
import { Image, StyleSheet } from "react-native";

const Tstgptbtn = () => {
  return (
    <Image
      style={styles.tstgptbtnIcon}
      resizeMode="cover"
      source={require("../assets/tstgptbtn.png")}
    />
  );
};

const styles = StyleSheet.create({
  tstgptbtnIcon: {
    width: 124,
    height: 112,
  },
});

export default Tstgptbtn;
