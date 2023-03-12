import { View, Image, ImageBackground, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import globalStyles from "../styles/styles";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/snowy-background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.image}
          source={require("../assets/cool-chair.jpg")}
        />
        <AppText style={styles.tagLine}>Sell what you dont need</AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton color="secondary">Login</AppButton>
        <AppButton>Register</AppButton>
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  image: {
    width: "100%",
    maxHeight: 200,
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

// import { View, Image, ImageBackground } from "react-native";
// import AppButton from "../components/AppButton";
// import AppText from "../components/AppText";
// import styles from "../styles/styles";

// function WelcomeScreen(props) {
//   return (
//     <ImageBackground
//       style={styles.background}
//       source={require("../assets/snowy-background.jpg")}
//     >
//       <View style={styles.logoContainer}>
//         <Image style={styles.logo} source={require("../assets/goggles.jpg")} />
//         <AppText style={{ color: "black" }}>Sell what you dont need</AppText>
//       </View>
//       <AppButton style={styles.primaryBtn}>Login</AppButton>
//       <AppButton style={styles.secondaryBtn}>Register</AppButton>
//     </ImageBackground>
//   );
// }

// export default WelcomeScreen;

// import { View, Image, ImageBackground } from "react-native";
// import AppButton from "../components/AppButton";
// import AppText from "../components/AppText";
// import styles from "../styles/styles";

// function WelcomeScreen(props) {
//   return (
//     <ImageBackground
//       style={styles.background}
//       source={require("../assets/snowy-background.jpg")}
//     >
//       <View style={styles.logoContainer}>
//         <Image style={styles.logo} source={require("../assets/goggles.jpg")} />
//         <AppText style={{ color: "black" }}>Sell what you dont need</AppText>
//       </View>
//       <AppButton style={styles.primaryBtn}>Login</AppButton>
//       <AppButton style={styles.secondaryBtn}>Register</AppButton>
//     </ImageBackground>
//   );
// }

// export default WelcomeScreen;

// // import { View, Image, ImageBackground } from "react-native";
// // import AppButton from "../components/AppButton";
// // import AppText from "../components/AppText";
// // import styles from "../styles/styles";

// // function WelcomeScreen(props) {
// //   return (
// //     <ImageBackground
// //       style={styles.background}
// //       source={require("../assets/snowy-background.jpg")}
// //     >
// //       <View style={styles.logoContainer}>
// //         <Image style={styles.logo} source={require("../assets/goggles.jpg")} />
// //         <AppText style={{ color: "black" }}>Sell what you dont need</AppText>
// //       </View>
// //       <AppButton style={styles.primaryBtn}>Login</AppButton>
// //       <AppButton style={styles.secondaryBtn}>Register</AppButton>
// //     </ImageBackground>
// //   );
// // }

// // export default WelcomeScreen;
