import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import AppNavigation from "./src/navigation/app/AppNavigation";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import store from "@/store";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
