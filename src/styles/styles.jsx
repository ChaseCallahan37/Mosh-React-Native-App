import { StyleSheet } from "react-native";
import colors from "./colors";

const { primary, secondary, black } = colors;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  blueCircle: {
    backgroundColor: "dodgerblue",
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "royalblue",
    borderRadius: 50,
  },
  closeIcon: {
    backgroundColor: primary,
    top: 40,
    left: 30,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: "100%",
    height: 70,
  },
  deleteIcon: {
    backgroundColor: secondary,
    top: 40,
    right: 30,
  },
  icon: {
    width: 50,
    height: 50,
    position: "absolute",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  loginButton: {
    backgroundColor: primary,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    alignItems: "center",
    top: 70,
  },
  registerButton: {
    backgroundColor: secondary,
  },
  shadow: {
    shadowColor: "grey",
    shadowOffset: { width: -10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  viewImageContainer: {
    backgroundColor: black,
    flex: 1,
  },
});

export default styles;
