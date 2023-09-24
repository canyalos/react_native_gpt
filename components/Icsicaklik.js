import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Icsicaklik = () => {
  return <Text style={styles.c}>23 C</Text>;
};

const styles = StyleSheet.create({
  c: {
    fontSize: FontSize.size_21xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.miniTitleBg,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 167,
    marginTop: 5,
  },
});

export default Icsicaklik;
