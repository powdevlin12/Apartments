import React, { ReactNode } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import theme from "../../constants/theme";
import { globalStyle } from "../../styles/global.styles";

interface Props {
  children?: ReactNode;
  haveHeader?: boolean;
}

const Container = (props: Props) => {
  const { children, haveHeader = false } = props;
  return (
    <SafeAreaView style={globalStyle.container}>
      <StatusBar barStyle={"light-content"} />
      <View style={[styles.containerChilden]}>{children}</View>
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  containerChilden: {
    marginHorizontal: theme.size[4],
    marginTop: theme.size[3],
    flex: 1,
  },
});
