import { Container, Card } from "@mui/material";
import styled from "@emotion/styled";
import BgImg from "./images/background.jpg";

export const StyledContainer = styled(Container)(({ theme }) => ({
  position: "relative",
  textAlign: "center",
  paddingBlock: "2%",
  height: "100dvh",
  maxWidth: "50% !important",
  margin: "0 auto",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100svw",
    height: "100svh",
    transform: "translate(-50%, -50%)",
    background: `url(${BgImg}) center/cover no-repeat`,
    zIndex: -1,
    filter: "blur(0.2em)",
  },
  "@media (max-width: 600px)": {
    maxWidth: "100% !important",
    paddingInline: "5%",
  },
}));

export const StyledCard = styled(Card)(() => ({
  padding: "3% 10%",
  maxHeight: "90%",
  overflowY: "auto",
}));
