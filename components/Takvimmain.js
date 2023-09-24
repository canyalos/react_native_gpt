import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import NainTakvimGriBolum from "./NainTakvimGriBolum";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Takvimmain = () => {
  return (
    <View style={[styles.takvimmain, styles.takvimmainLayout]}>
      <View style={[styles.takvimmainChild, styles.takvimmainLayout]} />
      <View style={[styles.frameParent, styles.takvimmainPosition]}>
        <View style={[styles.frame, styles.frameFlexBox]}>
          <Image
            style={styles.frameIcon}
            resizeMode="cover"
            source={require("../assets/frame2.png")}
          />
          <View style={[styles.frameGroup, styles.frameLayout1]}>
            <View style={[styles.frame1, styles.frameLayout1]}>
              <View>
                <Text style={styles.takvim}>Takvim ;</Text>
                <Text style={styles.tarih3Agustos}>5 Tem - 2022</Text>
              </View>
              <View style={[styles.frameChild, styles.frameLayout]} />
            </View>
            <View style={[styles.frame2, styles.frameSpaceBlock]}>
              <View style={styles.frameLayout} />
              <View style={[styles.frameInner, styles.frameSpaceBlock]} />
            </View>
          </View>
        </View>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector-53.png")}
        />
      </View>
      <Text style={[styles.saatbes55, styles.saatbes55Typo]}>5:00</Text>
      <NainTakvimGriBolum />
      <Image
        style={[styles.takvimmainItem, styles.takvimmainPosition]}
        resizeMode="cover"
        source={require("../assets/vector-59.png")}
      />
      <Text style={[styles.saatalti6, styles.saatbes55Typo]}>6:00</Text>
      <Image
        style={[styles.takvimmainInner, styles.takvimmainPosition]}
        resizeMode="cover"
        source={require("../assets/vector-60.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  takvimmainLayout: {
    height: 222,
    position: "absolute",
  },
  takvimmainPosition: {
    left: 5,
    position: "absolute",
  },
  frameFlexBox: {
    flexDirection: "row",
    overflow: "hidden",
  },
  frameLayout1: {
    height: 54,
    flexDirection: "row",
  },
  frameLayout: {
    height: 3,
    width: 3,
    borderWidth: 1,
    borderColor: Color.colorGreenyellow,
    borderStyle: "solid",
    backgroundColor: Color.miniTitleBg,
    borderRadius: Border.br_12xs,
  },
  frameSpaceBlock: {
    marginLeft: 2,
    height: 3,
  },
  saatbes55Typo: {
    width: 32,
    textAlign: "right",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.buttons_size,
    color: Color.grey,
    left: 5,
    position: "absolute",
  },
  takvimmainChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_mini,
    backgroundColor: Color.gray_200,
    shadowColor: "rgba(207, 248, 11, 0.25)",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    width: 295,
  },
  frameIcon: {
    width: 9,
    overflow: "hidden",
    height: 73,
  },
  takvim: {
    fontSize: FontSize.size_xl,
    color: Color.miniTitleBg,
    width: 90,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  tarih3Agustos: {
    fontSize: FontSize.bodyBold_size,
    width: 110,
    color: Color.grey,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  frameChild: {
    marginLeft: 139,
  },
  frame1: {
    width: 253,
    overflow: "hidden",
  },
  frameInner: {
    width: 3,
    borderWidth: 1,
    borderColor: Color.colorGreenyellow,
    borderStyle: "solid",
    backgroundColor: Color.miniTitleBg,
    borderRadius: Border.br_12xs,
    marginLeft: 2,
  },
  frame2: {
    width: 8,
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
  },
  frameGroup: {
    width: 254,
  },
  frame: {
    height: 73,
    alignSelf: "stretch",
  },
  vectorIcon: {
    borderRadius: Border.br_12xs_6,
    maxWidth: "100%",
    width: "100%",
    marginTop: 4,
    height: 2,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  frameParent: {
    top: 16,
    width: 284,
    paddingRight: Padding.p_sm,
    alignItems: "center",
  },
  saatbes55: {
    top: 146,
  },
  takvimmainItem: {
    top: 170,
    width: 270,
    height: 1,
  },
  saatalti6: {
    top: 173,
  },
  takvimmainInner: {
    top: 197,
    width: 293,
    height: 2,
  },
  takvimmain: {
    top: 331,
    left: 393,
    width: 298,
  },
});

export default Takvimmain;
