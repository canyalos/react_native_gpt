import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Wifibtn = () => {
  return (
    <View style={styles.wifibtn}>
      <View style={styles.wifivectorParent}>
        <Image
          style={styles.wifivectorIcon}
          resizeMode="cover"
          source={require("../assets/wifivector.png")}
        />
        <Text style={styles.wireless}>Wireless</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wifivectorIcon: {
    width: 57,
    height: 27,
  },
  wireless: {
    fontSize: FontSize.bodyBold_size,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.miniTitleBg,
    textAlign: "left",
    marginTop: 9,
  },
  wifivectorParent: {
    alignItems: "center",
  },
  wifibtn: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.gray_200,
    shadowColor: "rgba(207, 248, 11, 0.25)",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    width: 109,
    height: 86,
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    marginLeft: 10,
    alignItems: "center",
  },
});

export default Wifibtn;
