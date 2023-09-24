import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const FormContainer = () => {
  return (
    <View style={styles.frameParent}>
      <Image
        style={[styles.frameIcon, styles.frameIconPosition]}
        resizeMode="cover"
        source={require("../assets/frame.png")}
      />
      <Image
        style={[styles.frameIcon1, styles.frameIconPosition]}
        resizeMode="cover"
        source={require("../assets/frame1.png")}
      />
      <View style={[styles.frame, styles.frameFlexBox2]}>
        <Text style={styles.text}>57</Text>
      </View>
      <View style={[styles.frame1, styles.frameFlexBox2]}>
        <Text style={[styles.kmh, styles.kmhTypo]}>Km/h</Text>
      </View>
      <Image
        style={styles.frameChild}
        resizeMode="cover"
        source={require("../assets/group-23.png")}
      />
      <View style={[styles.frame2, styles.frameFlexBox2]}>
        <Text style={[styles.text1, styles.kmhTypo]}>20</Text>
      </View>
      <View style={[styles.frame3, styles.frameFlexBox1]}>
        <Text style={[styles.text1, styles.kmhTypo]}>40</Text>
      </View>
      <View style={[styles.frame4, styles.frameFlexBox1]}>
        <Text style={[styles.text1, styles.kmhTypo]}>60</Text>
      </View>
      <View style={[styles.frame5, styles.frameFlexBox1]}>
        <Text style={[styles.text1, styles.kmhTypo]}>80</Text>
      </View>
      <View style={[styles.frame6, styles.frameFlexBox]}>
        <Text style={[styles.text1, styles.kmhTypo]}>100</Text>
      </View>
      <View style={[styles.frame7, styles.frameFlexBox2]}>
        <Text style={[styles.text1, styles.kmhTypo]}>120</Text>
      </View>
      <View style={[styles.frame8, styles.frameFlexBox]}>
        <Text style={[styles.text1, styles.kmhTypo]}>140</Text>
      </View>
      <View style={[styles.frame9, styles.frameFlexBox]}>
        <Text style={[styles.text1, styles.kmhTypo]}>160</Text>
      </View>
      <View style={[styles.frame10, styles.frameFlexBox]}>
        <Text style={[styles.text1, styles.kmhTypo]}>180</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameIconPosition: {
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  frameFlexBox2: {
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  kmhTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  frameFlexBox1: {
    width: 19,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  frameFlexBox: {
    width: 24,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  frameIcon: {
    left: 0,
    width: 23,
    height: 218,
  },
  frameIcon1: {
    left: 95,
    width: 115,
    height: 200,
  },
  text: {
    fontSize: 33,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.aqua,
    textAlign: "left",
  },
  frame: {
    left: 132,
    width: 40,
    height: 154,
  },
  kmh: {
    fontSize: 16,
    color: Color.grey,
  },
  frame1: {
    left: 130,
    width: 46,
    height: 178,
  },
  frameChild: {
    top: -1,
    left: -4,
    width: 299,
    height: 226,
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_mini_2,
    color: Color.darkorange,
  },
  frame2: {
    left: 63,
    width: 18,
    height: 198,
  },
  frame3: {
    left: 50,
    height: 152,
  },
  frame4: {
    left: 64,
    height: 99,
  },
  frame5: {
    left: 101,
    height: 66,
  },
  frame6: {
    left: 142,
    height: 56,
  },
  frame7: {
    left: 192,
    height: 67,
    width: 23,
  },
  frame8: {
    left: 223,
    height: 104,
  },
  frame9: {
    left: 232,
    height: 152,
  },
  frame10: {
    left: 219,
    height: 199,
  },
  frameParent: {
    width: 294,
    height: 218,
  },
});

export default FormContainer;
