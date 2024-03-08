import lotties from "@/assets/lotties";
import { HEIGHT } from "@/constants/dimemsion";
import React from "react";
import { StyleSheet, View } from "react-native";
import { LottieComponent } from "../lotties";
import { TextComponent } from "../text";

interface NotDataProps {
  content: string;
}

const NotData = ({ content }: NotDataProps) => {
  return (
    <View style={styles.container}>
      <LottieComponent source={lotties.nodata} />
      <TextComponent text={content} />
    </View>
  );
};

export default NotData;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    maxHeight: HEIGHT * 0.4,
  },
});
