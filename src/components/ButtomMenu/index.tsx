import { Pressable, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  answer: String;
  isRightQuestion: () => void;
};

export default function buttomMenu({ answer, isRightQuestion }: Props) {
  return (
    <Pressable style={styles.buttomMenu} onPress={isRightQuestion}>
      <Text style={styles.textMenu}>{answer}</Text>
    </Pressable>
  );
}
