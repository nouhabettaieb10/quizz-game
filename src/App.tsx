import { useState } from "react";
import questions from "./constants/questions";
import "./App.css";

function App() {
  const [nextQuestionId, setNexQuestionId] = useState(0);
  const [answers, setAnswers] = useState<
    { question: String; isCorrect: Boolean; response: String }[]
  >([]);
  const [showAnswers, setShowAnswers] = useState(false);

  const handleClickAnswer = (
    e: any,
    value: { text: string; isCorrect: boolean }
  ) => {
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
        <div>
          <span style={{ fontWeight: "bold" }}>
            Q.{nextQuestionId + 1} {questions[nextQuestionId].question}
          </span>
          <ul
            style={{
              gap: "5px",
              display: "grid",
              gridTemplateColumns: "120px 120px",
            }}
          >
            {questions[nextQuestionId].answerOptions.map(
              (value: { text: string; isCorrect: boolean }, index: number) => {
                return (
                  <button
                    key={value.text}
                    className="optionAnswer"
                    onClick={(e: any) => handleClickAnswer(e, value)}
                  >
                    {value.text}
                  </button>
                );
              }
            )}
          </ul>
        </div>
      ) : (
        <div className="Answers">
          <span>You finished the quiz ! </span>{" "}
          <span style={{ color: "blue", fontWeight: "bold" }}>
            {answers.filter((x) => x.isCorrect).length}/{questions.length}
          </span>
          {!showAnswers ? (
            <button
              style={{ width: "120px", padding: "20px", margin: "20px" }}
              onClick={() => setShowAnswers(true)}
            >
              Get answers
            </button>
          ) : (
            <div>
              {answers.map(
                (
                  value: {
                    question: String;
                    isCorrect: Boolean;
                    response: String;
                  },
                  index: number
                ) => {
                  return (
                    <div key={index}>
                      <span
                        style={{
                          color: value.isCorrect ? "green" : "red",
                          fontWeight: "bold",
                          marginRight: "10px",
                        }}
                      >
                        {value.question}
                      </span>
                      <span>{value.response}</span>
                    </div>
                  );
                }
              )}
            </div>
          )}
          <button
            style={{ width: "120px", padding: "20px", margin: "20px" }}
            onClick={() => initializeGame()}
          >
            Replay the quizz
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
