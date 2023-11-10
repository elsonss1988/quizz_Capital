import { Pressable, Text } from "react-native";

type Props = {
  answer: String;
};

export default function buttomMenu({ answer }: Props) {
  return (
    <Pressable>
      <Text>{answer}</Text>
    </Pressable>
  );
}
