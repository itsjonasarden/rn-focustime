import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { Focus } from "./src/features/Focus";
import { Timer } from "./src/features/Timer";
import { FocusHistory } from "./src/features/FocusHistory";

import { COLORS } from "./src/utils/colors";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer focusSubject={currentSubject} onTimerEnd={(subject) => setHistory(...history, subject)} clearSubject={() => setCurrentSubject(null)} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: COLORS.darkBlue,
  },
});
