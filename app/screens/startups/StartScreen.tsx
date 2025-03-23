import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function StartScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Start</Text>
        <Text style={styles.title}>Your</Text>
        <Text style={styles.title}>Rides</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.signUpText}>
            Don’t have an account?{" "}
            <Text style={styles.signUpLink}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    paddingHorizontal: 20,
    gap: 60,
    backgroundColor: "#F9F9F9",
  },
  title: {
    fontSize: 44,
    fontWeight: "bold",
    color: "#000",
    letterSpacing: 4,
  },
  signInButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 20,
  },
  signInText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  signUpText: {
    fontSize: 14,
    color: "#666",
  },
  signUpLink: {
    color: "#6200EE",
    fontWeight: "bold",
  },
});

export default StartScreen;
