import React from "react";

import { Text, Card, Button } from "@rneui/themed";
import { StyleSheet, View, ScrollView } from "react-native";
// import { Button } from "react-native";

// import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function Information() {
  return (
    <View>
      <View style={styles.container}>
        <Button color="orange">Age:</Button>
        <Text style={{ color: "white" }}>25</Text>
      </View>
      <View style={styles.container}>
        <Button color="orange">Resedince:</Button>
        <Text style={{ color: "white" }}>Assuit</Text>
      </View>
      <View style={styles.container}>
        <Button color="orange">Freelancer:</Button>
        <Text style={{ color: "white" }}>Available</Text>
      </View>
      <View style={styles.container}>
        <Button color="orange">Address:</Button>
        <Text style={{ color: "white" }}>Assiut,Egypt</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginRight: 40,
    marginLeft: 40,
    color: "white",
  },
  butt:{
    // backgroundColor: ora,
  }
});
