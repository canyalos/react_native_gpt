import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Bagajbtn from "./Bagajbtn";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const BagajGrpBtn = () => {
  return (
    <View style={styles.carBagajGrupBtn}>
      <Bagajbtn />
      <Text style={styles.bagaj}>BAGAJ</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bagaj: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.miniTitleBg,
    textAlign: "center",
    marginTop: 4,
  },
  carBagajGrupBtn: {
    position: "absolute",
    top: 436,
    left: 1077,
    width: 74,
    height: 105,
    alignItems: "center",
  },
});

export default BagajGrpBtn;
