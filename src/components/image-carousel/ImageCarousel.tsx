import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { HEIGHT, WIDTH } from "../../constants/dimemsion";
import theme from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";

interface ImageCarouselProp {
  images: string[];
}

const ImageCarousel = ({ images }: ImageCarouselProp) => {
  const renderItem: ListRenderItem<string> = useCallback(
    ({ item }) => (
      <Image source={{ uri: item }} style={styles.image} resizeMode="cover" />
    ),
    []
  );

  const flatListRef = useRef<FlatList | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handlePressLeft = () => {
    if (activeIndex === 0) {
      flatListRef.current?.scrollToIndex({
        animated: true,
        index: images.length - 1,
      });
    } else {
      flatListRef.current?.scrollToIndex({
        animated: true,
        index: activeIndex - 1,
      });
    }
  };

  const handlePressRight = () => {
    if (activeIndex === images.length - 1) {
      flatListRef.current?.scrollToIndex({
        animated: true,
        index: 0,
      });
    } else {
      flatListRef.current?.scrollToIndex({
        animated: true,
        index: activeIndex + 1,
      });
    }
  };

  return (
    <View>
      <FlatList
        ref={(ref) => (flatListRef.current = ref)}
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        pagingEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 95,
        }}
        onViewableItemsChanged={({ changed, viewableItems }) => {
          if (changed[0].isViewable) {
            setActiveIndex(changed[0].index as number);
          }
        }}
      />
      <TouchableOpacity
        style={[styles.arrow, styles.arrowLeft]}
        onPress={handlePressLeft}
      >
        <AntDesign name="arrowleft" size={24} color={theme.colors.whiteLight} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.arrow, styles.arrowRight]}
        onPress={handlePressRight}
      >
        <AntDesign
          name="arrowright"
          size={24}
          color={theme.colors.whiteLight}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  image: {
    height: HEIGHT * 0.2,
    width: WIDTH - theme.size[4] * 2,
    borderTopLeftRadius: theme.border.medium,
    borderTopRightRadius: theme.border.medium,
  },
  arrow: {
    position: "absolute",
    top: HEIGHT * 0.1,
  },
  arrowLeft: {
    left: theme.size[2],
  },
  arrowRight: {
    right: theme.size[2],
  },
});
