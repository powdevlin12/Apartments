import {
  ColumnComponent,
  Container,
  DividerComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
} from "@/components/layout";
import { TextComponent } from "@/components/text";
import TitleComponent from "@/components/text/TitleComponent";
import theme from "@/constants/theme";
import { IRoom } from "@/models";
import { ApartmentParamList } from "@/navigation/app/apartment/apartment.navigation";
import { capitalizeFirstLetter } from "@/utils";
import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import { fontFamilies } from "../../../constants/theme/fontFamilies";
import { Facillities } from "./components";
import Utility from "./components/Utility";

const space = theme.size[4];
type DetailApartmentRouteProp = RouteProp<
  ApartmentParamList,
  "DetailApartment"
>;

const DetailApartment = () => {
  const route = useRoute<DetailApartmentRouteProp>();
  const { apartment } = route.params;
  const apartmentData = useRef<IRoom>(JSON.parse(apartment));
  const {
    _id,
    bed,
    images,
    max_people,
    name,
    price,
    status,
    typeApartment,
    service,
    utilities,
  } = apartmentData.current;

  return (
    <Container>
      <SectionComponent>
        <TitleComponent text={name} size={theme.fontSize.titleLarge} />
        <TextComponent
          text={`${bed} bed, ${max_people} people, type apartment : ${capitalizeFirstLetter(
            typeApartment[0].name
          )}`}
          color={theme.colors.secondary}
        />
      </SectionComponent>
      <DividerComponent />
      <SectionComponent>
        <SpaceComponent height={theme.size[3]} />
        <TextComponent
          text="Facillities"
          font={theme.fontFamilies.PoppinsSemiBold}
          size={theme.fontSize.paragraphLarge}
        />
        <RowComponent justifyContent="flex-start">
          <Facillities icon={{ name: "snow" }} name="AC" />
          <Facillities icon={{ name: "wifi" }} name="Wifi" />
          <Facillities icon={{ name: "tv-outline" }} name="TV" />
          <Facillities icon={{ name: "wine" }} name="MiniBar" />
        </RowComponent>
      </SectionComponent>
      <DividerComponent />
      {utilities && (
        <SectionComponent>
          <SpaceComponent height={theme.size[3]} />
          <TextComponent
            text="Utilities"
            font={theme.fontFamilies.PoppinsSemiBold}
            size={theme.fontSize.paragraphLarge}
          />
          <RowComponent justifyContent="space-between">
            <ColumnComponent alignItems="flex-start">
              <Utility content={utilities[0].name} />
              <Utility content={utilities[1].name} />
            </ColumnComponent>
            <ColumnComponent alignItems="flex-start">
              <Utility content={utilities[0].name} />
              <Utility content={utilities[1].name} />
            </ColumnComponent>
          </RowComponent>
        </SectionComponent>
      )}
    </Container>
  );
};

export default DetailApartment;

const styles = StyleSheet.create({
  container: {},
});
