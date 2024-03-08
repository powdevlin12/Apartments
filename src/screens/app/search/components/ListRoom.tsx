import React, { useCallback } from "react";
import { FlatList, ListRenderItem, StyleSheet, View } from "react-native";
import { IRoom } from "../../../../models";
import { Room } from "../../../../components/room";
import theme from "@/constants/theme";
import { SpaceComponent } from "@/components/layout";
import Skeleton from "@/components/skeleton/Skeleton";
import { HEIGHT, WIDTH } from "@/constants/dimemsion";
import { NotData } from "@/components/not-data";

interface ListRoomProps {
  listRooms: IRoom[] | undefined;
  isLoading: boolean;
}

const ListRoom = ({ listRooms, isLoading }: ListRoomProps) => {
  const renderItem: ListRenderItem<IRoom> = useCallback(
    ({ item }) => (
      <View style={{ marginBottom: theme.size[4] }}>
        <Room room={item} />
      </View>
    ),
    []
  );

  if (isLoading) {
    return (
      <FlatList
        data={Array.from({ length: 6 }, (_, index) => index + 1)}
        renderItem={() => (
          <View>
            <Skeleton
              width={WIDTH - 2 * theme.size[4]}
              height={HEIGHT * 0.25}
              borderRadius={theme.border.medium}
            />
            <SpaceComponent height={theme.size[4]} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    );
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
        ListEmptyComponent={
          <NotData content="This type doesn't have any rooms yet" />
        }
      />
    </View>
  );
};

export default ListRoom;

const styles = StyleSheet.create({
  conatiner: {},
});
