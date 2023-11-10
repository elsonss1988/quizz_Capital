export class Quizz {
  question: String;
  answerA: String;
  answerB: String;
  answerC: String;
  answerD: String;

  constructor(
    question: String,
    answerA: String,
    answerB: String,
    answerC: String,
    answerD: String
  ) {
    this.question = question;
    this.answerA = answerA;
    this.answerB = answerB;
    this.answerC = answerC;
    this.answerD = answerD;
  }
}
