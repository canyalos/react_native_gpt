import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Dissicaklik from "./Dissicaklik";
import Icsicaklik from "./Icsicaklik";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Klimamain = () => {
  return (
    <View style={[styles.klimamain, styles.klimamainLayout]}>
      <View style={[styles.klimamainChild, styles.cPosition]} />
      <View style={styles.frameParent}>
        <View style={[styles.frameGroup, styles.frameFlexBox]}>
          <View>
            <Text style={[styles.araIScaklk, styles.araIScaklkTypo]}>
              Araç İçi Sıcaklık ;
            </Text>
            <Dissicaklik />
            <Icsicaklik />
            <Text style={[styles.pencerelerKapali, styles.araIScaklkTypo]}>
              PENCERELER KAPALI
            </Text>
          </View>
          <Image
            style={styles.iklimIcon}
            resizeMode="cover"
            source={require("../assets/iklim-icon.png")}
          />
        </View>
        <View style={styles.frameContainer}>
          <View style={styles.cParent}>
            <Text style={[styles.c, styles.cTypo]}>10 C</Text>
            <Image
              style={[styles.frameChild, styles.frameItemLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-45.png")}
            />
            <Text style={[styles.c1, styles.cTypo]}>40 C</Text>
            <Image
              style={[styles.frameItem, styles.frameItemLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-46.png")}
            />
          </View>
          <View style={styles.groupWrapper}>
            <View style={styles.klimaAyarBarParent}>
              <Image
                style={styles.klimaAyarBarIcon}
                resizeMode="cover"
                source={require("../assets/klima-ayar-bar.png")}
              />
              <View style={[styles.frameWrapper, styles.frameFlexBox]}>
                <View style={styles.frameFlexBox}>
                  <Image
                    style={styles.frameInner}
                    resizeMode="cover"
                    source={require("../assets/vector-100.png")}
                  />
                  <Image
                    style={styles.ellipseIcon}
                    resizeMode="cover"
                    source={require("../assets/ellipse-47.png")}
                  />
                  <Image
                    style={styles.vectorIcon}
                    resizeMode="cover"
                    source={require("../assets/vector6.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.klimamainItem, styles.frameItemLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-45.png")}
      />
      <Image
        style={styles.klimamainInner}
        resizeMode="cover"
        source={require("../assets/ellipse-43.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  klimamainLayout: {
    height: 222,
    width: 296,
    position: "absolute",
  },
  cPosition: {
    left: 0,
    top: 0,
  },
  frameFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  araIScaklkTypo: {
    textAlign: "left",
    color: Color.miniTitleBg,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  cTypo: {
    color: Color.grey,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  frameItemLayout: {
    width: 4,
    height: 4,
    position: "absolute",
  },
  klimamainChild: {
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
    height: 222,
    width: 296,
    position: "absolute",
  },
  araIScaklk: {
    fontSize: FontSize.size_lg,
  },
  pencerelerKapali: {
    fontSize: FontSize.bodyBold_size,
    width: 167,
    marginTop: 5,
  },
  iklimIcon: {
    width: 46,
    height: 54,
    marginLeft: 36,
  },
  frameGroup: {
    alignSelf: "stretch",
  },
  c: {
    left: 0,
    top: 0,
  },
  frameChild: {
    left: 15,
    height: 4,
    top: 7,
  },
  c1: {
    top: 5,
    left: 241,
    display: "flex",
    width: 39,
    height: 16,
    alignItems: "center",
  },
  frameItem: {
    top: 8,
    left: 262,
    height: 4,
  },
  cParent: {
    height: 23,
    alignSelf: "stretch",
  },
  klimaAyarBarIcon: {
    left: 17,
    width: 266,
    height: 18,
    top: 7,
    position: "absolute",
  },
  frameInner: {
    width: 116,
    zIndex: 0,
    height: 4,
  },
  ellipseIcon: {
    width: 30,
    zIndex: 1,
    height: 30,
  },
  vectorIcon: {
    height: "48.12%",
    width: "10.12%",
    top: "33.14%",
    right: "5.02%",
    bottom: "18.74%",
    left: "84.86%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    zIndex: 2,
    position: "absolute",
  },
  frameWrapper: {
    width: 288,
    left: 0,
    top: 0,
    position: "absolute",
  },
  klimaAyarBarParent: {
    height: 30,
    width: 288,
  },
  groupWrapper: {
    marginTop: 4,
  },
  frameContainer: {
    marginTop: 1,
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameParent: {
    top: 6,
    left: 4,
    paddingLeft: Padding.p_xs,
    alignItems: "center",
    width: 288,
    position: "absolute",
  },
  klimamainItem: {
    top: 50,
    left: 108,
    display: "none",
    height: 4,
  },
  klimamainInner: {
    top: 74,
    left: 70,
    width: 13,
    height: 13,
    position: "absolute",
  },
  klimamain: {
    top: 93,
    left: 392,
  },
});

export default Klimamain;
