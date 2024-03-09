import { TextComponent } from "@/components/text";
import theme from "@/constants/theme";
import { IIonicon } from "@/models/IIonicons";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";

interface FacillitiesProps {
  name: string;
  icon: IIonicon;
}

const size = 30;

const Facillities = ({ icon, name }: FacillitiesProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Ionicons name={icon.name} size={16} color={theme.colors.third} />
      </View>
      <TextComponent text={name} />
    </View>
  );
};

export default Facillities;

const styles = StyleSheet.create({
  container: {
    marginRight: theme.size[3],
    alignItems: "center",
  },
  icon: {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: theme.colors.thirdBlur,
    justifyContent: "center",
    alignItems: "center",
  },
});
