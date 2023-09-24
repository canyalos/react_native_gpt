import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Farbtn from "./Farbtn";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FarGrpBtn = () => {
  return (
    <View style={styles.carFarGrupBtn}>
      <Farbtn />
      <Text style={styles.far}>FAR</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  far: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.miniTitleBg,
    textAlign: "center",
    marginTop: 5,
  },
  carFarGrupBtn: {
    position: "absolute",
    top: 435,
    left: 948,
    width: 74,
    height: 106,
    alignItems: "center",
  },
});

export default FarGrpBtn;
