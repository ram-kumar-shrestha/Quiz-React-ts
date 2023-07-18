import React from "react";
import Button from "@mui/material/Button";

type Props = {
  callback: () => void;
  buttonName: string;
  isStartBtn?: boolean;
};

export const StyledButton: React.FC<Props> = ({
  callback,
  buttonName,
  isStartBtn = false,
}) => (
  <Button
    variant="contained"
    onClick={callback}
    sx={{
      fontSize: isStartBtn ? "2em" : "1.2rem",
      padding: isStartBtn ? "1% 10%" : "inherit",
    }}
  >
    {buttonName}
  </Button>
);
