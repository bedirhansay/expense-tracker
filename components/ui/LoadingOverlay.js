import React from "react";
import { Text, ActivityIndicator, StyleSheet, View } from "react-native";

export const LoadingOverlay = () => {
  return (
    <View>
      <ActivityIndicator size="large" color="white" />
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
});
