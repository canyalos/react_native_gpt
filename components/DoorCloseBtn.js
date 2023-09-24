import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const DoorCloseBtn = () => {
  return (
    <View style={styles.doorCloseBtn}>
      <View style={styles.doorCloseBtn1}>
        <Image
          style={styles.doorCloseBtnChild}
          resizeMode="cover"
          source={require("../assets/ellipse-39.png")}
        />
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector4.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  doorCloseBtnChild: {
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
  doorCloseBtn1: {
    flexDirection: "row",
  },
  doorCloseBtn: {
    marginTop: 27,
    flexDirection: "row",
  },
});

export default DoorCloseBtn;
