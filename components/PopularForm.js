import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const PopularForm = ({
  featureName,
  dimensionCode,
  carModelImageCarImageVehi,
  productImageUrl,
}) => {
  return (
    <View style={styles.popularSongWrapper}>
      <View style={styles.popularSong}>
        <View
          style={[styles.textonDarkparagraphdefault, styles.textonPosition]}
        >
          <Text style={[styles.text, styles.textClr]}>1,812,421</Text>
        </View>
        <View style={[styles.textonDarklabeldefault, styles.textonPosition]}>
          <Text style={[styles.labelDefault, styles.text1Position]}>
            {featureName}
          </Text>
        </View>
        <Image
          style={[styles.addIcon, styles.addIconPosition]}
          resizeMode="cover"
          source={dimensionCode}
        />
        <View
          style={[styles.textonDarkparagraphdefault1, styles.addIconPosition]}
        >
          <Text style={[styles.text1, styles.text1Position]}>
            {carModelImageCarImageVehi}
          </Text>
        </View>
        <Image
          style={styles.albumArtIcon}
          resizeMode="cover"
          source={productImageUrl}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textonPosition: {
    bottom: "25%",
    top: "25%",
    height: "50%",
    position: "absolute",
  },
  textClr: {
    color: Color.lightgray,
    fontFamily: FontFamily.hindRegular,
  },
  text1Position: {
    textAlign: "left",
    fontSize: FontSize.buttons_size,
    left: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  addIconPosition: {
    width: 20,
    bottom: "25%",
    top: "25%",
    height: "50%",
    position: "absolute",
  },
  text: {
    textAlign: "right",
    fontSize: FontSize.buttons_size,
    left: "0%",
    width: "100%",
    color: Color.lightgray,
    fontFamily: FontFamily.hindRegular,
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  textonDarkparagraphdefault: {
    right: 0,
    width: 100,
  },
  labelDefault: {
    fontWeight: "500",
    fontFamily: FontFamily.smallText,
    color: Color.miniTitleBg,
  },
  textonDarklabeldefault: {
    left: 120,
    width: 240,
  },
  addIcon: {
    left: 80,
    maxHeight: "100%",
  },
  text1: {
    color: Color.lightgray,
    fontFamily: FontFamily.hindRegular,
  },
  textonDarkparagraphdefault1: {
    left: 50,
  },
  albumArtIcon: {
    bottom: "0%",
    left: 0,
    width: 40,
    maxHeight: "100%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  popularSong: {
    width: 540,
    height: 40,
  },
  popularSongWrapper: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_9xs,
  },
});

export default PopularForm;
