import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Kornabtn from "./Kornabtn";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const KornagrpBtn = () => {
  return (
    <View style={styles.carKornaGrupBtn}>
      <Kornabtn />
      <Text style={styles.korna}>KORNA</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  korna: {
    alignSelf: "stretch",
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.miniTitleBg,
    textAlign: "center",
    marginTop: 4,
  },
  carKornaGrupBtn: {
    position: "absolute",
    top: 435,
    left: 825,
    width: 74,
    height: 105,
    alignItems: "center",
  },
});

export default KornagrpBtn;
