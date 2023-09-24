import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Mediabar = () => {
  return (
    <View style={[styles.groupParent, styles.groupPosition]}>
      <Image
        style={[styles.groupChild, styles.groupPosition]}
        resizeMode="cover"
        source={require("../assets/group-88.png")}
      />
      <Text style={[styles.time000, styles.timeLayout]}>0:00</Text>
      <Text style={[styles.time220, styles.timeLayout]}>2:20</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    top: 29,
    position: "absolute",
    left: 0,
  },
  timeLayout: {
    height: 14,
    width: 26,
    textAlign: "left",
    color: Color.grey,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  groupChild: {
    width: 301,
    height: 5,
    left: 0,
  },
  time000: {
    top: 5,
    fontSize: FontSize.size_2xs,
    left: 0,
  },
  time220: {
    top: 0,
    left: 273,
    fontSize: FontSize.smallText_size,
  },
  groupParent: {
    width: 299,
    height: 32,
    left: 0,
  },
});

export default Mediabar;
