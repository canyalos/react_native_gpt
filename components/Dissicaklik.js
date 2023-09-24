import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Dissicaklik = () => {
  return <Text style={styles.aracIciSicaklik}>Dış Mekan: 24 C</Text>;
};

const styles = StyleSheet.create({
  aracIciSicaklik: {
    fontSize: FontSize.bodyBold_size,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.grey,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 167,
    marginTop: 5,
  },
});

export default Dissicaklik;
