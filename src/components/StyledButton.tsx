import React from "react";
import Button from "@mui/material/Button";

type Props = {
  callback: () => void;
  buttonName: string;
};

export const StyledButton: React.FC<Props> = ({ callback, buttonName }) => (
  <Button variant="contained" onClick={callback} sx={{ fontSize: "1.2rem" }}>
    {buttonName}
  </Button>
);
