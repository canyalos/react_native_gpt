import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Stopcarbtn = () => {
  return (
    <View>
      <View style={styles.stopcarbtnChild} />
      <View style={styles.vectorParent}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector9.png")}
        />
        <Text style={styles.stop}>STOP</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stopcarbtnChild: {
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
    width: 124,
    height: 112,
    zIndex: 0,
  },
  vectorIcon: {
    height: 46,
    width: 71,
  },
  stop: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.miniTitleBg,
    textAlign: "left",
    marginTop: 6,
  },
  vectorParent: {
    position: "absolute",
    top: 15,
    left: 26,
    height: 82,
    alignItems: "center",
    zIndex: 1,
    width: 71,
  },
});

export default Stopcarbtn;
