import { Container, SpaceComponent } from "@/components/layout";
import { GET_ALL_APARTMENT, GET_ALL_TYPE_ROOM } from "@/constants/keySwr";
import theme from "@/constants/theme";
import { useGet } from "@/hooks/helpers/useGet";
import { IRoom, TypeRoom } from "@/models";
import { apartmentsService, typeApartmentService } from "@/services";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ListRoom from "./components/ListRoom";
import ListTypeRoom from "./components/ListTypeRoom";

const SearchScreen = () => {
  const { data: listTypeRoom, isLoading: isLoadingTypeRoom } = useGet<
    TypeRoom[]
  >(GET_ALL_TYPE_ROOM, typeApartmentService.getAll);

  const { data: listApartments, isLoading: isLoadingApartment } = useGet<
    IRoom[]
  >(GET_ALL_APARTMENT, apartmentsService.getAll);

  const [activeType, setActiveType] = useState<string>("All");

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
        <ListRoom
          listRooms={
            activeType === "All"
              ? listApartments
              : listApartments?.filter(
                  (apartment) =>
                    apartment.typeApartment[0].name === activeType.toLowerCase()
                )
          }
          isLoading={isLoadingApartment}
          activeType={activeType}
        />
      </View>
    </Container>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  listTypeRoom: {},
  roomsArea: {},
});
