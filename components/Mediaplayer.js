import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const Mediaplayer = () => {
  return (
    <View style={styles.fluentskipBack1024RegularParent}>
      <Image
        style={styles.iconLayout}
        resizeMode="cover"
        source={require("../assets/fluentskipback1024regular.png")}
      />
      <Image
        style={[styles.evaskipBackFillIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/evaskipbackfill.png")}
      />
      <Image
        style={styles.frameChild}
        resizeMode="cover"
        source={require("../assets/group-37.png")}
      />
      <Image
        style={[styles.evaskipBackFillIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/evaskipbackfill1.png")}
      />
      <Image
        style={[styles.evaskipBackFillIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/fluentskipback1024regular1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    height: 22,
    width: 22,
  },
  evaskipBackFillIcon: {
    marginLeft: 28.8,
  },
  frameChild: {
    width: 40,
    height: 39,
    marginLeft: 28.8,
  },
  fluentskipBack1024RegularParent: {
    position: "absolute",
    top: 0,
    left: 28,
    width: 246,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Mediaplayer;
