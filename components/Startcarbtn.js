import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Startcarbtn = () => {
  return (
    <View style={styles.startcarbtn}>
      <View style={styles.startcarbtnChild} />
      <View style={styles.vectorParent}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector8.png")}
        />
        <Text style={styles.start}>START</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  startcarbtnChild: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.gray_200,
    shadowColor: "rgba(207, 248, 11, 0.25)",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    height: 112,
    zIndex: 0,
    width: 124,
  },
  vectorIcon: {
    height: 46,
    width: 71,
  },
  start: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.miniTitleBg,
    textAlign: "left",
    marginTop: 6,
  },
  vectorParent: {
    position: "absolute",
    top: 17,
    left: 26,
    height: 82,
    zIndex: 1,
    width: 71,
    alignItems: "center",
  },
  startcarbtn: {
    justifyContent: "flex-end",
    alignItems: "center",
    width: 124,
  },
});

export default Startcarbtn;
