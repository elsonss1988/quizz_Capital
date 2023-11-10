import { StyleSheet } from "react-native";
import { ThemeType } from "./src/@type/theme";

interface Props {
  theme: ThemeType;
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `${({ theme }: Props) => theme.COLORS.Black}`,
  },
});
