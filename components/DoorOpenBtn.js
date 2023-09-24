import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const DoorOpenBtn = () => {
  return (
    <View style={styles.doorOpenBtn}>
      <View style={styles.doorOpenBtn1}>
        <Image
          style={styles.doorOpenBtnChild}
          resizeMode="cover"
          source={require("../assets/ellipse-40.png")}
        />
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector5.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  doorOpenBtnChild: {
    width: 72,
    height: 72,
    zIndex: 0,
  },
  vectorIcon: {
    position: "absolute",
    height: "47.22%",
    width: "41.67%",
    top: "26.39%",
    right: "29.17%",
    bottom: "26.39%",
    left: "29.17%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    zIndex: 1,
  },
  doorOpenBtn1: {
    flexDirection: "row",
  },
  doorOpenBtn: {
    marginTop: 27,
    flexDirection: "row",
  },
});

export default DoorOpenBtn;
