import * as React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export const StyledTypography = styled("h1")(({ theme }) => ({
  ...theme.typography.button,
  fontSize: "1.5em",
  fontWeight: "600",
  marginBlockEnd: "0.5em",
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));
