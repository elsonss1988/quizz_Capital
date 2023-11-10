import { StyleSheet } from "react-native";
import { ThemeType } from "./src/@type/theme";

interface Props {
  theme: ThemeType;
}
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "stretch",
    backgroundColor: `${({ theme }: Props) => theme.COLORS.Black}`,
  },
  questionView: {
    backgroundColor: "#00FF99",
    width: "90%",
    alignSelf: "center",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    margin: 10,
    textAlign: "center",
  },
  footerView: {
    //alignSelf: "center",
    backgroundColor: "#FF0099",
    // width: "80%",
    // marginBottom: 20,
    //borderRadius: 10,
  },
  footerText: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "700",
    padding: 20,
    marginBottom: 10,
    color: "#FFFFFF",
  },
});
