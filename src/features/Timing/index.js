import React from "react";
import { View } from "react-native";
import { RoundedButton } from "../../components/RoundedButton";

import { Styles } from "./styles";

export const Timing = ({ onChangeTime }) => (
  <>
    <View style={Styles.timingButton}>
      <RoundedButton size={75} title="10" onPress={() => onChangeTime(10)} />
    </View>
    <View style={Styles.timingButton}>
      <RoundedButton size={75} title="15" onPress={() => onChangeTime(15)} />
    </View>
    <View style={Styles.timingButton}>
      <RoundedButton size={75} title="20" onPress={() => onChangeTime(20)} />
    </View>
  </>
);
