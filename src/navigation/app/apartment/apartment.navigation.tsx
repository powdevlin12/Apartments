import { DetailApartment } from "@/screens/app/detail-apartment";
import { SearchScreen } from "@/screens/app/search";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";

export type ApartmentParamList = {
  SearchScreen: undefined;
  DetailApartment: {
    apartment: string;
  };
};

const ApartmemtStack = createStackNavigator<ApartmentParamList>();

export default function ApartmentNavigation() {
  return (
    <ApartmemtStack.Navigator
      initialRouteName="SearchScreen"
      screenOptions={{ gestureEnabled: true }}
    >
      <ApartmemtStack.Screen
        key={"SearchScreen"}
        name={"SearchScreen"}
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <ApartmemtStack.Screen
        key={"DetailApartment"}
        name={"DetailApartment"}
        component={DetailApartment}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </ApartmemtStack.Navigator>
  );
}
