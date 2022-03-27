import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ListItem from "./ListItem";

const List = ({ title, results }) => {
  console.log({ title, results });
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ListItem item={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default List;
