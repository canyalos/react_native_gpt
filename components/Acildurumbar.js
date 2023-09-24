import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Acildurumtoogle from "./Acildurumtoogle";
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const Acildurumbar = () => {
  return (
    <View style={[styles.rectAcildurum, styles.frame1FlexBox]}>
      <View style={[styles.frame, styles.frameLayout]}>
        <View style={styles.vectorParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/vector-49.png")}
          />
          <Text style={[styles.text, styles.textPosition]}>!</Text>
        </View>
      </View>
      <View style={[styles.frame1, styles.frame1FlexBox]}>
        <View>
          <Text style={[styles.acilDurum, styles.textTypo]}>Acil Durum</Text>
          <Text style={styles.sadeceAcilDurumKul}>
            Sadece Acil Durumda Kullanın
          </Text>
        </View>
        <View style={styles.acildurumToogleBtn}>
          <Acildurumtoogle />
          <Image
            style={[styles.acildurumToogleBtnChild, styles.textPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-25.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame1FlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameLayout: {
    height: 79,
    width: 540,
    borderRadius: Border.br_xs,
  },
  textPosition: {
    zIndex: 1,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  frameChild: {
    borderRadius: 1,
    width: 19,
    height: 24,
    zIndex: 0,
  },
  text: {
    top: 14,
    left: 24,
    color: Color.gray_200,
    width: 5,
    height: 18,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.buttons_size,
  },
  vectorParent: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.gray_100,
    paddingHorizontal: Padding.p_mid,
    paddingVertical: Padding.p_2xs,
    flexDirection: "row",
  },
  frame: {
    backgroundColor: Color.gray_200,
    padding: Padding.p_base,
    overflow: "hidden",
  },
  acilDurum: {
    fontSize: FontSize.size_xl,
    color: Color.miniTitleBg,
    textAlign: "left",
  },
  sadeceAcilDurumKul: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.grey,
    width: 214,
    height: 19,
    marginTop: 2,
    textAlign: "left",
    fontSize: FontSize.buttons_size,
  },
  acildurumToogleBtnChild: {
    top: 4,
    left: 4,
    width: 21,
    height: 21,
  },
  acildurumToogleBtn: {
    borderRadius: Border.br_base,
  },
  frame1: {
    width: 441,
    justifyContent: "space-between",
    marginLeft: -457,
    overflow: "hidden",
  },
  rectAcildurum: {
    top: 98,
    left: 717,
    justifyContent: "flex-end",
    height: 79,
    width: 540,
    borderRadius: Border.br_xs,
    position: "absolute",
    alignItems: "center",
  },
});

export default Acildurumbar;
