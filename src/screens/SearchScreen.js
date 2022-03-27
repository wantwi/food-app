import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import List from "../components/List";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { error, isLoading, onTermSubmit, results } = useResults();

  const filerResultByIds = (logic) => {
    switch (logic) {
      case 1:
        return results.filter((x) => x.id <= 200);
        break;

      case 2:
        return results.filter((x) => x.id > 200 && x.id < 400);
        break;
      case 3:
        return results.filter((x) => x.id > 400);
        break;
      default:
        return results;
    }
  };

  return (
    <View>
      <SearchBar
        term={searchTerm}
        onTermChange={(newTerm) => setSearchTerm(newTerm)}
        onTermSubmit={onTermSubmit}
      />

      {isLoading ? <Text>Loading</Text> : null}

      {error === "" || undefined ? null : <Text>{error}</Text>}

      {isLoading ? null : <Text>We found {results.length} photos</Text>}
      <List title="Cost Effective" results={filerResultByIds(1)} />
      <List title="Bit Price" results={filerResultByIds(2)} />
      <List title="Big Spender" results={filerResultByIds(3)} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
