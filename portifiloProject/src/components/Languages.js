import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button, LinearProgress, Tile } from "@rneui/themed";

export default function Languages() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={{ marginTop: 20, marginLeft: 5, fontSize: 20, color: "white" }}>
        Languages
      </Text>
      <View style={{ margin: 10 }}>
        <Text style={{ color: "white" }}>Arabic</Text>
        <LinearProgress color="orange" style={{ marginVertical: 10 }} value={0.7} />
        <Text style={{ color: "white" }}>English</Text>
        <LinearProgress color="orange" style={{ marginVertical: 10 }} value={0.6} />
        <Text style={{ color: "white" }}>Germany</Text>
        <LinearProgress color="orange" value={.3} style={{ marginVertical: 10 }} />
        <Text style={{ color: "white" }}>Spanish</Text>
        <LinearProgress color="orange"  style={{ marginVertical: 10 }} value={0.5} variant="determinate"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "black",
    justifyContent: "center",
  },
});
