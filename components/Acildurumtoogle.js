import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const Acildurumtoogle = () => {
  return <View style={styles.acildurumToogleBtnChild} />;
};

const styles = StyleSheet.create({
  acildurumToogleBtnChild: {
    borderRadius: Border.br_base,
    backgroundColor: Color.darkslategray_100,
    width: 55,
    height: 29,
    zIndex: 0,
  },
});

export default Acildurumtoogle;
