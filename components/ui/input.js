import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Bu kısmı projenize uygun şekilde değiştirebilirsiniz

export const Input = ({ label, textInputConfig, icon }) => {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultine);
  }

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.inputContainer}>
        {icon && <FontAwesome name={icon} size={24} style={styles.icon} />}
        <TextInput {...textInputConfig} style={inputStyles} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  icon: {
    marginRight: 8,
    marginLeft: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    height: 40,
    flex: 1,
    paddingHorizontal: 8,
  },

  inputMultine: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
