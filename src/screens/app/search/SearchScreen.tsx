import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { IRoom, TypeRoom } from "../../../../models";
import { Container, SpaceComponent } from "../../../components/layout";
import theme from "../../../constants/theme";
import ListRoom from "./components/ListRoom";
import ListTypeRoom from "./components/ListTypeRoom";

const listTypeRoom: TypeRoom[] = [
  { name: "Standard" },
  { name: "Superior" },
  { name: "FamilyRoom" },
  { name: "Delux" },
  { name: "Luxury" },
];

const listRooms: IRoom[] = [
  {
    bed: 2,
    image: [
      "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
      "https://www.oppeinhome.com/upload/image/product/thumb/20211009/white-grey-beige-modern-hotel-wood-grain1.jpg",
      "https://www.cvent.com/sites/default/files/styles/focus_scale_and_crop_800x450/public/image/2021-10/hotel%20room%20with%20beachfront%20view.jpg?h=662a4f7c&itok=7Laa3LkQ",
    ],
    maxPeople: 4,
    name: "Phòng 1.1",
    price: 120000,
    service: [
      {
        icon: "wifi",
        name: "Wifi",
        description: "",
      },
      {
        icon: "snow",
        name: "AC",
        description: "",
      },
      {
        icon: "tv-outline",
        name: "TV",
        description: "",
      },
    ],
    utilities: [
      "10 gói cafe miễn phí",
      "Ăn sáng tại khách sạn miễn phí",
      "Giảm giá mua sắp tại mall bên cạnh",
    ],
  },
];

const SearchScreen = () => {
  const [activeType, setActiveType] = useState(listTypeRoom[1].name);
  return (
    <Container>
      <View style={styles.listTypeRoom}>
        <ListTypeRoom
          listTypeRoom={listTypeRoom}
          activeType={activeType}
          setActiveType={setActiveType}
        />
      </View>
      <SpaceComponent height={theme.size[3]} />
      <View style={styles.roomsArea}>
        <ListRoom listRooms={listRooms} />
      </View>
    </Container>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  listTypeRoom: {
    marginHorizontal: -theme.size[4],
  },
  roomsArea: {},
});
