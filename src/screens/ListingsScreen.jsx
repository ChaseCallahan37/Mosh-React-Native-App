import { FlatList, StyleSheet, View } from "react-native";
import Screen from "./Screen";
import AppText from "../components/AppText";
import Card from "../components/Card";
import ItemListing from "../components/ItemListing";
import ListItem from "../components/ListItem";
import colors from "../styles/colors";

const listings = [
  {
    id: 1,
    title: "Red Jacket for Sale",
    price: 100,
    image: require("../assets/cool-chair.jpg"),
  },
  {
    id: 2,
    image: require("../assets/goggles.jpg"),
    title: "Goggles for Sale",
    price: 40,
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`$${item.price}`}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  listContainer: {
    display: "flex",
    alignItems: "stretch",
    width: "90%",
  },
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;

{
  /* <Screen>
  <View style={styles.listContainer}>
    <FlatList
      data={listings}
      renderItem={({ item }) => (
        <ListItem
          image={item.image}
          subTitle={`$${item.price}`}
          title={item.title}
        />
      )}
    />
  </View>
</Screen>; */
}
