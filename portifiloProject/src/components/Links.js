import React from "react";

import { Text, Card } from "@rneui/themed";
import { StyleSheet, View, ScrollView } from "react-native";
import { Icon } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";



export default function LinksCard(props) {
  return (
    <View style={styles.container}>
      <Ionicons
        size={30}
        color="orange"
        name="logo-facebook"
        type="ionicon"
        onPress={() => {
          Linking.openURL("https://www.facebook.com");
        }}
      />
      <Ionicons
        size={30}
        name="logo-twitter"
        type="ionicon"
        color="orange"
        onPress={() => {
          Linking.openURL("https://www.twitter.com");
        }}
      />
      <Ionicons
        size={30}
        name="logo-instagram"
        type="ionicon"
        color="orange"
        onPress={() => {
          Linking.openURL("https://www.instagram.com");
        }}
      />
      <Ionicons
        size={30}
        name="logo-linkedin"
        type="ionicon"
        color="orange"
        onPress={() => {
          Linking.openURL("https://www.linkedin.com");
        }}
      />
      <Ionicons
        size={30}
        name="logo-whatsapp"
        type="ionicon"
        color="orange"
        onPress={() => {
          Linking.openURL("https://www.whatsapp.com");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "black",
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
  },
});
