import * as React from "react";
import { Image, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border } from "../GlobalStyles";

const Telefon = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.telefon}>
      <Image
        style={styles.blueRobotMascotLogoIconDe}
        resizeMode="cover"
        source={require("../assets/robotkafa.png")}
      />
      <View style={styles.telefonChild} />
      <Image
        style={styles.logooo2Icon}
        resizeMode="cover"
        source={require("../assets/logooo-11.png")}
      />
      <View style={styles.solMenuGrup}>
        <View style={[styles.mHomeBtn, styles.btnLayout]}>
          <Image
            style={styles.homeBtnYvIcon}
            resizeMode="cover"
            source={require("../assets/home-btn-yv1.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/vector19.png")}
          />
        </View>
        <Pressable
          style={[styles.mOzelliklerBtn, styles.btnLayout]}
          onPress={() => navigation.navigate("Tstcarek")}
        >
          <Image
            style={styles.homeBtnYvIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-31.png")}
          />
          <Image
            style={[styles.shapeIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/shape2.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.mTelefonBtn, styles.btnLayout]}
          onPress={() => navigation.navigate("Telefon")}
        >
          <Image
            style={styles.homeBtnYvIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-31.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/stroke11.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.mMediaBtn, styles.btnLayout]}
          onPress={() => navigation.navigate("Media")}
        >
          <Image
            style={styles.homeBtnYvIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-31.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/vector20.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.mKameraBtn, styles.btnLayout]}
          onPress={() => navigation.navigate("Kamera")}
        >
          <Image
            style={styles.homeBtnYvIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-31.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/vector21.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.mAyarlarBtn, styles.btnLayout]}
          onPress={() => navigation.navigate("Ayarlar")}
        >
          <Image
            style={styles.homeBtnYvIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-31.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/vector22.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnLayout: {
    flexDirection: "row",
    height: 80,
    left: 0,
    width: 80,
    position: "absolute",
  },
  iconPosition: {
    zIndex: 1,
    maxHeight: "100%",
    maxWidth: "100%",
    left: 28,
    position: "absolute",
    overflow: "hidden",
  },
  blueRobotMascotLogoIconDe: {
    top: 32,
    left: 1121,
    width: 140,
    height: 140,
    position: "absolute",
  },
  telefonChild: {
    top: 113,
    left: 228,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_100,
    borderTopWidth: 2,
    width: 852,
    height: 2,
    position: "absolute",
  },
  logooo2Icon: {
    top: 25,
    left: 40,
    width: 158,
    height: 74,
    position: "absolute",
  },
  homeBtnYvIcon: {
    width: 90,
    height: 90,
    zIndex: 0,
  },
  vectorIcon: {
    top: 28,
    bottom: 28,
    right: 28,
    maxHeight: "100%",
    maxWidth: "100%",
    left: 28,
  },
  mHomeBtn: {
    top: 0,
  },
  shapeIcon: {
    top: 26,
    right: 27,
    bottom: 26,
  },
  mOzelliklerBtn: {
    top: 100,
  },
  mTelefonBtn: {
    top: 200,
  },
  mMediaBtn: {
    top: 300,
  },
  vectorIcon2: {
    top: 29,
    bottom: 28,
    right: 28,
    maxHeight: "100%",
    maxWidth: "100%",
    left: 28,
  },
  mKameraBtn: {
    top: 400,
  },
  mAyarlarBtn: {
    top: 500,
  },
  solMenuGrup: {
    top: 142,
    left: 16,
    height: 580,
    width: 80,
    position: "absolute",
  },
  telefon: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.gray_300,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Telefon;
