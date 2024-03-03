import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Container } from "../../../components/layout";
import ListTypeRoom from "./components/ListTypeRoom";
import theme from "../../../constants/theme";

const listTypeRoom = [
  { name: "Standard" },
  { name: "Superior" },
  { name: "FamilyRoom" },
  { name: "Delux" },
  { name: "Luxury" },
];

const SearchScreen = () => {
  const [activeType, setActiveType] = useState(listTypeRoom[1].name);
  console.log("🚀 ~ SearchScreen ~ activeType:", activeType);
  return (
    <Container>
      <View style={styles.listTypeRoom}>
        <ListTypeRoom
          listTypeRoom={listTypeRoom}
          activeType={activeType}
          setActiveType={setActiveType}
        />
      </View>
    </Container>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  listTypeRoom: {
    marginHorizontal: -theme.size[4],
  },
});
