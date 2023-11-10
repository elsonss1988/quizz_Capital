import { Text, View, Alert, FlatList } from "react-native";
import ButtomMenu from "../../components/ButtomMenu";
import { useState } from "react";
import { quizzes } from "../../repository/quizz_capital";
import { styles } from "./styles";

interface Props {
  questionNumber: number;
  isRight: () => void;
}

export default function Play({ isRight, questionNumber }: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={quizzes[questionNumber].possibleAnswer}
        keyExtractor={(item) => item}
        renderItem={(item) => (
          <ButtomMenu isRightQuestion={() => isRight()} answer={item.item} />
        )}
      />
      {/* {quizzes[questionNumber].posibleAnswer.map((it, index) => (
        <ButtomMenu id={index} isRightQuestion={() => isRight()} answer={it} />
      ))} */}
    </View>
  );
}
