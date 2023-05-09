import React from "react";

import { TouchableOpacity, Text } from "react-native";

import { Styles } from "./styles";

export const RoundedButton = ({ style = {}, textStyle = {}, size = 125, ...props }) => {
  return (
    <TouchableOpacity style={[Styles(size).radius, style]} onPress={props.onPress}>
      <Text style={[Styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};
