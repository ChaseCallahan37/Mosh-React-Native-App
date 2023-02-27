import { Image, View } from "react-native";
import styles from "../styles/styles";

function ViewImageScreen(props) {
  return (
    <View style={styles.viewImageContainer}>
      <View style={{ ...styles.icon, ...styles.closeIcon }}></View>
      <View style={{ ...styles.icon, ...styles.deleteIcon }}></View>

      <Image
        //set resize mode to make image fit with nice resolution
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/person-skiing.jpg")}
      />
    </View>
  );
}

export default ViewImageScreen;
