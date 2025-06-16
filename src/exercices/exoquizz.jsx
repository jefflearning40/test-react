import React, { useState } from 'react';

const questions = [
  {
    question: 'quelle est la couleur du cheval blanc d henry IV',
    choices: ['Rouge', 'vert', 'blanc', 'noir'],
    correctAnswer: 'blanc'
  },
  {
    question: "qui de l'oeuf ou la poule est arrive en premier ?",
    choices: ["eouf", "poule", "poussin", "coq"],
    correctAnswer: 'poule'
  },
  {
    question: 'pourquoi ?',
    choices: ['Parceque', 'je sais pas', "c'est comme ca", "pardon?"],
    correctAnswer: "c'est comme ca"
  }
];

const Question = ({ question, choices, onAnswer }) => {
  return (
    <div>
      <h2>{question}</h2>
      <div>
        {choices.map((choice, index) => (
          <button key={index} onClick={() => onAnswer(choice)}>
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
};

export default function ExoQuizz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div>
      {showScore ? (
        <div>
          <h1>Quiz terminé</h1>
          <p>Votre score : {score} / {questions.length}</p>
          <button onClick={resetQuiz}>Recommencer</button>
        </div>
      ) : (
        <Question
          question={questions[currentQuestion].question}
          choices={questions[currentQuestion].choices}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
}
