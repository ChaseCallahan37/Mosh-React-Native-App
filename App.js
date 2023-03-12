import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import AppText from "./src/components/AppText";
import globalStyles from "./src/styles/styles";
import MailIcon from "./src/components/MailIcon";
import AppButton from "./src/components/AppButton";
import Card from "./src/components/Card";
import ListingDetailScreen from "./src/screens/ListingDetailScreen";
import MessagesScreen from "./src/screens/MessagesScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AccountScreen from "./src/screens/AccountScreen";
import ListingsScreen from "./src/screens/ListingsScreen";
export default function App() {
  return (
    <GestureHandlerRootView>
      <ListingsScreen />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
