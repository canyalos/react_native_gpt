import * as React from "react";
import { Image, StyleSheet, View, Pressable } from "react-native";
import Navhomebtn from "./Navhomebtn";
import { useNavigation } from "@react-navigation/native";
import Navekbtn from "./Navekbtn";
import Navtlfbtn from "./Navtlfbtn";
import Navmediabtn from "./Navmediabtn";
import Navkamerabtn from "./Navkamerabtn";
import Navayarbtn from "./Navayarbtn";

const Navibar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameParent}>
      <View style={styles.parentFlexBox}>
        <Navhomebtn />
        <Image
          style={[styles.vectorIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/vector10.png")}
        />
      </View>
      <Pressable
        style={[styles.ellipseParent, styles.parentFlexBox]}
        onPress={() => navigation.navigate("Tstcarek")}
      >
        <Navekbtn />
        <Image
          style={[styles.shapeIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/shape2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.ellipseParent, styles.parentFlexBox]}
        onPress={() => navigation.navigate("Telefon")}
      >
        <Navtlfbtn />
        <Image
          style={[styles.stroke1Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/stroke1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.ellipseParent, styles.parentFlexBox]}
        onPress={() => navigation.navigate("Media")}
      >
        <Navmediabtn />
        <Image
          style={[styles.vectorIcon1, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/vector11.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.ellipseParent, styles.parentFlexBox]}
        onPress={() => navigation.navigate("Kamera")}
      >
        <Navkamerabtn />
        <Image
          style={[styles.vectorIcon2, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/vector12.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.ellipseParent, styles.parentFlexBox]}
        onPress={() => navigation.navigate("Ayarlar")}
      >
        <Navayarbtn />
        <Image
          style={[styles.stroke1Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/vector13.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition1: {
    zIndex: 1,
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: 28,
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 80,
    width: 80,
  },
  iconPosition: {
    bottom: 28,
    zIndex: 1,
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: 28,
    position: "absolute",
  },
  vectorIcon: {
    bottom: 27,
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: 28,
    top: 28,
    right: 28,
  },
  shapeIcon: {
    top: 26,
    bottom: 26,
    right: 27,
  },
  ellipseParent: {
    marginTop: 20,
  },
  stroke1Icon: {
    right: 28,
    top: 28,
    bottom: 28,
  },
  vectorIcon1: {
    right: 27,
    bottom: 27,
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: 28,
    top: 28,
  },
  vectorIcon2: {
    top: 29,
    right: 27,
  },
  frameParent: {
    top: 142,
    left: 16,
    position: "absolute",
  },
});

export default Navibar;
