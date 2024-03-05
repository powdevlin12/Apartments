import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import theme from "../../constants/theme";
import { IRoom } from "../../models";
import { ImageCarousel } from "../image-carousel";
import { RowComponent } from "../layout";
import { TextComponent } from "../text";
import TitleComponent from "../text/TitleComponent";

interface RoomProp {
  room: IRoom;
}

const Room = ({ room }: RoomProp) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageCarouselArea}>
        <ImageCarousel
          images={
            room.images.length > 0
              ? room.images
              : [
                  "https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp",
                ]
          }
        />
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
          <TextComponent text={`${room.max_people}`} />
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
