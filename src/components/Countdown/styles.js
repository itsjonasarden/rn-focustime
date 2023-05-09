import { StyleSheet } from "react-native";

import { FONTSIZE, SPACING } from "../../utils/sizes";
import { COLORS } from "../../utils/colors";

export const Styles = StyleSheet.create({
  text: {
    fontSize: FONTSIZE.xxxl,
    fontWeight: "bold",
    color: COLORS.white,
    padding: SPACING.lg,
    backgroundColor: "rgba(94, 132, 226, 0.3)",
  },
});
