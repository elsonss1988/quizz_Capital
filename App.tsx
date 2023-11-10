import React, { useState } from "react";
import { SafeAreaView, View, Text, Alert } from "react-native";
import Play from "./src/screen/Play";
import { globalStyles } from "./globalStyle";
import { quizzes } from "./src/repository/quizz_capital";

export default function App() {
  let dataAtual = new Date();
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
    <>
      <SafeAreaView style={globalStyles.container}>
        <View style={globalStyles.questionView}>
          <Text style={globalStyles.title}>
            {quizzes[questionNumber].question}?
          </Text>
        </View>
        <Play isRight={() => isRight()} questionNumber={questionNumber} />
      </SafeAreaView>
      <View style={globalStyles.footerView}>
        <Text style={globalStyles.footerText}>@{dataAtual.getFullYear()}</Text>
      </View>
    </>
  );
}
