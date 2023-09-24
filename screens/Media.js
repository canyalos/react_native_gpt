import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import PopularForm from "../components/PopularForm";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const Media = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.media}>
      <Image
        style={styles.blueRobotMascotLogoIconDe}
        resizeMode="cover"
        source={require("../assets/robotkafa.png")}
      />
      <View style={styles.mediaChild} />
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
            style={[styles.vectorIcon, styles.iconPosition2]}
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
            style={[styles.shapeIcon, styles.iconPosition2]}
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
            style={[styles.vectorIcon, styles.iconPosition2]}
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
            style={[styles.vectorIcon, styles.iconPosition2]}
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
            style={[styles.vectorIcon2, styles.iconPosition2]}
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
            style={[styles.vectorIcon, styles.iconPosition2]}
            resizeMode="cover"
            source={require("../assets/vector22.png")}
          />
        </Pressable>
      </View>
      <View style={styles.playBar}>
        <View style={[styles.materialdarkplastic, styles.btnLayout]}>
          <View style={[styles.colorgray5Tuna, styles.iconPosition1]} />
        </View>
        <Image
          style={[styles.secondaryMediaControls, styles.controlsIconLayout]}
          resizeMode="cover"
          source={require("../assets/secondary-media-controls.png")}
        />
        <Image
          style={[styles.controlsIcon, styles.controlsIconLayout]}
          resizeMode="cover"
          source={require("../assets/controls.png")}
        />
        <View style={[styles.nowPlaying, styles.nowPlayingLayout]}>
          <View
            style={[styles.textonDarkparagraphdefault, styles.textonPosition1]}
          >
            <Text style={[styles.text, styles.textPosition]}>
              Hands Like Houses
            </Text>
          </View>
          <Image
            style={[styles.listbulletedIcon, styles.controlsIconLayout]}
            resizeMode="cover"
            source={require("../assets/listbulleted.png")}
          />
          <Image
            style={[styles.checkmarkIcon, styles.controlsIconLayout]}
            resizeMode="cover"
            source={require("../assets/checkmark.png")}
          />
          <View style={[styles.textonDarklabeldefault, styles.textonPosition1]}>
            <Text style={styles.labelDefault}>Oceandust</Text>
          </View>
          <Image
            style={[styles.albumArtIcon, styles.nowPlayingLayout]}
            resizeMode="cover"
            source={require("../assets/album-art.png")}
          />
        </View>
        <LinearGradient
          style={styles.fade}
          locations={[0, 1]}
          colors={["#000", "rgba(0, 0, 0, 0)"]}
        />
        <View style={styles.playProgress}>
          <View
            style={[styles.slidercontroldarktopLabels, styles.mHomeBtnPosition]}
          >
            <View
              style={[
                styles.sliderbackgroundnoLabels,
                styles.imageIconPosition,
              ]}
            >
              <View style={[styles.line, styles.linePosition]} />
            </View>
            <View style={[styles.line1, styles.linePosition]} />
            <Text style={[styles.right, styles.rightFlexBox]}>3:41</Text>
            <Text style={[styles.left, styles.leftTypo]}>1:25</Text>
          </View>
          <View
            style={[styles.slidercontrolleftFill, styles.controlsIconLayout]}
          >
            <View style={[styles.line2, styles.line2Position]} />
            <Image
              style={[styles.dotIcon, styles.line2Position]}
              resizeMode="cover"
              source={require("../assets/dot.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.textonDarktitleParent}>
        <View style={styles.textonDarktitle}>
          <Text style={[styles.title, styles.titlePosition]}>Popular</Text>
        </View>
        <View style={styles.frameParentBorder}>
          <PopularForm
            featureName="Clolourblind"
            dimensionCode={require("../assets/add.png")}
            carModelImageCarImageVehi="1"
            productImageUrl={require("../assets/album-art1.png")}
          />
          <PopularForm
            featureName="No Parallels"
            dimensionCode={require("../assets/checkmark1.png")}
            carModelImageCarImageVehi="2"
            productImageUrl={require("../assets/album-art2.png")}
          />
          <PopularForm
            featureName="Division Symbols"
            dimensionCode={require("../assets/add.png")}
            carModelImageCarImageVehi="3"
            productImageUrl={require("../assets/album-art1.png")}
          />
          <View style={styles.frameWrapper}>
            <View style={styles.popularLayout}>
              <View style={[styles.popularSong, styles.popularLayout]}>
                <View
                  style={[
                    styles.textonDarkparagraphdefault1,
                    styles.iconPosition,
                  ]}
                >
                  <Text style={[styles.text1, styles.rightFlexBox]}>
                    1,812,421
                  </Text>
                </View>
                <View
                  style={[styles.textonDarklabeldefault1, styles.iconPosition]}
                >
                  <Text style={styles.labelDefault}>I Am</Text>
                </View>
                <Image
                  style={[styles.addIcon, styles.iconPosition]}
                  resizeMode="cover"
                  source={require("../assets/add.png")}
                />
                <View
                  style={[
                    styles.textonDarkparagraphdefault2,
                    styles.iconPosition,
                  ]}
                >
                  <Text style={[styles.text, styles.textPosition]}>4</Text>
                </View>
                <Image
                  style={[styles.albumArtIcon1, styles.iconPosition1]}
                  resizeMode="cover"
                  source={require("../assets/album-art1.png")}
                />
              </View>
            </View>
          </View>
          <PopularForm
            featureName="Drift"
            dimensionCode={require("../assets/add.png")}
            carModelImageCarImageVehi="5"
            productImageUrl={require("../assets/album-art1.png")}
          />
        </View>
        <View style={[styles.textonDarklink, styles.frameParentBorder]}>
          <Text style={[styles.text3, styles.textPosition]}>Show 5 More</Text>
        </View>
      </View>
      <View style={styles.textonDarktitle1}>
        <Text style={[styles.title, styles.titlePosition]}>
          Related Artists
        </Text>
      </View>
      <Image
        style={styles.chevronRightIcon}
        resizeMode="cover"
        source={require("../assets/chevron-right.png")}
      />
      <View style={[styles.relatedArtist, styles.relatedLayout]}>
        <Image
          style={[styles.avatarkateJohnsonIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/avatarkate-johnson.png")}
        />
        <View style={[styles.textonDarklabeldefault2, styles.iconPosition]}>
          <Text style={styles.labelDefault}>Issues</Text>
        </View>
      </View>
      <View style={[styles.relatedArtist1, styles.relatedLayout]}>
        <Image
          style={[styles.avatarkateJohnsonIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/avatarkate-johnson1.png")}
        />
        <View style={[styles.textonDarklabeldefault2, styles.iconPosition]}>
          <Text style={styles.labelDefault}>Dream on Dreamer</Text>
        </View>
      </View>
      <View style={[styles.relatedArtist2, styles.relatedLayout]}>
        <Image
          style={[styles.avatarkateJohnsonIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/avatarkate-johnson2.png")}
        />
        <View style={[styles.textonDarklabeldefault2, styles.iconPosition]}>
          <Text style={styles.labelDefault}>{`Isles & Glaciers`}</Text>
        </View>
      </View>
      <View style={[styles.relatedArtist3, styles.relatedLayout]}>
        <Image
          style={[styles.avatarkateJohnsonIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/avatarkate-johnson3.png")}
        />
        <View style={[styles.textonDarklabeldefault2, styles.iconPosition]}>
          <Text style={styles.labelDefault}>Jamie’s Elsewhere</Text>
        </View>
      </View>
      <View style={[styles.relatedArtist4, styles.relatedLayout]}>
        <Image
          style={[styles.avatarkateJohnsonIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/avatarkate-johnson4.png")}
        />
        <View style={[styles.textonDarklabeldefault2, styles.iconPosition]}>
          <Text style={styles.labelDefault}>Secrets</Text>
        </View>
      </View>
      <View style={styles.banner}>
        <Image
          style={[styles.imageIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/image.png")}
        />
        <View style={styles.textonDarkheading1}>
          <Text style={styles.heading1}>Hands Like Houses</Text>
        </View>
        <View style={[styles.actions, styles.textonPosition]}>
          <View style={[styles.button, styles.titlePosition]}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/add1.png")}
            />
            <Text style={styles.label}>Play</Text>
            <Image
              style={[styles.chevronRightIcon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/chevron-right1.png")}
            />
          </View>
          <Image
            style={[styles.kebabIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/kebab.png")}
          />
          <View style={[styles.buttonlinknoIcondefault, styles.iconPosition]}>
            <Text style={[styles.labelDefault7, styles.titleTypo]}>Follow</Text>
          </View>
        </View>
        <View style={[styles.textonDarkheading11, styles.textonPosition]}>
          <Text style={styles.heading11}>Hands Like Houses</Text>
        </View>
        <View style={[styles.textonDarklabeluppercase, styles.textonPosition]}>
          <Text style={[styles.labelUppercase, styles.textPosition]}>
            Artist
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnLayout: {
    height: 80,
    position: "absolute",
  },
  iconPosition2: {
    zIndex: 1,
    left: 28,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition1: {
    top: "0%",
    height: "100%",
  },
  controlsIconLayout: {
    height: 20,
    position: "absolute",
  },
  nowPlayingLayout: {
    height: 60,
    position: "absolute",
  },
  textonPosition1: {
    left: 69,
    height: 20,
    position: "absolute",
  },
  textPosition: {
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  mHomeBtnPosition: {
    top: 0,
    left: 0,
  },
  imageIconPosition: {
    width: "100%",
    left: "0%",
    right: "0%",
  },
  linePosition: {
    backgroundColor: Color.mid,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  rightFlexBox: {
    textAlign: "right",
    position: "absolute",
  },
  leftTypo: {
    color: Color.gray,
    fontSize: FontSize.smallText_size,
    width: "50%",
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
    height: 20,
    top: 0,
  },
  line2Position: {
    top: "50%",
    position: "absolute",
  },
  titlePosition: {
    alignItems: "center",
    top: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
  },
  popularLayout: {
    width: 540,
    height: 40,
  },
  iconPosition: {
    bottom: "25%",
    top: "25%",
    height: "50%",
    position: "absolute",
  },
  frameParentBorder: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: Color.gray1Black,
    borderStyle: "solid",
  },
  relatedLayout: {
    width: 300,
    left: 891,
    borderWidth: 1,
    borderColor: Color.gray1Black,
    height: 40,
    borderStyle: "solid",
    position: "absolute",
  },
  textonPosition: {
    left: "4.51%",
    position: "absolute",
  },
  iconLayout: {
    height: 16,
    width: 16,
    display: "none",
  },
  titleTypo: {
    fontFamily: FontFamily.buttons,
    fontWeight: "700",
    textAlign: "left",
    width: "100%",
  },
  blueRobotMascotLogoIconDe: {
    top: 32,
    left: 1121,
    width: 140,
    height: 140,
    position: "absolute",
  },
  mediaChild: {
    top: 113,
    left: 228,
    borderColor: Color.colorWhitesmoke_100,
    borderTopWidth: 2,
    width: 852,
    height: 2,
    borderStyle: "solid",
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
    left: 28,
  },
  mHomeBtn: {
    flexDirection: "row",
    left: 0,
    top: 0,
    width: 80,
  },
  shapeIcon: {
    top: 26,
    right: 27,
    bottom: 26,
  },
  mOzelliklerBtn: {
    top: 100,
    flexDirection: "row",
    left: 0,
    width: 80,
  },
  mTelefonBtn: {
    top: 200,
    flexDirection: "row",
    left: 0,
    width: 80,
  },
  mMediaBtn: {
    top: 300,
    flexDirection: "row",
    left: 0,
    width: 80,
  },
  vectorIcon2: {
    top: 29,
    bottom: 28,
    right: 28,
    left: 28,
  },
  mKameraBtn: {
    top: 400,
    flexDirection: "row",
    left: 0,
    width: 80,
  },
  mAyarlarBtn: {
    top: 500,
    flexDirection: "row",
    left: 0,
    width: 80,
  },
  solMenuGrup: {
    top: 142,
    left: 16,
    height: 580,
    width: 80,
    position: "absolute",
  },
  colorgray5Tuna: {
    backgroundColor: Color.gray2,
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  materialdarkplastic: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    left: "0%",
    bottom: 0,
    right: "0%",
    width: "100%",
  },
  secondaryMediaControls: {
    right: 20,
    width: 70,
    bottom: 30,
  },
  controlsIcon: {
    top: 68,
    right: 423,
    width: 220,
  },
  text: {
    color: Color.lightgray,
    fontFamily: FontFamily.hindRegular,
    top: "0%",
    height: "100%",
    width: "100%",
    fontSize: FontSize.buttons_size,
  },
  textonDarkparagraphdefault: {
    width: 240,
    bottom: 10,
  },
  listbulletedIcon: {
    top: 10,
    left: 171,
    width: 20,
  },
  checkmarkIcon: {
    left: 141,
    width: 20,
    bottom: 30,
  },
  labelDefault: {
    color: Color.miniTitleBg,
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.buttons_size,
    top: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  textonDarklabeldefault: {
    width: 67,
    bottom: 30,
  },
  albumArtIcon: {
    width: 60,
    bottom: 0,
    left: 0,
  },
  nowPlaying: {
    left: 10,
    width: 309,
    bottom: 10,
  },
  fade: {
    width: 1066,
    backgroundColor: "transparent",
    height: 40,
    left: 0,
    top: 0,
    position: "absolute",
  },
  line: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  sliderbackgroundnoLabels: {
    left: "0%",
    bottom: 0,
    right: "0%",
    height: 2,
    position: "absolute",
  },
  line1: {
    bottom: 0,
    height: 2,
  },
  right: {
    left: "50%",
    color: Color.gray,
    fontSize: FontSize.smallText_size,
    width: "50%",
    fontFamily: FontFamily.smallText,
    fontWeight: "500",
    height: 20,
    top: 0,
  },
  left: {
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  slidercontroldarktopLabels: {
    height: 27,
    right: 0,
    left: 0,
    position: "absolute",
  },
  line2: {
    marginTop: -1,
    right: 10,
    backgroundColor: Color.coreGreen,
    left: 0,
    height: 2,
  },
  dotIcon: {
    marginTop: -16,
    right: -9,
    width: 38,
    height: 38,
  },
  slidercontrolleftFill: {
    top: 16,
    right: "67.17%",
    width: "32.83%",
    left: "0%",
  },
  playProgress: {
    top: 12,
    height: 36,
    right: 0,
    left: 0,
    position: "absolute",
  },
  playBar: {
    width: "83.28%",
    right: "2.58%",
    bottom: 51,
    left: "14.14%",
    height: 118,
    position: "absolute",
  },
  title: {
    fontSize: FontSize.size_mini,
    display: "flex",
    fontFamily: FontFamily.buttons,
    fontWeight: "700",
    textAlign: "left",
    width: "100%",
    color: Color.miniTitleBg,
  },
  textonDarktitle: {
    borderWidth: 1,
    borderColor: Color.gray1Black,
    alignSelf: "stretch",
    height: 20,
    borderStyle: "solid",
  },
  text1: {
    color: Color.lightgray,
    fontFamily: FontFamily.hindRegular,
    top: "0%",
    height: "100%",
    width: "100%",
    fontSize: FontSize.buttons_size,
    left: "0%",
  },
  textonDarkparagraphdefault1: {
    width: 100,
    right: 0,
  },
  textonDarklabeldefault1: {
    left: 120,
    width: 240,
  },
  addIcon: {
    left: 80,
    width: 20,
    maxHeight: "100%",
  },
  textonDarkparagraphdefault2: {
    left: 50,
    width: 20,
  },
  albumArtIcon1: {
    width: 40,
    bottom: "0%",
    maxHeight: "100%",
    left: 0,
    position: "absolute",
  },
  popularSong: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameWrapper: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
  },
  text3: {
    textDecoration: "underline",
    lineHeight: 25,
    color: Color.miniTitleBg,
    fontFamily: FontFamily.hindRegular,
    textAlign: "left",
    fontSize: FontSize.buttons_size,
    top: "0%",
    height: "100%",
    width: "100%",
  },
  textonDarklink: {
    height: 22,
    alignSelf: "stretch",
    marginTop: 15,
  },
  textonDarktitleParent: {
    top: 318,
    left: 232,
    position: "absolute",
  },
  textonDarktitle1: {
    width: 272,
    left: 891,
    top: 350,
    borderWidth: 1,
    borderColor: Color.gray1Black,
    height: 20,
    borderStyle: "solid",
    position: "absolute",
  },
  chevronRightIcon: {
    left: 1171,
    top: 350,
    width: 20,
    height: 20,
    position: "absolute",
  },
  avatarkateJohnsonIcon: {
    width: "13.33%",
    right: "86.67%",
    bottom: "0%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  textonDarklabeldefault2: {
    width: "80%",
    left: "20%",
    right: "0%",
  },
  relatedArtist: {
    top: 380,
  },
  relatedArtist1: {
    top: 430,
  },
  relatedArtist2: {
    top: 480,
  },
  relatedArtist3: {
    top: 530,
  },
  relatedArtist4: {
    top: 580,
  },
  imageIcon: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  heading1: {
    display: "none",
    fontSize: FontSize.size_23xl,
    fontFamily: FontFamily.buttons,
    fontWeight: "700",
    color: Color.miniTitleBg,
    textAlign: "left",
    top: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  textonDarkheading1: {
    height: "16.67%",
    width: "33.49%",
    top: "41.32%",
    right: "0.03%",
    bottom: "42.02%",
    left: "66.48%",
    position: "absolute",
  },
  label: {
    fontSize: FontSize.bodyBold_size,
    lineHeight: 24,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.gray1Black,
    textAlign: "center",
    marginLeft: 8,
    fontWeight: "500",
  },
  chevronRightIcon1: {
    marginLeft: 8,
  },
  button: {
    width: "49.02%",
    right: "50.98%",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.coreBlue,
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    bottom: "0%",
    flexDirection: "row",
  },
  kebabIcon: {
    width: "9.8%",
    left: "90.2%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  labelDefault7: {
    letterSpacing: 0.3,
    color: Color.coreGreen,
    fontSize: FontSize.buttons_size,
    top: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
  },
  buttonlinknoIcondefault: {
    width: "21.57%",
    right: "19.61%",
    left: "58.82%",
  },
  actions: {
    height: "16.2%",
    width: "27.91%",
    top: "70.08%",
    right: "67.58%",
    bottom: "13.72%",
  },
  heading11: {
    fontSize: FontSize.size_23xl,
    fontFamily: FontFamily.buttons,
    fontWeight: "700",
    color: Color.miniTitleBg,
    textAlign: "left",
    top: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  textonDarkheading11: {
    height: "24.3%",
    width: "48.84%",
    top: "37.67%",
    right: "46.65%",
    bottom: "38.02%",
  },
  labelUppercase: {
    fontSize: 13,
    letterSpacing: 2.3,
    textTransform: "uppercase",
    color: Color.lightgray,
    fontFamily: FontFamily.hindRegular,
    top: "0%",
    height: "100%",
    width: "100%",
  },
  textonDarklabeluppercase: {
    height: "8.1%",
    top: "29.57%",
    right: "62.65%",
    bottom: "62.33%",
    width: "32.83%",
  },
  banner: {
    height: "30.86%",
    width: "57.11%",
    top: "7.13%",
    right: "18.44%",
    bottom: "62.02%",
    left: "24.45%",
    opacity: 0.7,
    position: "absolute",
  },
  media: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.gray_300,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Media;
