import { useState } from "react";
import questions from "./constants/questions";
import "./App.css";
import Question from "./components/Question";
import Results from "./components/Results";

function App() {
  const [nextQuestionId, setNexQuestionId] = useState(0);
  const [answers, setAnswers] = useState<
    { question: String; isCorrect: Boolean; response: String }[]
  >([]);
  const [showAnswers, setShowAnswers] = useState(false);

  const handleClickAnswer = (value: { text: string; isCorrect: boolean }) => {
    setNexQuestionId(nextQuestionId + 1);

    setAnswers([
      ...answers,
      {
        question: questions[nextQuestionId].question,
        isCorrect: value.isCorrect,
        response: value.text,
      },
    ]);
  };
  const initializeGame = () => {
    setNexQuestionId(0);
    setAnswers([]);
    setShowAnswers(false);
  };
  return (
    <div className="App">
      <h1>Quizz App</h1>
      {nextQuestionId < questions.length ? (
        <Question
          nextQuestionId={nextQuestionId}
          questionItem={questions[nextQuestionId]}
          handleClickAnswer={(e: any) => handleClickAnswer(e)}
        />
      ) : (
        <Results
          answers={answers}
          questions={questions}
          showAnswers={showAnswers}
          setShowAnswers={(value: boolean) => setShowAnswers(value)}
          initializeGame={() => initializeGame()}
        />
      )}
    </div>
  );
}

export default App;
