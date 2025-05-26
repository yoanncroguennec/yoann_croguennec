"use client";

import { Box, Button, styled, Typography } from "@mui/material";

export const RootModal_Share = styled(Box)(({}) => ({
  background: "rgba(0, 0, 0, 0.7)",
  backdropFilter: "blur(5px)",
  border: "2px solid #FFF",
  borderRadius: "15px",
  padding: "10px 20px",
  position: "absolute",
  zIndex: 999,
}));

export const TypoTitle = styled(Typography)(({}) => ({
  color: "#000",
  textAlign: "center",
}));

export const BtnGenerateCodeQR = styled(Button)(({}) => ({
  border: "2px solid #F0F",
  borderRadius: "25px",
  padding: "10px 20px",
}));

export const TypoGenerateCodeQR = styled(Typography)(({}) => ({
  color: "#000",
}));
