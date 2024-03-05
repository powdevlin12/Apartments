import React from "react";
import { StyleSheet, View } from "react-native";
import { IRoom } from "../../../../models";
import { Room } from "../../../../components/room";

interface ListRoomProps {
  listRooms: IRoom[];
}

const ListRoom = ({ listRooms }: ListRoomProps) => {
  return (
    <View style={styles.conatiner}>
      <Room room={listRooms[0]} />
    </View>
  );
};

export default ListRoom;

const styles = StyleSheet.create({
  conatiner: {},
});
