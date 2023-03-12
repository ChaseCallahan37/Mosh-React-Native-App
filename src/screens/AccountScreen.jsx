import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import Card from "../components/Card";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemContainer from "../components/ListItemContainer";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeperator from "../components/ListItemSeperator";
import SettingItem from "../components/SettingItem";
import colors from "../styles/colors";
import Screen from "./Screen";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen} background="soft">
      <View style={styles.container}>
        <ListItem
          title={"Chase Callahan"}
          subTitle={"chasetcallahan@gmail.com"}
          image={require("../assets/chase.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menu) => menu.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title={"Log Out"}
        IconComponent={
          <Icon name={"logout"} backgroundColor={colors.tertiary} />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  screen: {
    backgroundColor: colors.soft,
  },
});

export default AccountScreen;

{
  /* <SettingItem
        icon={"format-list-bulleted"}
        iconColor="primary"
        message={"My Listings"}
      />
      <SettingItem
        icon={"email"}
        iconColor={"secondary"}
        message={"My Messages"}
      />
      <SettingItem
        style={{ marginTop: 20 }}
        icon={"logout"}
        iconColor={"tertiary"}
        message={"Logout"}
      /> */
}

{
  /* <FlatList
    data={options}
    keyExtractor={(option) => option.id.toString()}
    renderItem={({ item, index }) => (
      
      <ListItemContainer
        onPress={() => console.log("Message selected", item)}
        renderRightActions={() => (
          <ListItemDeleteAction onPress={() => handleDelete(item)} />
        )}
      >
        <AppText>HIS</AppText>
      </ListItemContainer>
    )}
    ItemSeparatorComponent={ListItemSeperator}
  /> */
}
