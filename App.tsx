import React from "react";
import { SafeAreaView } from "react-native";
import Play from "./src/screen/Play";
import { styles } from "./globalStyle";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Play />
    </SafeAreaView>
  );
}
