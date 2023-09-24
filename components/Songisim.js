import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Songisim = () => {
  return <Text style={styles.loveMeLike}>Love me like you do</Text>;
};

const styles = StyleSheet.create({
  loveMeLike: {
    fontSize: FontSize.bodyBold_size,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.miniTitleBg,
    textAlign: "center",
    width: 171,
  },
});

export default Songisim;
