import React, { useCallback } from "react";
import { FlatList, ListRenderItem, StyleSheet, View } from "react-native";
import { IRoom } from "../../../../models";
import { Room } from "../../../../components/room";
import theme from "@/constants/theme";
import { SpaceComponent } from "@/components/layout";

interface ListRoomProps {
  listRooms: IRoom[] | undefined;
  isLoading: boolean;
}

const ListRoom = ({ listRooms, isLoading }: ListRoomProps) => {
  const renderItem: ListRenderItem<IRoom> = useCallback(
    ({ item }) => (
      <View style={{ marginBottom: theme.size[4] }}>
        <Room room={item as IRoom} />
      </View>
    ),
    []
  );

  if (isLoading) {
    return null;
  }

  return (
    <View style={styles.conatiner}>
      <FlatList
        data={listRooms}
        renderItem={renderItem}
        style={{
          gap: theme.size[2],
          marginTop: theme.size[2],
        }}
        keyExtractor={(item) => item.name}
        extraData={listRooms}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<SpaceComponent height={theme.size[5]} />}
      />
    </View>
  );
};

export default ListRoom;

const styles = StyleSheet.create({
  conatiner: {},
});
