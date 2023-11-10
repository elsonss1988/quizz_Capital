import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Alert,
  Pressable,
  FlatList,
  Button,
} from "react-native";
import { styles } from "../../../globalStyle";
import { quizzes } from "../../repository/find_quizz";
import ButtomMenu from "../../components/ButtomMenu";
import { useState } from "react";

interface Props {
  item: String;
}

quizzes.forEach((it) => console.log(it));

export default function Play() {
  const [questionNumber, setQuestionNumber] = useState(0);

  function isRight() {
    if (questionNumber <= quizzes.length - 2) {
      Alert.alert(`Você acertou !!! ${questionNumber}`);
      setQuestionNumber(questionNumber + 1);
    } else {
      Alert.alert("Chegamos ao final S2 !!!");
      setQuestionNumber(0);
    }
  }

  return (
    <View style={styles.container}>
      <Text>{quizzes[questionNumber].question} ?</Text>
      <Pressable onPress={isRight}>
        <Text>{quizzes[questionNumber].answerA}</Text>
      </Pressable>
      <Pressable onPress={isRight}>
        <Text> {quizzes[questionNumber].answerB}</Text>
      </Pressable>
      <Pressable onPress={isRight}>
        <Text> {quizzes[questionNumber].answerC}</Text>
      </Pressable>
      <Pressable onPress={isRight}>
        <Text> {quizzes[questionNumber].answerD}</Text>
      </Pressable>
    </View>
  );
}
