import React from "react";
import { CircularProgress, Box } from "@mui/material";

export const Spinner: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="75vh"
    >
      <CircularProgress size={150} style={{ color: "#fefefe" }} />
    </Box>
  );
};
