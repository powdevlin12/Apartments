import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IRoom } from "../../../models";
import { ImageCarousel } from "../image-carousel";
import TitleComponent from "../text/TitleComponent";
import { RowComponent, SpaceComponent } from "../layout";
import theme from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { TextComponent } from "../text";

interface RoomProp {
  room: IRoom;
}

const Room = ({ room }: RoomProp) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageCarouselArea}>
        <ImageCarousel images={room.image} />
      </View>
      <RowComponent justifyContent="space-between" styles={styles.roomInfoArea}>
        <TitleComponent text={room.name} />
        <TitleComponent
          text={`${room.price}đ/giờ`}
          color={theme.colors.third}
          size={theme.fontSize.paragraphLarge}
        />
      </RowComponent>
      <RowComponent
        justifyContent="flex-start"
        styles={{ columnGap: theme.size[3] }}
      >
        <View style={styles.infoRoom}>
          <Ionicons name="person" size={20} color={theme.colors.secondary} />
          <TextComponent text={`${room.maxPeople}`} />
        </View>
        <View style={styles.infoRoom}>
          <Ionicons
            name="bed-outline"
            size={20}
            color={theme.colors.secondary}
          />
          <TextComponent text={`${room.bed}`} />
        </View>
      </RowComponent>
    </View>
  );
};

export default Room;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.border.medium,
    paddingBottom: theme.size[3],
  },
  imageCarouselArea: {
    // backgroundColor: "green",
  },
  roomInfoArea: {
    paddingHorizontal: theme.size[3],
    paddingVertical: theme.size[2],
  },
  infoRoom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.size[2],
    borderWidth: 1,
    borderRadius: theme.border.medium,
    borderColor: theme.colors.whiteLight,
    paddingVertical: theme.size[1],
    paddingHorizontal: theme.size[3],
    marginHorizontal: theme.size[3],
  },
});
