import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Tstgpt = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.tstgpt, styles.tstgptLayout]}>
      <Image
        style={styles.blueRobotMascotLogoIconDe}
        resizeMode="cover"
        source={require("../assets/robotkafa.png")}
      />
      <View style={styles.tstgptChild} />
      <Image
        style={styles.logooo1Icon}
        resizeMode="cover"
        source={require("../assets/logooo-12.png")}
      />
      <Image
        style={styles.tstgptItem}
        resizeMode="cover"
        source={require("../assets/frame-33.png")}
      />
      <View style={[styles.tstGpt, styles.tstgptLayout]}>
        <View
          style={[
            styles.blueRobotMascotLogoIconDeWrapper,
            styles.tstWrapperFlexBox,
          ]}
        >
          <Image
            style={styles.blueRobotMascotLogoIconDe1}
            resizeMode="cover"
            source={require("../assets/bluerobotmascotlogoicondesign-67546755-1-traced-1.png")}
          />
        </View>
        <Image
          style={styles.blueRobotMascotLogoIconDe2}
          resizeMode="cover"
          source={require("../assets/bluerobotmascotlogoicondesign-67546755-1-traced-11.png")}
        />
      </View>
      <View
        style={[styles.merhabaTstGptBugnNaslsParent, styles.tstWrapperFlexBox]}
      >
        <Text style={styles.merhabaTstGpt}>
          Merhaba TsT GPT, Bugün Nasılsın ?
        </Text>
        <Image
          style={styles.vuesaxboldsendIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxboldsend1.png")}
        />
        <Image
          style={styles.vuesaxlinearmicrophone2Icon}
          resizeMode="cover"
          source={require("../assets/vuesaxlinearmicrophone21.png")}
        />
      </View>
      <View style={[styles.tstGptAciklamaWrapper, styles.tstWrapperFlexBox]}>
        <Text
          style={styles.tstGptAciklama}
        >{`TsT GPT İle Dilediğiniz Kadar, Ücretsiz Olarak Yazılı
 Chat Yapabilirsiniz yada TsT Voice Assistant ile
Sesi Konuşarak, Teknolojinin Geldiği Son Noktadan
Sizlerde Yararlanabilirsiniz...`}</Text>
      </View>
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
  tstgptLayout: {
    overflow: "hidden",
    borderRadius: Border.br_21xl,
  },
  tstWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1.962264060974121,
    },
    position: "absolute",
  },
  btnLayout: {
    height: 80,
    left: 0,
    width: 80,
    flexDirection: "row",
    position: "absolute",
  },
  iconPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    zIndex: 1,
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
  tstgptChild: {
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
  tstgptItem: {
    top: 421,
    left: 903,
    width: 377,
    height: 379,
    position: "absolute",
  },
  blueRobotMascotLogoIconDe1: {
    width: 12,
    height: 18,
  },
  blueRobotMascotLogoIconDeWrapper: {
    top: 810,
    borderRadius: 245,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 1.96,
    elevation: 1.96,
    width: 26,
    height: 26,
    left: 28,
    alignItems: "center",
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1.962264060974121,
    },
    backgroundColor: Color.miniTitleBg,
  },
  blueRobotMascotLogoIconDe2: {
    top: 621,
    left: 11,
    width: 24,
    height: 36,
    position: "absolute",
  },
  tstGpt: {
    top: 167,
    left: 160,
    width: 674,
    height: 613,
    backgroundColor: Color.miniTitleBg,
    position: "absolute",
  },
  merhabaTstGpt: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoBold,
    color: Color.blue,
    textAlign: "left",
    zIndex: 0,
    fontWeight: "700",
  },
  vuesaxboldsendIcon: {
    left: 545,
    zIndex: 1,
    height: 32,
    width: 32,
    top: 12,
    position: "absolute",
  },
  vuesaxlinearmicrophone2Icon: {
    left: 501,
    zIndex: 2,
    height: 32,
    width: 32,
    top: 12,
    position: "absolute",
  },
  merhabaTstGptBugnNaslsParent: {
    top: 705,
    left: 198,
    borderRadius: Border.br_11xl,
    shadowColor: "rgba(0, 0, 0, 0.13)",
    shadowRadius: 20,
    elevation: 20,
    width: 600,
    height: 56,
    paddingLeft: 44,
    backgroundColor: Color.miniTitleBg,
  },
  tstGptAciklama: {
    fontSize: FontSize.buttons_size,
    fontFamily: FontFamily.poppinsBold,
    color: Color.miniTitleBg,
    textAlign: "center",
    fontWeight: "700",
  },
  tstGptAciklamaWrapper: {
    top: 198,
    left: 862,
    borderTopLeftRadius: Border.br_6xl,
    borderBottomRightRadius: Border.br_6xl,
    borderBottomLeftRadius: Border.br_6xl,
    backgroundColor: Color.blue,
    shadowColor: "rgba(207, 248, 11, 0.75)",
    shadowRadius: 15,
    elevation: 15,
    width: 378,
    height: 154,
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
    maxWidth: "100%",
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
    maxWidth: "100%",
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
  tstgpt: {
    backgroundColor: Color.gray_300,
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default Tstgpt;
