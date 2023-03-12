import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import Card from "../components/Card";
import Profile from "../components/Profile";
import colors from "../styles/colors";
import globalStyles from "../styles/styles";
import ListItem from "../components/ListItem";

function ListingDetailScreen(props) {
  return (
    <View style={{ ...styles.container }}>
      <Image style={styles.image} source={require("../assets/fire.jpg")} />

      <View style={styles.detailContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/person-skiing.jpg")}
            title="Mosh Hamedani"
            subTitle="I go vroom"
          />
        </View>
      </View>
    </View>
  );
}

export default ListingDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

// import { View, Image, StyleSheet } from "react-native";
// import Card from "../components/Card";
// import Profile from "../components/Profile";
// import globalStyles from "../styles/styles";

// function ListingDetailScreen(props) {
//   return (
//     <View style={{ ...styles.container }}>
//       <Card
//         image={require("../assets/fire.jpg")}
//         price="2000"
//         subTitle={"Please buy this"}
//       />
//       <Profile
//         name={"Chicken Galore"}
//         listings={5}
//         image={require("../assets/chick-fil-a.jpg")}
//       />
//     </View>
//   );
// }

// export default ListingDetailScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
