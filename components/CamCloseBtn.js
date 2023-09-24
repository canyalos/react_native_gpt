import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const CamCloseBtn = () => {
  return (
    <View style={styles.camCloseBtn}>
      <View style={styles.camCloseBtn1}>
        <Image
          style={styles.camCloseBtnChild}
          resizeMode="cover"
          source={require("../assets/ellipse-39.png")}
        />
        <Image
          style={styles.shapeIcon}
          resizeMode="cover"
          source={require("../assets/shape.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  camCloseBtnChild: {
    width: 72,
    height: 72,
    zIndex: 0,
  },
  shapeIcon: {
    position: "absolute",
    top: 19,
    left: 20,
    width: 32,
    height: 34,
    zIndex: 1,
  },
  camCloseBtn1: {
    flexDirection: "row",
  },
  camCloseBtn: {
    flexDirection: "row",
  },
});

export default CamCloseBtn;
