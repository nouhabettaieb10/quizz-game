type IResultsParams = {
  answers: { question: String; isCorrect: Boolean; response: String }[];
  questions: {
    question: String;
    answerOptions: { text: string; isCorrect: Boolean }[];
  }[];
  showAnswers: boolean;
  setShowAnswers: (value: boolean) => void;
  initializeGame: () => void;
};
const Results = ({
  answers,
  questions,
  showAnswers,
  setShowAnswers,
  initializeGame,
}: IResultsParams) => {
  return (
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
              const correctAnswer = questions[index].answerOptions.find(
                (a) => a.isCorrect
              );
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
                  <b>
                    {!value.isCorrect
                      ? `- ${correctAnswer ? correctAnswer.text : ""}`
                      : ""}
                  </b>
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
  );
};

export default Results;
