import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import styles from "./src/styles/styles";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.shadow, ...styles.blueCircle }}></View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "dodgerblue",
          ...styles.shadow,
        }}
      ></View>
    </View>
  );
}
