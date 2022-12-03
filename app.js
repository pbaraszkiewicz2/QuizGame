const express = require("express");
const path = require('path');

const app = express();

app.listen(3000, () => {
  console.log(
    "Server is listening at localhost http://localhost:3000/ Let's play a game!"
  );
});

app.use(express.static(
path.join(__dirname, 'public')
));

let goodAnswers = 0;
let callToAFriendUsed = false;
let questionToTheCrowdUsed = false;
let fiftyFifty = false;

const questions = [
  {
    question: "Test question number 1",
    answers: [
      "Test answer 1",
      "Test answer 2",
      "Test answer 3",
      "Test answer 4",
    ],
    correctAnswer: 3,
  },
  {
    question: "Test question number 2",
    answers: [
      "Test answer 1",
      "Test answer 2",
      "Test answer 3",
      "Test answer 4",
    ],
    correctAnswer: 2,
  },
  {
    question: "Test question number 3",
    answers: [
      "Test answer 1",
      "Test answer 2",
      "Test answer 3",
      "Test answer 4",
    ],
    correctAnswer: 1,
  },
  {
    question: "Test question number 4",
    answers: [
      "Test answer 1",
      "Test answer 2",
      "Test answer 3",
      "Test answer 4",
    ],
    correctAnswer: 0,
  },
];

app.get("/question", (req, res) => {
  if (goodAnswers === questions.length) {
    res.json({ winner: true });
  } else {
    const nextQuestion = questions[goodAnswers];
    const{question, answers} = nextQuestion;
    res.json({
        question, answers,
    });
  }
});
