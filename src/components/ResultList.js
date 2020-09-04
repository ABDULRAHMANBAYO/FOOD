import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultDetails from "./ResultsDetails";

const ResultList = ({ title, results }) => {
  return (
    <View>
      <Text style={style.titleStyle}>{title}</Text>
      <FlatList
        keyExtractor={(result) => result.id}
        horizontal
        data={results}
        renderItem={({ item }) => {
          return <ResultDetails result={item} />;
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const style = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom:5
  },
});

export default ResultList;
