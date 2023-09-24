import * as React from "react";
import { StyleSheet, View, Image } from "react-native";
import CamCloseBtn from "./CamCloseBtn";
import DoorCloseBtn from "./DoorCloseBtn";
import CamOpenBtn from "./CamOpenBtn";
import DoorOpenBtn from "./DoorOpenBtn";

const CamDoorHepsi = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.camCloseBtnParent}>
        <CamCloseBtn />
        <DoorCloseBtn />
      </View>
      <Image
        style={styles.frameChild}
        resizeMode="cover"
        source={require("../assets/frame-188.png")}
      />
      <View style={styles.camOpenBtnParent}>
        <CamOpenBtn />
        <DoorOpenBtn />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  camCloseBtnParent: {
    width: 72,
    alignItems: "center",
    height: 171,
  },
  frameChild: {
    width: 257,
    height: 161,
    marginLeft: 56,
  },
  camOpenBtnParent: {
    marginLeft: 56,
  },
  frameParent: {
    position: "absolute",
    top: 6,
    left: 21,
    flexDirection: "row",
    height: 171,
  },
});

export default CamDoorHepsi;
