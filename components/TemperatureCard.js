import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const TemperatureCard = () => {
  return (
    <View style={[styles.rectProfilBar, styles.rectFlexBox]}>
      <View style={[styles.rectHavaDurumu, styles.rectFlexBox]}>
        <Image
          style={styles.rectHavaDurumuChild}
          resizeMode="cover"
          source={require("../assets/ellipse-10.png")}
        />
        <View style={styles.havaDereceInfoParent}>
          <View style={styles.havaDereceInfo}>
            <Text style={styles.c}>25 C</Text>
            <Image
              style={styles.havaDereceInfoChild}
              resizeMode="cover"
              source={require("../assets/ellipse-8.png")}
            />
          </View>
          <Text style={styles.gunesli}>Güneşli</Text>
        </View>
      </View>
      <Image
        style={styles.rectBildirimIcon}
        resizeMode="cover"
        source={require("../assets/rect-bildirim-icon.png")}
      />
      <Image
        style={styles.rectProfilImgIcon}
        resizeMode="cover"
        source={require("../assets/rect-profil-img.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  rectHavaDurumuChild: {
    width: 45,
    height: 45,
  },
  c: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_11xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.miniTitleBg,
    height: 41,
    textAlign: "left",
    width: 76,
    position: "absolute",
  },
  havaDereceInfoChild: {
    top: 10,
    left: 38,
    width: 8,
    height: 8,
    position: "absolute",
  },
  havaDereceInfo: {
    width: 76,
    height: 45,
  },
  gunesli: {
    fontSize: FontSize.bodyBold_size,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.darkgray,
    marginTop: -8,
    textAlign: "left",
  },
  havaDereceInfoParent: {
    marginLeft: 17,
    alignItems: "center",
  },
  rectHavaDurumu: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  rectBildirimIcon: {
    width: 22,
    height: 26,
    marginLeft: 40,
  },
  rectProfilImgIcon: {
    width: 60,
    height: 60,
    marginLeft: 40,
  },
  rectProfilBar: {
    top: 13,
    left: 865,
    width: 425,
    justifyContent: "flex-end",
    paddingRight: Padding.p_8xl,
    alignItems: "center",
    position: "absolute",
  },
});

export default TemperatureCard;
