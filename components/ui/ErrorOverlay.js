import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button } from "./Button";

export const ErrorOverlay = ({ message, onConfirm }) => {
  return (
    <View>
      <Text>En Error Occured</Text>
      <Text style={[styles.text, styles.title]}>{message}</Text>
      <Text style={styles.text}>En Error Occured</Text>
      <Button onPress={onConfirm}>Okay</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "purple",
  },
  text: {
    textAlign: "center",
    marginBottom: 8,
    color: "white",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  message: {},
});
