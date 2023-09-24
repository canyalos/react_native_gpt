import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Keyaccbtn = () => {
  return (
    <View style={styles.keyaccbtn}>
      <View style={styles.keyaccbtnChild} />
      <View style={styles.keyAccIconParent}>
        <Image
          style={styles.keyAccIcon}
          resizeMode="cover"
          source={require("../assets/key-acc-icon.png")}
        />
        <Text style={styles.keyAcc}>KEY ACC</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  keyaccbtnChild: {
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
    height: 112,
    zIndex: 0,
    width: 124,
  },
  keyAccIcon: {
    width: 70,
    height: 45,
  },
  keyAcc: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.miniTitleBg,
    textAlign: "left",
    marginTop: 4,
  },
  keyAccIconParent: {
    position: "absolute",
    top: 17,
    left: 19,
    width: 87,
    zIndex: 1,
    alignItems: "center",
  },
  keyaccbtn: {
    justifyContent: "flex-end",
    alignItems: "center",
    width: 124,
  },
});

export default Keyaccbtn;
