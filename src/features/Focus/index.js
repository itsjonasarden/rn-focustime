import React, { useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

import { RoundedButton } from "../../components/RoundedButton";

import { Styles } from "./styles";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={Styles.container}>
      <View style={Styles.inputContainer}>
        <TextInput onChangeText={setSubject} style={Styles.textInput} label="What would you like to focus on?" />
        <View style={Styles.button}>
          <RoundedButton title="+" size={50} onPress={() => addSubject(subject)} />
        </View>
      </View>
    </View>
  );
};
