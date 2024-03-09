import { RowComponent, SpaceComponent } from "@/components/layout";
import { TextComponent } from "@/components/text";
import theme from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

interface UtilityProps {
  content: string;
}

const Utility = ({ content }: UtilityProps) => {
  return (
    <RowComponent styles={{ alignItems: "flex-start" }}>
      <Ionicons name="checkmark" size={18} color="black" />
      <SpaceComponent width={theme.size[2]} />
      <TextComponent text={content} />
    </RowComponent>
  );
};

export default Utility;
