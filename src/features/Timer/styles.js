import { StyleSheet } from "react-native";

import { SPACING } from "../../utils/sizes";
import { COLORS } from "../../utils/colors";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: SPACING.md,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: COLORS.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  task: {
    color: COLORS.white,
    textAlign: "center",
  },
  timingWrapper: {
    flex: 0.1,
    flexDirection: "row",
    paddingTop: SPACING.xxl,
  },
  clearSubjectWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
