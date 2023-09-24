import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const MainNemBtn = () => {
  return (
    <View style={styles.mainNemBtn}>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={styles.nem}>Nem</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 27,
    height: 34,
  },
  nem: {
    fontSize: FontSize.bodyBold_size,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.miniTitleBg,
    textAlign: "left",
    marginTop: 5,
  },
  mainNemBtn: {
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
    width: 109,
    height: 86,
    overflow: "hidden",
    alignItems: "center",
    paddingHorizontal: Padding.p_16xl,
    paddingVertical: 11,
  },
});

export default MainNemBtn;
