import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Voltajdurumu = () => {
  return (
    <View style={styles.voltajdurumu}>
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
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector3.png")}
        />
      </View>
      <View style={styles.voltajInfo}>
        <Text style={styles.voltaj}>Voltaj</Text>
        <Text style={[styles.text, styles.vTypo]}>13.4</Text>
        <Text style={[styles.v, styles.vTypo]}>V</Text>
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
  vTypo: {
    marginLeft: 4,
    textAlign: "left",
    color: Color.miniTitleBg,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
  },
  frameChild: {
    width: 101,
    height: 56,
    zIndex: 0,
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
  vectorIcon1: {
    height: "13.96%",
    width: "15.66%",
    top: "70.7%",
    right: "42.17%",
    bottom: "15.34%",
    left: "42.17%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    zIndex: 11,
    position: "absolute",
  },
  voltaj: {
    display: "flex",
    alignItems: "center",
    width: 53,
    height: 26,
    textAlign: "left",
    color: Color.miniTitleBg,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
  },
  text: {
    width: 33,
    height: 25,
  },
  v: {
    width: 12,
    height: 26,
  },
  voltajInfo: {
    flexDirection: "row",
  },
  voltajdurumu: {
    top: 554,
    left: 1150,
    height: 238,
    position: "absolute",
  },
});

export default Voltajdurumu;
