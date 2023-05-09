import React, { useState } from "react";
import { View, Text, Vibration } from "react-native";
import { ProgressBar } from "react-native-paper";
import { useKeepAwake } from "expo-keep-awake";

import { Countdown } from "../../components/Countdown";
import { RoundedButton } from "../../components/RoundedButton";
import { Timing } from "../Timing";

import { Styles } from "./styles";

import { SPACING } from "../../utils/sizes";
import { COLORS } from "../../utils/colors";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.countdown}>
        <Countdown minutes={minutes} isPaused={!isStarted} onProgress={setProgress} onEnd={onEnd} />
        <View style={{ paddingTop: SPACING.xxl }}>
          <Text style={Styles.title}>Focusing on:</Text>
          <Text style={Styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: SPACING.sm }}>
        <ProgressBar progress={progress} color={COLORS.lightBlue} style={{ height: SPACING.sm }} />
      </View>
      <View style={Styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={Styles.buttonWrapper}>
        {!isStarted ? (
          <RoundedButton title="Start" onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title="Stop" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={Styles.clearSubjectWrapper}>
        <RoundedButton size={50} title="-" onPress={clearSubject} />
      </View>
    </View>
  );
};
