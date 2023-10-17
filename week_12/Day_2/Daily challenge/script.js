const express = require("express");
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

let currentQuestionIndex = 0;
let score = 0;

router.get("/", (req, res) => {
  res.send(`<h1>${triviaQuestions[0].question}</h1>
              <form method="POST" action="/quiz">
                <input type="text" name="answer" required>
                <button type="submit">Submit</button>
              </form>`);
});

router.post("/", (req, res) => {
  const userAnswer = req.body.answer;
  const currentQuestion = triviaQuestions[currentQuestionIndex];

  if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
    score += 1;
  }

  currentQuestionIndex += 1;

  if (currentQuestionIndex < triviaQuestions.length) {
    const nextQuestion = triviaQuestions[currentQuestionIndex].question;
    res.send(`<h1>${nextQuestion}</h1>
                <form method="POST" action="/quiz">
                  <input type="text" name="answer" required>
                  <button type="submit">Submit</button>
                </form>`);
  } else {
    res.redirect("/quiz/score");
  }
});

router.get("/score", (req, res) => {
  res.send(`<h1>Your Score: ${score}</h1>`);
});

module.exports = router;
