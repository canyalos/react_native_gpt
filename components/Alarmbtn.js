import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Alarmbtn = () => {
  return (
    <View style={[styles.alarmbtn, styles.alarmbtnLayout]}>
      <View style={[styles.alarmbtnChild, styles.alarmbtnLayout]} />
      <View style={styles.vectorParent}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector7.png")}
        />
        <Text style={styles.onoff}>{`ON/OFF `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  alarmbtnLayout: {
    height: 112,
    width: 124,
  },
  alarmbtnChild: {
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
  },
  vectorIcon: {
    width: 69,
    height: 51,
  },
  onoff: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.miniTitleBg,
    textAlign: "center",
    marginTop: 8,
  },
  vectorParent: {
    width: 78,
    justifyContent: "center",
    paddingBottom: Padding.p_5xs,
    marginTop: -100,
    alignItems: "center",
  },
  alarmbtn: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default Alarmbtn;
