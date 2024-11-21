import React from "react";

type IQuestionParams = {
  nextQuestionId: number;
  questionItem: {
    question: string;
    answerOptions: { text: string; isCorrect: boolean }[];
  };
  handleClickAnswer: (value: any) => void;
};
const Question = ({
  nextQuestionId,
  questionItem,
  handleClickAnswer,
}: IQuestionParams) => {
  return (
    <div>
      <span style={{ fontWeight: "bold" }}>
        Q.{nextQuestionId + 1} {questionItem.question}
      </span>
      <ul
        style={{
          gap: "5px",
          display: "grid",
          gridTemplateColumns: "120px 120px",
        }}
      >
        {questionItem.answerOptions.map(
          (value: { text: string; isCorrect: boolean }, index: number) => {
            return (
              <button
                key={value.text}
                className="optionAnswer"
                onClick={() => handleClickAnswer(value)}
              >
                {value.text}
              </button>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Question;
