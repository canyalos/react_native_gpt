import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Sanatciisim = () => {
  return <Text style={styles.ellieGoulding}>Ellie Goulding</Text>;
};

const styles = StyleSheet.create({
  ellieGoulding: {
    fontSize: FontSize.buttons_size,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.grey,
    textAlign: "center",
    width: 171,
    marginLeft: 12,
  },
});

export default Sanatciisim;
