import theme from "@/constants/theme";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TextComponent } from "../text";

interface BadgeNavigationProps {
  name: string;
}

const BadgeNavigation = ({ name }: BadgeNavigationProps) => {
  return (
    <View style={styles.container}>
      <TextComponent
        text={name}
        color={theme.colors.primary}
        size={theme.fontSize.paragraph}
      />
      <View style={styles.square} />
    </View>
  );
};

export default BadgeNavigation;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  square: {
    width: theme.size[3],
    height: theme.size[3],
    borderRadius: theme.size[2],
    backgroundColor: theme.colors.primary,
  },
});
