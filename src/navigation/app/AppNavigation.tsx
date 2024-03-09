import { BadgeNavigation } from "@/components/badge";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import theme from "../../constants/theme";
import { AccountScreen } from "../../screens/app/account";
import { SavedScreen } from "../../screens/app/saved";
import { ApartmentNavigation } from "./apartment";

type AppStackParamList = {
  Apartment: undefined;
  Saved: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<AppStackParamList>();
const colorIcon = (focused: boolean) =>
  focused ? theme.colors.primary : theme.colors.secondary;

const tabBarLabelStyle = {
  fontSize: theme.fontSize.note,
  fontFamily: theme.fontFamilies.PoppinsSemiBold,
};

const AppNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Apartment">
      <Tab.Screen
        name="Apartment"
        component={ApartmentNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <FontAwesome name="search" size={24} color={colorIcon(focused)} />
            ) : (
              <BadgeNavigation name="Search" />
            ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <AntDesign
                name={focused ? "heart" : "hearto"}
                size={24}
                color={colorIcon(focused)}
              />
            ) : (
              <BadgeNavigation name="Save" />
            ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <FontAwesome
                name={focused ? "user-circle" : "user-circle-o"}
                size={24}
                color={colorIcon(focused)}
              />
            ) : (
              <BadgeNavigation name="Account" />
            ),
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
