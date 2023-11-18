import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ iconName, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, { opacity: pressed ? 0.7 : 1 }]}
      onPress={onPress}
    >
      <View>
        <Ionicons name={iconName} size={23} color="red" />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 3,
    alignItems: "center",
    borderRadius: 5,
    marginRight: 15,
    backgroundColor: "#fff",
    elevation: 2,
  },
});

export default IconButton;
