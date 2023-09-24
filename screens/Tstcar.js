import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Speedometre from "../components/Speedometre";
import ResimMedia from "../components/ResimMedia";
import Songisim from "../components/Songisim";
import Sanatciisim from "../components/Sanatciisim";
import Mediabar from "../components/Mediabar";
import Mediaplayer from "../components/Mediaplayer";
import Altmenu from "../components/Altmenu";
import Yakitdurumu from "../components/Yakitdurumu";
import Voltajdurumu from "../components/Voltajdurumu";
import KornagrpBtn from "../components/KornagrpBtn";
import FarGrpBtn from "../components/FarGrpBtn";
import BagajGrpBtn from "../components/BagajGrpBtn";
import CamDoorHepsi from "../components/CamDoorHepsi";
import Takvimmain from "../components/Takvimmain";
import Klimamain from "../components/Klimamain";
import Acildurumbar from "../components/Acildurumbar";
import Alarmbtn from "../components/Alarmbtn";
import Tstgptbtn from "../components/Tstgptbtn";
import Startcarbtn from "../components/Startcarbtn";
import Stopcarbtn from "../components/Stopcarbtn";
import Keyaccbtn from "../components/Keyaccbtn";
import Keyonbtn from "../components/Keyonbtn";
import Navibar from "../components/Navibar";
import TemperatureCard from "../components/TemperatureCard";
import Aramabar from "../components/Aramabar";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Tstcar = () => {
  return (
    <View style={styles.tstcar}>
      <Speedometre />
      <View style={styles.frameParent}>
        <View>
          <View style={styles.frameChild} />
          <View style={styles.frameWrapper}>
            <View
              style={[styles.frameContainer, styles.frameContainerPosition]}
            >
              <View
                style={[styles.rectangleGroup, styles.frameContainerPosition]}
              >
                <ResimMedia />
                <View style={styles.frameGroup}>
                  <View style={styles.loveMeLikeYouDoParent}>
                    <Songisim />
                    <Sanatciisim />
                  </View>
                  <View style={styles.groupParent}>
                    <Mediabar />
                    <Mediaplayer />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Altmenu />
      </View>
      <Yakitdurumu />
      <Voltajdurumu />
      <KornagrpBtn />
      <FarGrpBtn />
      <BagajGrpBtn />
      <View style={styles.arabamain}>
        <Image
          style={styles.arabamainChild}
          resizeMode="cover"
          source={require("../assets/ellipse-37.png")}
        />
        <Image
          style={styles.arabamainItem}
          resizeMode="cover"
          source={require("../assets/frame-190.png")}
        />
        <CamDoorHepsi />
      </View>
      <Takvimmain />
      <Klimamain />
      <Acildurumbar />
      <View style={[styles.alarmbtnParent, styles.parentFlexBox]}>
        <Alarmbtn />
        <Tstgptbtn />
      </View>
      <Text style={styles.tarstekGvenlikVe}>Tarstek Güvenlik ve GPT ;</Text>
      <View style={[styles.startcarbtnParent, styles.parentFlexBox]}>
        <Startcarbtn />
        <Stopcarbtn />
      </View>
      <Text style={[styles.otomatikAltrma, styles.altrmaTypo]}>
        Otomatik Çalıştırma ;
      </Text>
      <View style={[styles.keyaccbtnParent, styles.parentFlexBox]}>
        <Keyaccbtn />
        <Keyonbtn />
      </View>
      <Text style={[styles.manuelAltrma, styles.altrmaTypo]}>
        Manuel Çalıştırma ;
      </Text>
      <Navibar />
      <TemperatureCard />
      <Aramabar />
      <Image
        style={styles.logooo1Icon}
        resizeMode="cover"
        source={require("../assets/logooo-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameContainerPosition: {
    top: 0,
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "space-between",
    width: 260,
    alignItems: "center",
    flexDirection: "row",
    left: 113,
    position: "absolute",
  },
  altrmaTypo: {
    height: 30,
    width: 268,
    textAlign: "left",
    color: Color.miniTitleBg,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyBold_size,
    left: 105,
    position: "absolute",
  },
  frameChild: {
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
    width: 584,
    height: 110,
    zIndex: 0,
  },
  loveMeLikeYouDoParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  groupParent: {
    width: 305,
    height: 61,
    marginTop: 4,
  },
  frameGroup: {
    alignItems: "center",
  },
  rectangleGroup: {
    left: -120,
    flexDirection: "row",
  },
  frameContainer: {
    left: 146,
    width: 354,
    height: 94,
  },
  frameWrapper: {
    top: 8,
    left: 40,
    width: 500,
    zIndex: 1,
    height: 94,
    position: "absolute",
  },
  frameParent: {
    top: 566,
    alignItems: "flex-end",
    left: 113,
    position: "absolute",
  },
  arabamainChild: {
    top: -41,
    left: -41,
    width: 607,
    height: 212,
    position: "absolute",
  },
  arabamainItem: {
    top: 85,
    left: 8,
    width: 543,
    height: 129,
    position: "absolute",
  },
  arabamain: {
    top: 210,
    left: 714,
    width: 551,
    height: 214,
    position: "absolute",
  },
  alarmbtnParent: {
    top: 429,
    bottom: 259,
  },
  tarstekGvenlikVe: {
    top: 398,
    width: 268,
    textAlign: "left",
    color: Color.miniTitleBg,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyBold_size,
    left: 105,
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  startcarbtnParent: {
    top: 279,
    bottom: 409,
  },
  otomatikAltrma: {
    top: 242,
  },
  keyaccbtnParent: {
    top: 123,
    bottom: 565,
  },
  manuelAltrma: {
    top: 86,
    display: "flex",
    height: 30,
    alignItems: "center",
  },
  logooo1Icon: {
    top: 11,
    left: 23,
    width: 133,
    height: 63,
    position: "absolute",
  },
  tstcar: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.gray_300,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Tstcar;
