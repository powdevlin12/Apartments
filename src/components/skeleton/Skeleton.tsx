import theme from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

interface SkeletonProps {
  width?: number;
  height?: number;
  borderRadius?: number;
  color?: string[];
  colorBg?: string;
}

const Skeleton = ({
  width,
  height,
  borderRadius,
  color,
  colorBg,
}: SkeletonProps) => {
  const translateX = useSharedValue(0);

  const rSkeletonStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  useEffect(() => {
    translateX.value = withRepeat(
      withTiming(80, {
        duration: 1000,
        // easing: Easing.bezier(0.25, -0.5, 0.25, 1),
      }),
      -1,
      false
    );
  }, []);

  return (
    <View
      style={[
        {
          width: width ?? 86,
          height: height ?? 32,
          borderRadius: borderRadius ?? theme.border.medium,
          backgroundColor: colorBg ?? "#E1E9EE",
        },
        styles.container,
      ]}
    >
      <Animated.View style={rSkeletonStyles}>
        <LinearGradient
          // Background Linear Gradient
          colors={["#F2F8FC", "rgba(0,0,0,0.3)", "#F2F8FC"]}
          style={styles.gradient}
          start={{
            x: 0,
            y: 0,
          }}
          end={{
            x: 1,
            y: 0,
          }}
        />
      </Animated.View>
    </View>
  );
};

export default Skeleton;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
  gradient: {
    width: "60%",
    height: "100%",
  },
});
