import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ListItem = ({ item }) => {
  return (
    <View>
      <Image style={styles.imageStyle} source={{ uri: item.url }} />
      <Text style={styles.name}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    borderRadius: 4,
    height: 200,
  },
  name: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
export default ListItem;
