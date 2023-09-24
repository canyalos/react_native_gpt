import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Yakitdurumu = () => {
  return (
    <View style={styles.yakitdurumu}>
      <View>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/ellipse-36.png")}
        />
        <Image
          style={styles.frameItem}
          resizeMode="cover"
          source={require("../assets/ellipse-33.png")}
        />
        <Image
          style={[styles.frameInner, styles.frameInnerPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-34.png")}
        />
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector-71.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.frameInnerPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-35.png")}
        />
        <Image
          style={[styles.frameChild1, styles.frameChildPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-32.png")}
        />
        <Image
          style={styles.frameChild2}
          resizeMode="cover"
          source={require("../assets/vector-67.png")}
        />
        <Image
          style={[styles.frameChild3, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/vector-72.png")}
        />
        <Image
          style={[styles.frameChild4, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/vector-73.png")}
        />
        <Image
          style={[styles.frameChild5, styles.frameChildPosition]}
          resizeMode="cover"
          source={require("../assets/vector-69.png")}
        />
        <Image
          style={styles.frameChild6}
          resizeMode="cover"
          source={require("../assets/vector-68.png")}
        />
        <Image
          style={styles.yakitIcon}
          resizeMode="cover"
          source={require("../assets/yakit-icon.png")}
        />
      </View>
      <View style={styles.fuelParent}>
        <Text style={styles.fuel}>Yakıt</Text>
        <Text style={[styles.text, styles.textTypo]}>65</Text>
        <Text style={[styles.text1, styles.textTypo]}>%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameInnerPosition: {
    height: 33,
    top: 16,
    position: "absolute",
  },
  frameChildPosition: {
    top: 0,
    position: "absolute",
  },
  frameChildLayout: {
    height: 1,
    position: "absolute",
  },
  textTypo: {
    marginLeft: 1,
    height: 19,
    display: "flex",
    textAlign: "left",
    color: Color.miniTitleBg,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    alignItems: "center",
  },
  frameChild: {
    height: 56,
    zIndex: 0,
    width: 101,
  },
  frameItem: {
    top: 21,
    left: 20,
    width: 59,
    height: 28,
    zIndex: 1,
    position: "absolute",
  },
  frameInner: {
    left: 15,
    width: 71,
    zIndex: 2,
  },
  vectorIcon: {
    left: 21,
    width: 70,
    height: 45,
    zIndex: 3,
    top: 16,
    position: "absolute",
  },
  ellipseIcon: {
    left: 17,
    width: 68,
    zIndex: 4,
  },
  frameChild1: {
    left: 0,
    width: 77,
    height: 49,
    zIndex: 5,
  },
  frameChild2: {
    top: 7,
    left: 58,
    width: 19,
    height: 27,
    zIndex: 6,
    position: "absolute",
  },
  frameChild3: {
    top: 49,
    left: 84,
    zIndex: 7,
    width: 17,
  },
  frameChild4: {
    top: 47,
    left: 6,
    width: 7,
    zIndex: 8,
  },
  frameChild5: {
    left: 46,
    width: 2,
    height: 21,
    zIndex: 9,
  },
  frameChild6: {
    top: 17,
    left: 3,
    height: 13,
    zIndex: 10,
    width: 17,
    position: "absolute",
  },
  yakitIcon: {
    height: "25%",
    width: "13.86%",
    top: "62.5%",
    right: "41.58%",
    bottom: "12.5%",
    left: "44.55%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    zIndex: 11,
    position: "absolute",
  },
  fuel: {
    width: 47,
    height: 19,
    display: "flex",
    textAlign: "left",
    color: Color.miniTitleBg,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    alignItems: "center",
  },
  text: {
    width: 24,
  },
  text1: {
    width: 12,
  },
  fuelParent: {
    flexDirection: "row",
    marginTop: 7,
  },
  yakitdurumu: {
    top: 554,
    left: 715,
    height: 238,
    alignItems: "center",
    width: 101,
    position: "absolute",
  },
});

export default Yakitdurumu;
