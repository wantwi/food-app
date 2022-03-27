import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.wrapper}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        style={styles.inputStyle}
        placeholder="search"
        value={term}
        onChangeText={(e) => onTermChange(e)}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#f0eeee",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 20,
    flexDirection: "row",
    marginTop: 15,
  },
  inputStyle: {
    // borderColor: "black",
    // borderWidth: 1,
    fontSize: 18,
    flex: 1,
  },
  icon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default SearchBar;
