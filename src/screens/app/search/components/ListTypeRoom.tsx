import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { TypeRoom } from "../../../../models";
import theme from "../../../../constants/theme";
import { Badge } from "../../../../components/badge";
import { capitalizeFirstLetter } from "@/utils";

interface ListTypeRoomProps {
  listTypeRoom: TypeRoom[] | undefined;
  setActiveType: React.Dispatch<React.SetStateAction<string>>;
  activeType: string;
}
const ListTypeRoom = ({
  listTypeRoom,
  activeType,
  setActiveType,
}: ListTypeRoomProps) => {
  const renderItem: ListRenderItem<TypeRoom> = useCallback(
    ({ item }) => (
      <Badge
        title={capitalizeFirstLetter(item.name)}
        active={item.name === activeType}
        setActiveType={setActiveType}
      />
    ),
    [activeType]
  );
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
