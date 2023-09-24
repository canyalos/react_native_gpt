import * as React from "react";
import { StyleSheet, View } from "react-native";
import FormContainer from "./FormContainer";

const Speedometre = () => {
  return (
    <View style={styles.speedometre}>
      <FormContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  speedometre: {
    position: "absolute",
    top: 564,
    left: 831,
    width: 302,
    height: 230,
    justifyContent: "flex-end",
    paddingHorizontal: 1,
    paddingVertical: 0,
  },
});

export default Speedometre;
