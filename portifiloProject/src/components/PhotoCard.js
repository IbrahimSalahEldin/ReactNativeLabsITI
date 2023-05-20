import React from "react";

import { Text, Card } from "@rneui/themed";
import { StyleSheet, View, ScrollView } from "react-native";

// import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function PhotoCard(props) {
  return (
    // <View style={styles.container}>
    <Card backgroundColor="black">
      <Card.Image
        style={{
          padding: 0,
          borderRadius: 100,
          marginBottom: 20,
          width: 200,
          height: 200,
          marginLeft: 70,
        }}
        source={{
          uri: "https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg",
        }}
      />
      <Card.Divider />
      <Card.Title style={{ color: "orange" }}>{props.name}</Card.Title>
      <Card.Title style={{ marginBottom: 10 ,color: "orange" }}>{props.description}</Card.Title>
    </Card>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "black",
  },
});
