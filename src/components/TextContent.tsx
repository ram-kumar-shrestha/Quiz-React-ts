import React from "react";
import Typography from "@mui/material/Typography";

type Props = {
  data?: string;
  isScore?: boolean;
  htmldata?: string;
};

export const TextContent: React.FC<Props> = ({
  data,
  isScore = false,
  htmldata,
}) => (
  <Typography
    paragraph={true}
    sx={{
      fontSize: isScore ? "1.3em" : "1.1em",
      fontWeight: isScore ? "550" : "500",
      margin: "0.3em",
    }}
    dangerouslySetInnerHTML={htmldata ? { __html: htmldata } : undefined}
  >
    {data}
  </Typography>
);
