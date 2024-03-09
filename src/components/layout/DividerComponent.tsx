import theme from "@/constants/theme";
import React from "react";
import { StyleSheet, View } from "react-native";

const DividerComponent = () => {
  return <View style={styles.container}></View>;
};

export default DividerComponent;

const styles = StyleSheet.create({
  container: {
    height: 1,
    width: "100%",
    backgroundColor: "#d6d4d5",
  },
});
