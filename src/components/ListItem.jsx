import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import colors from "../styles/colors";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import ListItemDeleteAction from "./ListItemDeleteAction";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress = () => console.log("List item implemented without onPress!!!!"),
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.medium}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.textContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 14,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  textContainer: {
    flexDirection: "column",
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
