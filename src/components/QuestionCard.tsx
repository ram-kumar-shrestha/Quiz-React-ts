import React from "react";
import { AnswerObject } from "../App";
import { TextContent } from "./TextContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

export const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  questionNr,
  userAnswer,
  totalQuestions,
}) => (
  <Box>
    <TextContent
      data={`
      Question:  ${questionNr} / ${totalQuestions}
    `}
    />

    <TextContent htmldata={question} />

    <Box>
      {answers.map((answer) => (
        <Box key={answer}>
          <Button
            variant="contained"
            disabled={userAnswer ? true : false}
            onClick={callback}
            fullWidth
            sx={{
              marginBlockEnd: "1.5em",
              padding: "2%",
              fontSize: "1em",
              color: userAnswer ? "common.white" : "inherit",
              backgroundColor: userAnswer ? "#ff4081" : "#55c2da",
              transition: "all 0.5s",
              "&:hover": {
                backgroundColor: userAnswer ? "#ff4081" : "#5adbb5",
              },
            }}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </Button>
        </Box>
      ))}
    </Box>
  </Box>
);
