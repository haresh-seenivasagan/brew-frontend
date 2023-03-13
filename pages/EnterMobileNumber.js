import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import { Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
// import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import { useState } from "react";
export default function EnterMobileNumber() {
  const [text, setText] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const handleMobileNumberChange = (text) => {
    setMobileNumber(text);
  };
  return (
    <View style={{ backgroundColor: "#284958", flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          paddingTop: 30,
          paddingLeft: 20,
        }}
      >
        <Image
          source={require("/Users/icebox/Desktop/brew-app/brew-frontend/assets/Vector.png")}
          style={{ alignSelf: "flex-start" }}
        />
      </View>
      <View
        style={{
          flex: 5,
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: -20,
        }}
      >
        <Text
          style={{
            fontFamily: "Optima",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: 34,
            lineHeight: 41,
            color: "#EBE0D6",
          }}
        >
          Enter Mobile number
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            paddingTop: 79,
          }}
        >
          <TextInput
            color="#EBE0D63D"
            keyboardType="numeric"
            placeholderTextColor="#EBE0D63D"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChangeText={handleMobileNumberChange}
            style={{
              height: 40,
              marginBottom: 10,
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#EBE0D63D",
            }}
          ></TextInput>
          <Text style={{ color: "#EBE0D6", marginTop: 19 }}>
            By creating your account or signing in, you agree to our
          </Text>
          <Text
            style={{ color: "#C7AD91" }}
            onPress={() => Linking.openURL("http://google.com")}
          >
            Terms and Conditions & Privacy Policy
          </Text>
          <View style={{ flex: 3, justifyContent: "flex-end" }}>
            <KeyboardAvoidingView behavior="position">
              <TouchableOpacity
                style={{
                  color: "#EBE0D6",
                  borderWidth: 1,
                  borderColor: "#EBE0D63D",
                  borderRadius: 50,
                  paddingHorizontal: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20,
                  height: 64,
                  marginBottom: 30,
                }}
              >
                <Text style={{ color: "#EBE0D6" }}>Send Code</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        </View>
      </View>
    </View>
  );
}
