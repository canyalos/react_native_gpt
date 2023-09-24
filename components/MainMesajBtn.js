import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const MainMesajBtn = () => {
  return (
    <View style={styles.mainMesajBtn}>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <Text style={styles.mesaj}>Mesaj</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 31,
    height: 32,
  },
  mesaj: {
    fontSize: FontSize.bodyBold_size,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.miniTitleBg,
    textAlign: "left",
    marginTop: 4,
  },
  mainMesajBtn: {
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
    alignItems: "center",
    paddingHorizontal: Padding.p_11xl_5,
    paddingVertical: 13,
    marginLeft: 10,
  },
});

export default MainMesajBtn;
