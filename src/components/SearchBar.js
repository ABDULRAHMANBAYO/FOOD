import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({term,onTermChange, onTermSubmit}) => {
  return (
    <View style={style.backgroundStyle}>
      <Feather name="search" style={style.iconStyle} />
      <TextInput style={style.inputStyle} placeholder="Search" 
      value={term}
      onChangeText ={onTermChange}
      autoCorrect={false}
      autoCapitalize="none"
      onEndEditing={ onTermSubmit}/>
    </View>
  );
};

const style = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 15,
    marginBottom:10,
  },
  inputStyle: {
    fontSize: 18,
    flex: 1,
  },
  iconStyle: {
    fontSize: 35,
    // color: "black",
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
