import { globalStyle } from "@/styles/global.styles";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, { BounceInRight } from "react-native-reanimated";
import theme from "../../constants/theme";
import { IRoom } from "../../models";
import { ImageCarousel } from "../image-carousel";
import { RowComponent } from "../layout";
import { TextComponent } from "../text";
import TitleComponent from "../text/TitleComponent";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ApartmentParamList } from "@/navigation/app/apartment/apartment.navigation";

interface RoomProp {
  room: IRoom;
  index: number;
}

type RoomNavigationProps = NavigationProp<ApartmentParamList, "SearchScreen">;
const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const Room = ({ room, index }: RoomProp) => {
  const navigation = useNavigation<RoomNavigationProps>();
  return (
    <AnimatedTouchableOpacity
      style={[
        styles.container,
        globalStyle.androidShadow,
        globalStyle.boxShadow,
      ]}
      entering={BounceInRight.duration(600).delay(100 * index)}
      onPress={() =>
        navigation.navigate("DetailApartment", {
          apartment: JSON.stringify(room),
        })
      }
    >
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
        <TitleComponent
          text={room.name}
          font={theme.fontFamilies.Poppins}
          size={theme.fontSize.paragraph}
        />
        <TitleComponent
          text={`${room.price}đ/giờ`}
          color={theme.colors.third}
          size={theme.fontSize.paragraph}
        />
      </RowComponent>
      <RowComponent
        justifyContent="space-between"
        styles={{ columnGap: theme.size[3], marginHorizontal: theme.size[3] }}
      >
        <RowComponent justifyContent="center">
          <View style={styles.infoRoom}>
            <Ionicons name="person" size={14} color={theme.colors.secondary} />
            <TextComponent
              text={`${room.max_people}`}
              size={theme.fontSize.note}
            />
          </View>
          <View style={styles.infoRoom}>
            <Ionicons
              name="bed-outline"
              size={14}
              color={theme.colors.secondary}
            />
            <TextComponent text={`${room.bed}`} size={theme.fontSize.note} />
          </View>
        </RowComponent>
        <View>
          <Ionicons
            name="heart-outline"
            size={20}
            color={theme.colors.secondary}
          />
        </View>
      </RowComponent>
    </AnimatedTouchableOpacity>
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
  },
});
