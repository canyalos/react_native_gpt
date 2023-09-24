import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const MainRuzgarBtn = () => {
  return (
    <View style={[styles.mainRuzgarBtn, styles.ruzgarFlexBox]}>
      <View style={styles.ruzgarFlexBox}>
        <Image
          style={styles.ruzgarIcon}
          resizeMode="cover"
          source={require("../assets/ruzgar-icon.png")}
        />
        <Text style={styles.ruzgar}>Rüzgar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ruzgarFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  ruzgarIcon: {
    width: 30,
    height: 30,
  },
  ruzgar: {
    fontSize: FontSize.bodyBold_size,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.miniTitleBg,
    textAlign: "left",
    marginTop: 5,
  },
  mainRuzgarBtn: {
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
    marginLeft: 10,
  },
});

export default MainRuzgarBtn;
