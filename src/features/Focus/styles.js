import { StyleSheet } from "react-native";
import { SPACING } from "../../utils/sizes";

export const Styles = StyleSheet.create({
  container: {},
  textInput: {
    flex: 1,
    marginRight: SPACING.sm,
  },
  button: {
    justifyContent: "center",
  },
  inputContainer: {
    padding: SPACING.lg,
    justifyContent: "top",
    flexDirection: "row",
  },
});
