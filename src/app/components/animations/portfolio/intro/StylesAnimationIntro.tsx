"use client";

import { Box, styled, Typography } from "@mui/material";
import { CSSProperties } from "react";

export const RootAnimationIntro = styled(Box)(({ }) => ({
  alignItems: "center",
  background: "#000",
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  justifyContent: "center",
  overflow: "hidden",
  width: "100vw",
  ":before": {
    background:
      "linear-gradient(to right, #F00, #F00, #F0F0, #0FF, #FF0), #0FF",
    content: '""',
    left: "0",
    height: "100%",
    mixBlendMode: "color",
    pointerEvents: "none",
    position: "absolute",
    top: "0",
    width: "100%",
  },
}));

export const BoxAnimationIntro = styled(Box)(({ }) => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "absolute",
  width: "100%"
}));

export const stylesImgProfile_3: CSSProperties = {
  animation: "animate 5s linear forwards",
  border: "2px solid #F00",
  borderRadius: "50%",
  height: "250px",
  marginBottom: "1rem",
  // position: "absolute",
  // top: "20%",
  width: "250px",
}

export const TypoTitle = styled(Typography)(({ }) => ({
  color: "#DDD",
  // fontSize: "5em",
  letterSpacing: "0.2em",
  margin: 0,
  padding: 0,
  // position: "absolute",
  textAlign: "center",
  // top: "50%",
  // transform: "translateY(-50%)",
  width: "100%",
}));

export const TypoTitleSpan = styled(Box)(() => ({
  animation: "animate 1s linear forwards",
  "@keyframes animate": {
    "0%": {
      filter: "blur(10px)",
      opacity: 0,
      transform: "rotateY(90deg)",
    },
    "100%": {
      filter: "blur(0)",
      opacity: 1,
      transform: "rotateY(0deg)",
    },
  },
  display: "inline-block",
  opacity: 0,
  ":nth-of-type(1)": { animationDelay: "1s" },
  ":nth-of-type(2)": { animationDelay: "2s" },
  ":nth-of-type(3)": { animationDelay: "2.5s" },
  ":nth-of-type(4)": { animationDelay: "3s" },
  ":nth-of-type(5)": { animationDelay: "3.5s" },
  /////////////////////////////////////////////
  ":nth-of-type(6)": { animationDelay: "1s" },
  ":nth-of-type(7)": { animationDelay: "2s" },
  ":nth-of-type(8)": { animationDelay: "2.5s" },
  ":nth-of-type(9)": { animationDelay: "3s" },
  ":nth-of-type(10)": { animationDelay: "3.5s" },
  ":nth-of-type(11)": { animationDelay: "3.75s" },
  ":nth-of-type(12)": { animationDelay: "4s" },
  ":nth-of-type(13)": { animationDelay: "4.5s" },
  ":nth-of-type(14)": { animationDelay: "4.75s" },
  ":nth-of-type(15)": { animationDelay: "5s" },
  ":nth-of-type(16)": { animationDelay: "5.5s" },
}));
