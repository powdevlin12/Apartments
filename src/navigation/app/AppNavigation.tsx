import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleProp, StyleSheet, TextStyle } from "react-native";
import { AccountScreen } from "../../screens/app/account";
import { SavedScreen } from "../../screens/app/saved";
import { SearchScreen } from "../../screens/app/search";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import theme from "../../constants/theme";

type AppStackParamList = {
  Search: undefined;
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
    <Tab.Navigator initialRouteName="Search">
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="search" size={24} color={colorIcon(focused)} />
          ),
          tabBarLabelStyle,
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name={focused ? "heart" : "hearto"}
              size={24}
              color={colorIcon(focused)}
            />
          ),
          tabBarLabelStyle,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name={focused ? "user-circle" : "user-circle-o"}
              size={24}
              color={colorIcon(focused)}
            />
          ),
          tabBarLabelStyle,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
