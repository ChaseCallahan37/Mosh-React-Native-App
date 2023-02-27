import { View, Image, ImageBackground, Text } from "react-native";
import styles from "../styles/styles";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/snowy-background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/goggles.jpg")} />
        <Text>Sell what you dont need</Text>
      </View>
      <View style={{ ...styles.btn, ...styles.loginButton }}></View>
      <View style={{ ...styles.btn, ...styles.registerButton }}></View>
    </ImageBackground>
  );
}

export default WelcomeScreen;
