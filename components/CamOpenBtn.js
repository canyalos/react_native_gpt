import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const CamOpenBtn = () => {
  return (
    <View style={styles.camOpenBtn}>
      <View style={styles.camOpenBtn1}>
        <Image
          style={styles.camOpenBtnChild}
          resizeMode="cover"
          source={require("../assets/ellipse-40.png")}
        />
        <Image
          style={styles.shapeIcon}
          resizeMode="cover"
          source={require("../assets/shape1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  camOpenBtnChild: {
    width: 72,
    height: 72,
    zIndex: 0,
  },
  shapeIcon: {
    position: "absolute",
    height: "47.22%",
    width: "44.44%",
    top: "26.39%",
    right: "27.78%",
    bottom: "26.39%",
    left: "27.78%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    zIndex: 1,
  },
  camOpenBtn1: {
    flexDirection: "row",
  },
  camOpenBtn: {
    flexDirection: "row",
  },
});

export default CamOpenBtn;
