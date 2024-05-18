import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import theme from "@/constants/theme";

const TextInputComponent = () => {
  return <TextInput style={styles.container} />;
};

export default TextInputComponent;

const styles = StyleSheet.create({
  container: {
    borderColor: theme.colors.text,
  },
});
