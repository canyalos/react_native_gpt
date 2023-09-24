import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const MainBluetBtn = () => {
  return (
    <View style={styles.mainBluetBtn}>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={styles.bluetooth}>Bluetooth</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 18,
    height: 29,
  },
  bluetooth: {
    fontSize: FontSize.bodyBold_size,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.miniTitleBg,
    textAlign: "left",
    marginTop: 5,
  },
  mainBluetBtn: {
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
    justifyContent: "center",
    paddingHorizontal: Padding.p_base_5,
    paddingVertical: 15,
    marginLeft: 10,
  },
});

export default MainBluetBtn;
