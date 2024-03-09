import React, { ReactNode } from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { globalStyle } from "../../styles/global.styles";

interface Props {
  children: ReactNode;
  alignItems:
    | "baseline"
    | "center"
    | "flex-end"
    | "flex-start"
    | "stretch"
    | undefined;
  onPress?: () => void;
  styles?: StyleProp<ViewStyle>;
}

const ColumnComponent = (props: Props) => {
  const { children, alignItems, onPress, styles } = props;
  const localStyle = [
    globalStyle.column,
    { alignItems: alignItems ?? "center" },
    styles,
  ];

  return onPress ? (
    <TouchableOpacity style={localStyle} onPress={onPress}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={localStyle}>{children}</View>
  );
};

export default ColumnComponent;

const styles = StyleSheet.create({
  container: {},
});
