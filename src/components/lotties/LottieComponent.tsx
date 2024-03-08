import { WIDTH } from "@/constants/dimemsion";
import theme from "@/constants/theme";
import LottieView, { AnimationObject } from "lottie-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";

interface LottieComponentProps {
  autoPlay?: boolean;
  width?: number;
  height?: number;
  bgColor?: string;
  source: AnimationObject;
}

const LottieComponent = ({
  source,
  autoPlay,
  bgColor,
  height,
  width,
}: LottieComponentProps) => {
  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay={autoPlay ?? true}
        style={{
          width: width ?? WIDTH * 0.9,
          height: height ?? 400,
          backgroundColor: bgColor ?? theme.colors.bg,
        }}
        source={source}
      />
    </View>
  );
};

export default LottieComponent;

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
