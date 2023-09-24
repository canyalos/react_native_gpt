import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const Ayarlar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ayarlar}>
      <Image
        style={[styles.ayarlarChild, styles.ayarlarChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={[styles.ayarlarItem, styles.frameChildBorder]} />
      <Image
        style={styles.logooo2Icon}
        resizeMode="cover"
        source={require("../assets/logooo-11.png")}
      />
      <Image
        style={styles.blueRobotMascotLogoIconDe}
        resizeMode="cover"
        source={require("../assets/robotkafa.png")}
      />
      <View style={styles.frameParent}>
        <View style={styles.kullanlabilirWirelessSeeneWrapper}>
          <Text style={[styles.kullanlabilirWirelessSeene, styles.aaKatlTypo]}>
            Kullanılabilir Wireless Seçenekleri
          </Text>
        </View>
        <View style={[styles.frameChild, styles.frameChildBorder]} />
      </View>
      <View style={[styles.input, styles.inputPosition]}>
        <View style={styles.inputTitleSection}>
          <View style={styles.inputSection}>
            <View style={styles.baseShadowBox} />
            <Image
              style={styles.unionIcon}
              resizeMode="cover"
              source={require("../assets/union.png")}
            />
            <View
              style={[styles.inputItemsGroupWrapper, styles.checkBoxFlexBox]}
            >
              <View style={styles.inputItemsGroup}>
                <Text style={[styles.placeholder, styles.placeholderTypo]}>
                  Tarstek-5G-Wireless
                </Text>
              </View>
            </View>
            <View style={[styles.miniTitleContaier, styles.miniSpaceBlock]}>
              <Text style={[styles.title, styles.titleTypo]}>SSID</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.input1, styles.inputPosition]}>
        <View style={styles.inputTitleSection}>
          <View style={styles.inputSection}>
            <View style={styles.baseShadowBox} />
            <View
              style={[styles.inputItemsGroupWrapper, styles.checkBoxFlexBox]}
            >
              <View style={styles.inputItemsGroup}>
                <Text style={[styles.placeholder1, styles.placeholderTypo]}>
                  •••••••••••••
                </Text>
              </View>
            </View>
            <View style={[styles.miniTitleContaier1, styles.miniSpaceBlock]}>
              <Text style={[styles.title1, styles.titleTypo]}>Parolanız :</Text>
            </View>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector23.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.checkBox, styles.inputPosition]}>
        <Image
          style={styles.checkboxIcon}
          resizeMode="cover"
          source={require("../assets/checkbox.png")}
        />
        <Text style={styles.parolayGster}>Parolayı Göster</Text>
      </View>
      <Image
        style={styles.ayarlarInner}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <View style={styles.solMenuGrup}>
        <View style={[styles.mHomeBtn, styles.btnLayout]}>
          <Image
            style={styles.homeBtnYvIcon}
            resizeMode="cover"
            source={require("../assets/home-btn-yv1.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.iconPosition]}
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
            style={[styles.vectorIcon1, styles.iconPosition]}
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
            style={[styles.vectorIcon1, styles.iconPosition]}
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
            style={[styles.vectorIcon3, styles.iconPosition]}
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
            style={[styles.vectorIcon1, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/vector22.png")}
          />
        </Pressable>
      </View>
      <Image
        style={styles.vectorIcon5}
        resizeMode="cover"
        source={require("../assets/vector24.png")}
      />
      <View style={[styles.aaKatlWrapper, styles.wrapperShadowBox]}>
        <Text style={[styles.aaKatl, styles.aaKatlTypo]}>Ağa Katıl</Text>
      </View>
      <View style={[styles.yenileWrapper, styles.wrapperShadowBox]}>
        <Text style={[styles.aaKatl, styles.aaKatlTypo]}>Yenile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ayarlarChildPosition: {
    left: 0,
    position: "absolute",
  },
  frameChildBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  aaKatlTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
  },
  inputPosition: {
    width: 380,
    left: 847,
    position: "absolute",
  },
  checkBoxFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  placeholderTypo: {
    color: Color.slategray,
    fontSize: FontSize.buttons_size,
    textAlign: "left",
  },
  miniSpaceBlock: {
    paddingHorizontal: Padding.p_8xs,
    borderRadius: Border.br_11xl,
    paddingVertical: 0,
    flexDirection: "row",
    backgroundColor: Color.miniTitleBg,
    position: "absolute",
  },
  titleTypo: {
    color: Color.miniTitle,
    fontSize: FontSize.bodyBold_size,
    textAlign: "left",
  },
  btnLayout: {
    height: 80,
    width: 80,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    zIndex: 1,
    left: 28,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  wrapperShadowBox: {
    paddingVertical: Padding.p_6xs,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.steelblue,
    borderRadius: Border.br_8xs,
    left: 878,
    right: 87,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  ayarlarChild: {
    width: 914,
    height: 819,
    top: 28,
  },
  ayarlarItem: {
    top: 113,
    left: 228,
    borderColor: Color.darkgray,
    borderTopWidth: 2,
    width: 852,
    height: 2,
  },
  logooo2Icon: {
    top: 25,
    left: 40,
    width: 158,
    height: 74,
    position: "absolute",
  },
  blueRobotMascotLogoIconDe: {
    top: 32,
    left: 1121,
    width: 140,
    height: 140,
    position: "absolute",
  },
  kullanlabilirWirelessSeene: {
    color: "rgba(0, 0, 0, 0.8)",
  },
  kullanlabilirWirelessSeeneWrapper: {
    top: 33,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 427,
    left: 0,
    position: "absolute",
  },
  frameChild: {
    top: 87,
    left: 69,
    borderColor: Color.gray1Black,
    borderTopWidth: 1,
    width: 281,
    height: 1,
  },
  frameParent: {
    top: 234,
    left: 351,
    borderRadius: 10,
    borderColor: "#2476ec",
    borderWidth: 5,
    height: 515,
    width: 427,
    backgroundColor: Color.miniTitleBg,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  baseShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_5xs,
    left: "0%",
    right: "0%",
    marginTop: -23,
    top: "50%",
    height: 46,
    backgroundColor: Color.miniTitleBg,
    borderStyle: "solid",
    position: "absolute",
    width: "100%",
  },
  unionIcon: {
    height: "34.78%",
    width: "4.21%",
    top: "36.96%",
    right: "2.89%",
    bottom: "28.26%",
    left: "92.89%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  placeholder: {
    fontFamily: FontFamily.poppinsRegular,
  },
  inputItemsGroup: {
    width: 225,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  inputItemsGroupWrapper: {
    top: 0,
    height: 46,
    left: 0,
    position: "absolute",
  },
  title: {
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
  },
  miniTitleContaier: {
    top: -18,
    left: 13,
  },
  inputSection: {
    height: 46,
    alignSelf: "stretch",
  },
  inputTitleSection: {
    alignSelf: "stretch",
  },
  input: {
    top: 247,
  },
  placeholder1: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.slategray,
  },
  title1: {
    fontFamily: FontFamily.poppinsRegular,
  },
  miniTitleContaier1: {
    top: -7,
    left: 12,
  },
  vectorIcon: {
    marginTop: -9,
    right: 12,
    width: 18,
    height: 18,
    top: "50%",
    position: "absolute",
  },
  input1: {
    top: 333,
  },
  checkboxIcon: {
    borderRadius: 2,
    width: 16,
    height: 16,
  },
  parolayGster: {
    color: "#fefefe",
    width: 361,
    marginLeft: 10,
    fontSize: FontSize.buttons_size,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  checkBox: {
    top: 389,
    alignItems: "center",
    flexDirection: "row",
  },
  ayarlarInner: {
    top: 497,
    left: 140,
    width: 123,
    height: 144,
    position: "absolute",
  },
  homeBtnYvIcon: {
    width: 90,
    height: 90,
    zIndex: 0,
  },
  vectorIcon1: {
    bottom: 28,
    right: 28,
    left: 28,
    top: 28,
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
  vectorIcon3: {
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
  solMenuGrup: {
    top: 142,
    left: 16,
    height: 580,
    width: 80,
    position: "absolute",
  },
  vectorIcon5: {
    top: 619,
    left: 1149,
    width: 495,
    height: 469,
    position: "absolute",
  },
  aaKatl: {
    color: Color.miniTitleBg,
  },
  aaKatlWrapper: {
    top: 448,
    bottom: 308,
    paddingHorizontal: 112,
  },
  yenileWrapper: {
    top: 513,
    bottom: 243,
    paddingHorizontal: 119,
  },
  ayarlar: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.gray_300,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Ayarlar;
