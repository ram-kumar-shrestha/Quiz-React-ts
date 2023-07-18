import React, { useEffect, useState } from "react";
import { QuestionCard } from "./components/QuestionCard";
import Grid from "@mui/material/Grid";

import { Difficulty, fetchQuestions, QuestionState } from "./Api";
import { StyledCard, StyledContainer } from "./App.styles";
import { StyledButton } from "./components/StyledButton";
import { TextContent } from "./components/TextContent";
import { Title } from "./components/title/Title";
import { Spinner } from "./components/Spinner";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY);

    setQuestions(newQuestions);
    setGameStarted(true);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);

    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;

      const correct = questions[number].correct_answer === answer;

      correct && setScore((prev) => prev + 1);

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
      setGameStarted(false);

      return;
    }
    setNumber(nextQuestion);
  };

  return (
    <StyledContainer>
      <Title />
      {gameOver ? (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: "90%" }}
        >
          <StyledButton
            buttonName="Start"
            callback={startTrivia}
            isStartBtn={true}
          />
        </Grid>
      ) : null}

      {loading ? <Spinner /> : null}

      {gameStarted ? (
        <StyledCard>
          {!gameOver ? (
            <TextContent data={"Score: " + score} isScore={true} />
          ) : null}

          {!loading && !gameOver ? (
            <QuestionCard
              questionNr={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            />
          ) : null}

          {!gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS ? (
            <StyledButton callback={nextQuestion} buttonName="Next Question" />
          ) : null}
        </StyledCard>
      ) : null}
    </StyledContainer>
  );
}

export default App;
