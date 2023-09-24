import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const NainTakvimGriBolum = () => {
  return (
    <View style={styles.nainTakvimGriBolum}>
      <View style={[styles.nainTakvimGriBolumChild, styles.nainPosition]} />
      <Image
        style={[styles.nainTakvimGriBolumItem, styles.nainPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-17.png")}
      />
      <Text style={[styles.musteriToplantisi, styles.saatbes5Typo]}>
        Müşteri Toplantısı
      </Text>
      <Text style={[styles.saatbes5, styles.saatbes5Typo]}>5:00 - 6:20</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nainPosition: {
    left: 0,
    top: 0,
    height: 68,
    position: "absolute",
  },
  saatbes5Typo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  nainTakvimGriBolumChild: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.darkslategray_200,
    width: 208,
    top: 0,
  },
  nainTakvimGriBolumItem: {
    width: 8,
  },
  musteriToplantisi: {
    top: 19,
    left: 16,
    fontSize: FontSize.buttons_size,
    color: Color.miniTitleBg,
  },
  saatbes5: {
    top: 42,
    left: 17,
    fontSize: FontSize.smallText_size,
    color: Color.grey,
    width: 67,
  },
  nainTakvimGriBolum: {
    top: 99,
    left: 81,
    borderRadius: Border.br_5xs,
    height: 68,
    position: "absolute",
    width: 208,
  },
});

export default NainTakvimGriBolum;
