import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import theme from "../../constants/theme";
import { TextComponent } from "../text";
import { fontFamilies } from "../../constants/theme/fontFamilies";

interface BadgeProps {
  title: string;
  active: boolean;
  setActiveType: React.Dispatch<React.SetStateAction<string>>;
}

const Badge = ({ title, active, setActiveType }: BadgeProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, active && styles.active]}
      onPress={() => setActiveType(title)}
    >
      <TextComponent
        text={title}
        color={active ? theme.colors.textLight : theme.colors.primary}
        font={
          active
            ? theme.fontFamilies.PoppinsSemiBold
            : theme.fontFamilies.Poppins
        }
      />
    </TouchableOpacity>
  );
};

export default React.memo(Badge);

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.border.medium,
    backgroundColor: theme.colors.bg,
    paddingHorizontal: theme.size[4],
    paddingVertical: theme.size[2],
  },
  title: {},
  active: {
    backgroundColor: theme.colors.primary,
  },
});
