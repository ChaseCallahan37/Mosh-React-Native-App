import { Text } from "react-native";
import styles from "../styles/styles";

function AppText({ children, style }) {
  return <Text style={{ ...styles.appText, ...style }}>{children}</Text>;
}

export default AppText;
