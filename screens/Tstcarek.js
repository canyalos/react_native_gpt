import * as React from "react";
import { Image, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border } from "../GlobalStyles";

const Tstcarek = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tstcarek}>
      <Image
        style={styles.robotKafaIcon}
        resizeMode="cover"
        source={require("../assets/robotkafa.png")}
      />
      <View style={styles.tstcarekChild} />
      <Image
        style={styles.logooo1Icon}
        resizeMode="cover"
        source={require("../assets/logooo-11.png")}
      />
      <View style={[styles.tstcarekItem, styles.tstcarekChildLayout9]} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector14.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector14.png")}
      />
      <View style={[styles.tstcarekInner, styles.tstcarekChildLayout8]} />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <View style={styles.frameParent}>
        <View style={styles.vectorParent}>
          <Image
            style={styles.vectorIcon2}
            resizeMode="cover"
            source={require("../assets/vector15.png")}
          />
          <Image
            style={[styles.frameChild, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/group-126.png")}
          />
        </View>
        <View style={styles.vectorGroup}>
          <Image
            style={styles.vectorIcon3}
            resizeMode="cover"
            source={require("../assets/vector16.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/group-125.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleView, styles.tstcarekChildLayout7]} />
      <Image
        style={styles.aracKameraIcon}
        resizeMode="cover"
        source={require("../assets/arac-kamera-icon.png")}
      />
      <Image
        style={[styles.ellipse10Stroke, styles.ellipse10Position]}
        resizeMode="cover"
        source={require("../assets/ellipse-10-stroke.png")}
      />
      <Image
        style={[styles.tstcarekChild1, styles.tstcarekChildPosition2]}
        resizeMode="cover"
        source={require("../assets/ellipse-111.png")}
      />
      <Image
        style={styles.elFreniIcon}
        resizeMode="cover"
        source={require("../assets/el-freni-icon.png")}
      />
      <Image
        style={[styles.ellipse10Stroke1, styles.ellipse10Layout6]}
        resizeMode="cover"
        source={require("../assets/ellipse-10-stroke.png")}
      />
      <Image
        style={[styles.tstcarekChild2, styles.tstcarekChildLayout6]}
        resizeMode="cover"
        source={require("../assets/ellipse-111.png")}
      />
      <View style={[styles.tstcarekChild3, styles.tstcarekChildShadowBox1]} />
      <Image
        style={[styles.shapeIcon, styles.shapeIconLayout]}
        resizeMode="cover"
        source={require("../assets/shape3.png")}
      />
      <Image
        style={[styles.ellipse10Stroke2, styles.ellipse10Layout5]}
        resizeMode="cover"
        source={require("../assets/ellipse-10-stroke1.png")}
      />
      <Image
        style={[styles.tstcarekChild4, styles.tstcarekChildLayout5]}
        resizeMode="cover"
        source={require("../assets/ellipse-112.png")}
      />
      <Image
        style={[styles.shapeIcon1, styles.shapeIcon1Position]}
        resizeMode="cover"
        source={require("../assets/shape4.png")}
      />
      <Image
        style={[styles.ellipse10Stroke3, styles.ellipse10Layout5]}
        resizeMode="cover"
        source={require("../assets/ellipse-10-stroke2.png")}
      />
      <Image
        style={[styles.tstcarekChild5, styles.tstcarekChildLayout5]}
        resizeMode="cover"
        source={require("../assets/ellipse-113.png")}
      />
      <View style={[styles.tstcarekChild6, styles.tstcarekChildShadowBox1]} />
      <Image
        style={[styles.shapeIcon2, styles.shapeIconPosition]}
        resizeMode="cover"
        source={require("../assets/shape5.png")}
      />
      <Image
        style={[styles.ellipse10Stroke4, styles.ellipse10Layout4]}
        resizeMode="cover"
        source={require("../assets/ellipse-10-stroke3.png")}
      />
      <Image
        style={[styles.tstcarekChild7, styles.tstcarekChildLayout4]}
        resizeMode="cover"
        source={require("../assets/ellipse-114.png")}
      />
      <Image
        style={[styles.shapeIcon3, styles.shapeIconPosition]}
        resizeMode="cover"
        source={require("../assets/shape6.png")}
      />
      <Image
        style={[styles.ellipse10Stroke5, styles.ellipse10Layout4]}
        resizeMode="cover"
        source={require("../assets/ellipse-10-stroke4.png")}
      />
      <Image
        style={[styles.tstcarekChild8, styles.tstcarekChildLayout4]}
        resizeMode="cover"
        source={require("../assets/ellipse-115.png")}
      />
      <View style={[styles.tstcarekChild9, styles.tstcarekChildShadowBox1]} />
      <Image
        style={styles.ecoModeIcon}
        resizeMode="cover"
        source={require("../assets/eco-mode-icon.png")}
      />
      <Image
        style={[styles.ellipse10Stroke6, styles.ellipse10Layout3]}
        resizeMode="cover"
        source={require("../assets/ellipse-10-stroke.png")}
      />
      <Image
        style={[styles.tstcarekChild10, styles.tstcarekChildLayout3]}
        resizeMode="cover"
        source={require("../assets/ellipse-111.png")}
      />
      <Image
        style={[styles.yolTakipIcon, styles.shapeIconPosition]}
        resizeMode="cover"
        source={require("../assets/yol-takip-icon.png")}
      />
      <Image
        style={[styles.ellipse10Stroke7, styles.ellipse10Layout3]}
        resizeMode="cover"
        source={require("../assets/ellipse-10-stroke5.png")}
      />
      <Image
        style={[styles.tstcarekChild11, styles.tstcarekChildLayout3]}
        resizeMode="cover"
        source={require("../assets/ellipse-116.png")}
      />
      <View style={[styles.tstcarekChild12, styles.tstcarekChildShadowBox]} />
      <Image
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame-355.png")}
      />
      <Image
        style={styles.tstcarekChild13}
        resizeMode="cover"
        source={require("../assets/frame-354.png")}
      />
      <Image
        style={[styles.ellipse10Stroke8, styles.ellipse10Layout2]}
        resizeMode="cover"
        source={require("../assets/ellipse-10-stroke.png")}
      />
      <Image
        style={[styles.tstcarekChild14, styles.tstcarekChildLayout2]}
        resizeMode="cover"
        source={require("../assets/ellipse-117.png")}
      />
      <Image
        style={[styles.ellipse10Stroke9, styles.ellipse10Layout2]}
        resizeMode="cover"
        source={require("../assets/ellipse-10-stroke.png")}
      />
      <Image
        style={[styles.tstcarekChild15, styles.tstcarekChildLayout2]}
        resizeMode="cover"
        source={require("../assets/ellipse-117.png")}
      />
      <Image
        style={[styles.ellipse10Stroke10, styles.ellipse10Layout2]}
        resizeMode="cover"
        source={require("../assets/ellipse-10-stroke.png")}
      />
      <Image
        style={[styles.tstcarekChild16, styles.tstcarekChildLayout2]}
        resizeMode="cover"
        source={require("../assets/ellipse-117.png")}
      />
      <Image
        style={[styles.ellipse10Stroke11, styles.ellipse10Layout2]}
        resizeMode="cover"
        source={require("../assets/ellipse-10-stroke.png")}
      />
      <Image
        style={[styles.tstcarekChild17, styles.tstcarekChildLayout2]}
        resizeMode="cover"
        source={require("../assets/ellipse-117.png")}
      />
      <Image
        style={[styles.ellipse10Stroke12, styles.ellipse10Layout2]}
        resizeMode="cover"
        source={require("../assets/ellipse-10-stroke.png")}
      />
      <Image
        style={[styles.tstcarekChild18, styles.tstcarekChildLayout2]}
        resizeMode="cover"
        source={require("../assets/ellipse-117.png")}
      />
      <Image
        style={[styles.ellipse10Stroke13, styles.ellipse10Layout2]}
        resizeMode="cover"
        source={require("../assets/ellipse-10-stroke.png")}
      />
      <Image
        style={[styles.tstcarekChild19, styles.tstcarekChildLayout2]}
        resizeMode="cover"
        source={require("../assets/ellipse-117.png")}
      />
      <View style={[styles.tstcarekChild20, styles.tstcarekChildShadowBox]} />
      <Image
        style={styles.camSilecekIcon}
        resizeMode="cover"
        source={require("../assets/cam-silecek-icon.png")}
      />
      <Image
        style={[styles.ellipse10Stroke14, styles.ellipse10Layout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-10-stroke6.png")}
      />
      <Image
        style={[styles.tstcarekChild21, styles.tstcarekChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-118.png")}
      />
      <Image
        style={styles.parkAssistIcon}
        resizeMode="cover"
        source={require("../assets/park-assist-icon.png")}
      />
      <Image
        style={[styles.ellipse10Stroke15, styles.ellipse10Layout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-10-stroke7.png")}
      />
      <Image
        style={[styles.tstcarekChild22, styles.tstcarekChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-119.png")}
      />
      <View style={[styles.tstcarekChild23, styles.tstcarekChildShadowBox]} />
      <Image
        style={styles.vectorIcon4}
        resizeMode="cover"
        source={require("../assets/vector17.png")}
      />
      <Image
        style={[styles.ellipse10Stroke16, styles.ellipse10Layout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-10-stroke8.png")}
      />
      <Image
        style={[styles.tstcarekChild24, styles.tstcarekChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-1110.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector18.png")}
      />
      <Image
        style={[styles.ellipse10Stroke17, styles.ellipse10Layout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-10-stroke9.png")}
      />
      <Image
        style={[styles.tstcarekChild25, styles.tstcarekChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-1111.png")}
      />
      <View style={styles.mHomeBtnParent}>
        <View style={[styles.mHomeBtn, styles.btnPosition]}>
          <Image
            style={styles.homeBtnYvIcon}
            resizeMode="cover"
            source={require("../assets/home-btn-yv1.png")}
          />
          <Image
            style={[styles.vectorIcon6, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/vector19.png")}
          />
        </View>
        <Pressable
          style={[styles.mOzelliklerBtn, styles.btnPosition]}
          onPress={() => navigation.navigate("Tstcarek")}
        >
          <Image
            style={styles.homeBtnYvIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-31.png")}
          />
          <Image
            style={[styles.shapeIcon4, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/shape2.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.mTelefonBtn, styles.btnPosition]}
          onPress={() => navigation.navigate("Telefon")}
        >
          <Image
            style={styles.homeBtnYvIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-31.png")}
          />
          <Image
            style={[styles.vectorIcon6, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/stroke11.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.mMediaBtn, styles.btnPosition]}
          onPress={() => navigation.navigate("Media")}
        >
          <Image
            style={styles.homeBtnYvIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-31.png")}
          />
          <Image
            style={[styles.vectorIcon6, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/vector20.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.mKameraBtn, styles.btnPosition]}
          onPress={() => navigation.navigate("Kamera")}
        >
          <Image
            style={styles.homeBtnYvIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-31.png")}
          />
          <Image
            style={[styles.vectorIcon8, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/vector21.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.mAyarlarBtn, styles.btnPosition]}
          onPress={() => navigation.navigate("Ayarlar")}
        >
          <Image
            style={styles.homeBtnYvIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-31.png")}
          />
          <Image
            style={[styles.vectorIcon6, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/vector22.png")}
          />
        </Pressable>
      </View>
      <Image
        style={[styles.ellipse10Stroke18, styles.ellipse10Layout]}
        resizeMode="cover"
        source={require("../assets/ellipse-10-stroke.png")}
      />
      <Image
        style={[styles.tstcarekChild26, styles.tstcarekChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-117.png")}
      />
      <Image
        style={[styles.ellipse10Stroke19, styles.ellipse10Layout]}
        resizeMode="cover"
        source={require("../assets/ellipse-10-stroke.png")}
      />
      <Image
        style={[styles.tstcarekChild27, styles.tstcarekChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-117.png")}
      />
      <Image
        style={[styles.ellipse10Stroke20, styles.ellipse10Layout]}
        resizeMode="cover"
        source={require("../assets/ellipse-10-stroke10.png")}
      />
      <Image
        style={[styles.tstcarekChild28, styles.tstcarekChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-117.png")}
      />
      <Image
        style={[styles.tstcarekChild29, styles.shapeIcon1Position]}
        resizeMode="cover"
        source={require("../assets/frame-359.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tstcarekChildLayout9: {
    height: 160,
    width: 310,
    left: 192,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  tstcarekChildLayout8: {
    height: 161,
    width: 311,
    left: 534,
  },
  frameLayout: {
    width: 30,
    height: 30,
  },
  tstcarekChildLayout7: {
    left: 877,
    height: 161,
    width: 311,
  },
  ellipse10Position: {
    left: "73.83%",
    right: "23.83%",
  },
  tstcarekChildPosition2: {
    left: "74.3%",
    right: "24.3%",
  },
  ellipse10Layout6: {
    bottom: "58.25%",
    top: "38%",
    width: "2.34%",
    height: "3.75%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  tstcarekChildLayout6: {
    bottom: "59%",
    top: "38.75%",
    width: "1.41%",
    height: "2.25%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  tstcarekChildShadowBox1: {
    shadowColor: "rgba(255, 10, 194, 0.75)",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    backgroundColor: Color.gray_200,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  shapeIconLayout: {
    width: 93,
    top: 421,
    height: 70,
  },
  ellipse10Layout5: {
    bottom: "33.06%",
    top: "63.19%",
    width: "2.34%",
    height: "3.75%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  tstcarekChildLayout5: {
    bottom: "33.81%",
    top: "63.94%",
    width: "1.41%",
    height: "2.25%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  shapeIcon1Position: {
    left: 371,
    position: "absolute",
  },
  shapeIconPosition: {
    top: 415,
    position: "absolute",
  },
  ellipse10Layout4: {
    bottom: "32.75%",
    top: "63.5%",
    width: "2.34%",
    height: "3.75%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  tstcarekChildLayout4: {
    bottom: "33.5%",
    top: "64.25%",
    width: "1.41%",
    height: "2.25%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  ellipse10Layout3: {
    bottom: "32.88%",
    top: "63.38%",
    width: "2.34%",
    height: "3.75%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  tstcarekChildLayout3: {
    bottom: "33.63%",
    top: "64.13%",
    width: "1.41%",
    height: "2.25%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  tstcarekChildShadowBox: {
    shadowColor: "rgba(207, 248, 11, 0.5)",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    backgroundColor: Color.gray_200,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  ellipse10Layout2: {
    bottom: "7.75%",
    top: "88.5%",
    width: "2.34%",
    height: "3.75%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  tstcarekChildLayout2: {
    bottom: "8.5%",
    top: "89.25%",
    width: "1.41%",
    height: "2.25%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  ellipse10Layout1: {
    bottom: "7.63%",
    top: "88.63%",
    width: "2.34%",
    height: "3.75%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  tstcarekChildLayout1: {
    bottom: "8.38%",
    top: "89.38%",
    width: "1.41%",
    height: "2.25%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  btnPosition: {
    left: 0,
    height: 80,
    width: 80,
    flexDirection: "row",
    position: "absolute",
  },
  iconPosition: {
    zIndex: 1,
    left: 28,
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  ellipse10Layout: {
    bottom: "58.38%",
    top: "37.88%",
    width: "2.34%",
    height: "3.75%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  tstcarekChildLayout: {
    bottom: "59.13%",
    top: "38.63%",
    width: "1.41%",
    height: "2.25%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  robotKafaIcon: {
    top: 32,
    left: 1121,
    width: 140,
    height: 140,
    position: "absolute",
  },
  tstcarekChild: {
    top: 113,
    left: 228,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_100,
    borderTopWidth: 2,
    width: 852,
    height: 2,
    position: "absolute",
  },
  logooo1Icon: {
    top: 25,
    left: 40,
    width: 158,
    height: 74,
    position: "absolute",
  },
  tstcarekItem: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowColor: "rgba(76, 201, 240, 0.75)",
    backgroundColor: Color.gray_200,
    borderRadius: Border.br_mini,
    position: "absolute",
    top: 187,
  },
  vectorIcon: {
    top: "25.63%",
    right: "75.96%",
    bottom: "64.13%",
    left: "17.99%",
    width: "6.05%",
    height: "10.25%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  vectorIcon1: {
    top: "25.75%",
    right: "63.69%",
    bottom: "64%",
    left: "30.26%",
    width: "6.05%",
    height: "10.25%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  tstcarekInner: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowColor: "rgba(76, 201, 240, 0.75)",
    backgroundColor: Color.gray_200,
    borderRadius: Border.br_mini,
    position: "absolute",
    top: 187,
  },
  ellipseIcon: {
    top: "38.44%",
    right: "50.63%",
    bottom: "59.31%",
    left: "47.96%",
    width: "1.41%",
    height: "2.25%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon2: {
    width: 68,
    height: 77,
  },
  frameChild: {
    marginTop: 18,
    height: 30,
  },
  vectorParent: {
    alignItems: "center",
  },
  vectorIcon3: {
    width: 78,
    height: 70,
  },
  frameItem: {
    marginTop: 25,
    height: 30,
  },
  vectorGroup: {
    marginLeft: 67,
    alignItems: "center",
  },
  frameParent: {
    top: 206,
    left: 589,
    flexDirection: "row",
    position: "absolute",
  },
  rectangleView: {
    top: 188,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowColor: "rgba(76, 201, 240, 0.75)",
    backgroundColor: Color.gray_200,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  aracKameraIcon: {
    top: 208,
    left: 916,
    width: 88,
    height: 70,
    position: "absolute",
  },
  ellipse10Stroke: {
    bottom: "58.25%",
    top: "38%",
    width: "2.34%",
    height: "3.75%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  tstcarekChild1: {
    bottom: "59%",
    top: "38.75%",
    width: "1.41%",
    height: "2.25%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  elFreniIcon: {
    top: 209,
    left: 1065,
    height: 71,
    width: 82,
    position: "absolute",
  },
  ellipse10Stroke1: {
    right: "12.42%",
    left: "85.23%",
  },
  tstcarekChild2: {
    right: "12.89%",
    left: "85.7%",
  },
  tstcarekChild3: {
    top: 390,
    shadowColor: "rgba(255, 10, 194, 0.75)",
    height: 160,
    width: 310,
    left: 192,
  },
  shapeIcon: {
    left: 225,
    position: "absolute",
  },
  ellipse10Stroke2: {
    right: "77.6%",
    left: "20.05%",
  },
  tstcarekChild4: {
    right: "78.07%",
    left: "20.52%",
  },
  shapeIcon1: {
    width: 93,
    top: 421,
    height: 70,
  },
  ellipse10Stroke3: {
    right: "66.2%",
    left: "31.46%",
  },
  tstcarekChild5: {
    right: "66.67%",
    left: "31.93%",
  },
  tstcarekChild6: {
    top: 390,
    shadowColor: "rgba(255, 10, 194, 0.75)",
    height: 161,
    width: 311,
    left: 534,
  },
  shapeIcon2: {
    left: 573,
    width: 82,
    height: 70,
  },
  ellipse10Stroke4: {
    right: "50.85%",
    left: "46.81%",
  },
  tstcarekChild7: {
    right: "51.31%",
    left: "47.28%",
  },
  shapeIcon3: {
    left: 731,
    width: 82,
    height: 70,
  },
  ellipse10Stroke5: {
    right: "38.47%",
    left: "59.18%",
  },
  tstcarekChild8: {
    right: "38.94%",
    left: "59.65%",
  },
  tstcarekChild9: {
    top: 391,
    left: 877,
    height: 161,
    width: 311,
  },
  ecoModeIcon: {
    top: 426,
    width: 100,
    height: 53,
    left: 910,
    position: "absolute",
  },
  ellipse10Stroke6: {
    left: "73.83%",
    right: "23.83%",
  },
  tstcarekChild10: {
    left: "74.3%",
    right: "24.3%",
  },
  yolTakipIcon: {
    left: 1046,
    width: 119,
    height: 64,
  },
  ellipse10Stroke7: {
    right: "12.46%",
    left: "85.2%",
  },
  tstcarekChild11: {
    right: "12.93%",
    left: "85.66%",
  },
  tstcarekChild12: {
    top: 593,
    shadowColor: "rgba(207, 248, 11, 0.5)",
    height: 160,
    width: 310,
    left: 192,
  },
  frameIcon: {
    top: 661,
    left: 226,
    width: 32,
    height: 32,
    position: "absolute",
  },
  tstcarekChild13: {
    left: 391,
    height: 80,
    width: 80,
    top: 613,
    position: "absolute",
  },
  ellipse10Stroke8: {
    right: "79.77%",
    left: "17.89%",
  },
  tstcarekChild14: {
    right: "80.23%",
    left: "18.36%",
  },
  ellipse10Stroke9: {
    right: "76.64%",
    left: "21.02%",
  },
  tstcarekChild15: {
    right: "77.11%",
    left: "21.48%",
  },
  ellipse10Stroke10: {
    right: "73.52%",
    left: "24.14%",
  },
  tstcarekChild16: {
    right: "73.98%",
    left: "24.61%",
  },
  ellipse10Stroke11: {
    right: "70.47%",
    left: "27.19%",
  },
  tstcarekChild17: {
    right: "70.94%",
    left: "27.66%",
  },
  ellipse10Stroke12: {
    right: "67.34%",
    left: "30.31%",
  },
  tstcarekChild18: {
    right: "67.81%",
    left: "30.78%",
  },
  ellipse10Stroke13: {
    right: "64.22%",
    left: "33.44%",
  },
  tstcarekChild19: {
    right: "64.69%",
    left: "33.91%",
  },
  tstcarekChild20: {
    top: 593,
    shadowColor: "rgba(207, 248, 11, 0.5)",
    height: 161,
    width: 311,
    left: 534,
  },
  camSilecekIcon: {
    top: 616,
    left: 567,
    width: 96,
    height: 70,
    position: "absolute",
  },
  ellipse10Stroke14: {
    right: "50.8%",
    left: "46.86%",
  },
  tstcarekChild21: {
    right: "51.27%",
    left: "47.33%",
  },
  parkAssistIcon: {
    top: 626,
    left: 715,
    width: 94,
    height: 56,
    position: "absolute",
  },
  ellipse10Stroke15: {
    right: "39.3%",
    left: "58.36%",
  },
  tstcarekChild22: {
    right: "39.77%",
    left: "58.83%",
  },
  tstcarekChild23: {
    top: 594,
    left: 877,
    height: 161,
    width: 311,
  },
  vectorIcon4: {
    height: 73,
    top: 613,
    left: 910,
    width: 82,
    position: "absolute",
  },
  ellipse10Stroke16: {
    right: "24.53%",
    left: "73.13%",
  },
  tstcarekChild24: {
    right: "25%",
    left: "73.6%",
  },
  vectorIcon5: {
    height: "9.63%",
    width: "6.34%",
    top: "76.13%",
    right: "11%",
    bottom: "14.25%",
    left: "82.66%",
  },
  ellipse10Stroke17: {
    right: "13%",
    left: "84.66%",
  },
  tstcarekChild25: {
    right: "13.47%",
    left: "85.13%",
  },
  homeBtnYvIcon: {
    width: 90,
    height: 90,
    zIndex: 0,
  },
  vectorIcon6: {
    top: 28,
    bottom: 28,
    right: 28,
    left: 28,
  },
  mHomeBtn: {
    top: 0,
  },
  shapeIcon4: {
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
  vectorIcon8: {
    top: 29,
    bottom: 28,
    right: 28,
    left: 28,
  },
  mKameraBtn: {
    top: 400,
  },
  mAyarlarBtn: {
    top: 500,
  },
  mHomeBtnParent: {
    top: 142,
    left: 16,
    height: 580,
    width: 80,
    position: "absolute",
  },
  ellipse10Stroke18: {
    right: "81.25%",
    left: "16.41%",
  },
  tstcarekChild26: {
    right: "81.72%",
    left: "16.88%",
  },
  ellipse10Stroke19: {
    right: "78.13%",
    left: "19.53%",
  },
  tstcarekChild27: {
    right: "78.59%",
    left: "20%",
  },
  ellipse10Stroke20: {
    right: "75%",
    left: "22.66%",
  },
  tstcarekChild28: {
    right: "75.47%",
    left: "23.13%",
  },
  tstcarekChild29: {
    top: 303,
    width: 110,
    height: 30,
  },
  tstcarek: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.gray_300,
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default Tstcarek;
