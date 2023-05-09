import { StyleSheet } from "react-native";

import { COLORS } from "../../utils/colors";
import { FONTSIZE, SPACING } from "../../utils/sizes";

export const Styles = StyleSheet.create({
  container: {
    padding: SPACING.lg,
    flex: 1,
  },
  title: {
    color: COLORS.white,
    fontSize: FONTSIZE.md,

    fontWeight: "bold",
  },
  item: {
    color: COLORS.white,
    fontSize: FONTSIZE.md,
    paddingTop: SPACING.sm,
  },
});
