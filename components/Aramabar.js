import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Aramabar = () => {
  return (
    <View style={[styles.aramabar, styles.aramabarPosition]}>
      <Image
        style={[styles.searchIcon, styles.aramabarPosition]}
        resizeMode="cover"
        source={require("../assets/search.png")}
      />
      <Text style={styles.arama}>Arama</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  aramabarPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  searchIcon: {
    top: 19,
    left: 4,
    width: 18,
    height: 18,
  },
  arama: {
    top: 13,
    left: 33,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.darkgray,
    textAlign: "left",
    position: "absolute",
  },
  aramabar: {
    top: 18,
    left: 284,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.gray_200,
    shadowColor: "rgba(76, 201, 240, 0.6)",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    width: 547,
    height: 52,
  },
});

export default Aramabar;
