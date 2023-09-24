import * as React from "react";
import { StyleSheet, View } from "react-native";
import MainNemBtn from "./MainNemBtn";
import MainRuzgarBtn from "./MainRuzgarBtn";
import MainBluetBtn from "./MainBluetBtn";
import MainMesajBtn from "./MainMesajBtn";
import Wifibtn from "./Wifibtn";

const Altmenu = () => {
  return (
    <View style={styles.mainNemBtnParent}>
      <MainNemBtn />
      <MainRuzgarBtn />
      <MainBluetBtn />
      <MainMesajBtn />
      <Wifibtn />
    </View>
  );
};

const styles = StyleSheet.create({
  mainNemBtnParent: {
    flexDirection: "row",
    marginTop: 13,
  },
});

export default Altmenu;
