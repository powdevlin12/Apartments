import { Platform, StyleSheet } from "react-native";
import theme from "../constants/theme";
import { border, fontSize, size } from "../constants/theme/size";

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg,
  },

  text: {
    fontSize: fontSize.paragraph,
    fontFamily: theme.fontFamilies.MontserratRegular,
    color: theme.colors.text,
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  column: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  section: {
    marginBottom: size[4],
  },

  inputContainer: {
    backgroundColor: theme.colors.secondary,
    borderRadius: border.medium,
    paddingHorizontal: Platform.OS === "android" ? 12 : 14,
    paddingVertical: Platform.OS === "android" ? 12 : 14,
  },
  tag: {
    paddingHorizontal: size[4],
    paddingVertical: size[3],
    borderRadius: border.large,
    backgroundColor: theme.colors.primary,
  },
  card: {
    borderRadius: theme.border.medium,
    flex: 1,
    padding: 12,
  },
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: theme.border.medium,
  },
  androidShadow: {
    elevation: 3,
  },
});
