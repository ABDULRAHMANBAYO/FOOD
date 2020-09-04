import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ResultList from "./ResultList";
const ResultDetails = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.name}>
        {result.rating} Stars,{result.review_count} Reviews
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imageStyle: {
    height: 150,
    width: 250,
    borderRadius: 2,
    marginBottom:5
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default ResultDetails;
