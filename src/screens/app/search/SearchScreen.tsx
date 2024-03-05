import { Container, SpaceComponent } from "@/components/layout";
import { IRoom, TypeRoom } from "@/models";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import ListTypeRoom from "./components/ListTypeRoom";
import theme from "@/constants/theme";
import ListRoom from "./components/ListRoom";
import { useGet } from "@/hooks/helpers/useGet";
import { apartmentsService, typeApartmentService } from "@/services";
import { capitalizeFirstLetter } from "@/utils";
import { GET_ALL_APARTMENT, GET_ALL_TYPE_ROOM } from "@/constants/keySwr";

const SearchScreen = () => {
  const { data: listTypeRoom, isLoading: isLoadingTypeRoom } = useGet<
    TypeRoom[]
  >(GET_ALL_TYPE_ROOM, typeApartmentService.getAll);

  const { data: listApartments, isLoading: isLoadingApartment } = useGet<
    IRoom[]
  >(GET_ALL_APARTMENT, apartmentsService.getAll);

  const [activeType, setActiveType] = useState<string>("");

  useEffect(() => {
    if (listTypeRoom) {
      setActiveType(capitalizeFirstLetter(listTypeRoom[0].name));
    }
  }, [listTypeRoom]);

  return (
    <Container>
      <View style={styles.listTypeRoom}>
        <ListTypeRoom
          listTypeRoom={listTypeRoom}
          activeType={activeType}
          setActiveType={setActiveType}
          isLoading={isLoadingTypeRoom}
        />
      </View>
      <SpaceComponent height={theme.size[3]} />
      <View style={styles.roomsArea}>
        <ListRoom listRooms={listApartments} isLoading={isLoadingApartment} />
      </View>
    </Container>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  listTypeRoom: {},
  roomsArea: {},
});
