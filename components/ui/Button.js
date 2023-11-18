import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";

export const Button = ({ children, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed ? "#4e4e4e" : "#6e6e6e",
            shadowOpacity: pressed ? 0.8 : 0.3,
          },
        ]}
        onPress={onPress}
      >
        <View>
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  button: {
    flex: 1,
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#000",
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
});
