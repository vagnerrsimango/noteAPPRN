import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = (props) => {
  return (
    <View style={styles.main}>
      <Text style={styles.txt}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    margin: 15,
  },
  txt: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
});

export default Header;
