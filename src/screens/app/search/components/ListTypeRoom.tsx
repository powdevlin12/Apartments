import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { TypeRoom } from "../../../../models";
import theme from "../../../../constants/theme";
import { Badge } from "../../../../components/badge";
import { capitalizeFirstLetter } from "@/utils";
import Skeleton from "@/components/skeleton/Skeleton";
import { SpaceComponent } from "@/components/layout";

interface ListTypeRoomProps {
  listTypeRoom: TypeRoom[] | undefined;
  setActiveType: React.Dispatch<React.SetStateAction<string>>;
  activeType: string;
  isLoading: boolean;
}
const ListTypeRoom = ({
  listTypeRoom,
  activeType,
  setActiveType,
  isLoading,
}: ListTypeRoomProps) => {
  const renderItem: ListRenderItem<TypeRoom> = useCallback(
    ({ item }) => (
      <Badge
        title={capitalizeFirstLetter(item.name)}
        active={item.name.toLowerCase() === activeType.toLowerCase()}
        setActiveType={setActiveType}
      />
    ),
    [activeType]
  );

  if (isLoading) {
    return (
      <View style={styles.container}>
        <FlatList
          data={Array.from({ length: 6 }, (_, index) => index + 1)}
          renderItem={() => (
            <View>
              <Skeleton />
              <SpaceComponent width={theme.size[2]} />
            </View>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={listTypeRoom}
        renderItem={renderItem}
        horizontal={true}
        style={{
          gap: theme.size[2],
        }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        extraData={activeType}
      />
    </View>
  );
};

export default React.memo(ListTypeRoom);

const styles = StyleSheet.create({
  container: {},
});
