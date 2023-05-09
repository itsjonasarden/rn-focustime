import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";

export const Styles = (size) => ({
  radius: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLORS.white,
    borderWidth: 2,
  },
  text: { color: COLORS.white, fontSize: size / 3 },
});
