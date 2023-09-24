import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Keyonbtn = () => {
  return (
    <View style={[styles.keyonbtn, styles.keyonbtnFlexBox]}>
      <View style={styles.keyonbtnChild} />
      <View style={[styles.keyOnIconParent, styles.keyonbtnFlexBox]}>
        <Image
          style={styles.keyOnIcon}
          resizeMode="cover"
          source={require("../assets/key-on-icon.png")}
        />
        <Text style={styles.keyOn}>KEY ON</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  keyonbtnFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  keyonbtnChild: {
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
  keyOnIcon: {
    width: 70,
    height: 45,
  },
  keyOn: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.miniTitleBg,
    textAlign: "left",
    marginTop: 4,
  },
  keyOnIconParent: {
    position: "absolute",
    top: 17,
    left: 26,
    width: 72,
    zIndex: 1,
  },
  keyonbtn: {
    width: 124,
  },
});

export default Keyonbtn;
