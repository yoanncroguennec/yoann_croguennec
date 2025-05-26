"use client";

import { Box, Button, styled, Typography } from "@mui/material";
import { shouldForwardProp } from "@mui/system";

// Typage des props personnalisées
interface RootQR_Code_GenerateProps {
  qrVisible: boolean;
}

// Empêche la prop `qrVisible` d’être transmise au DOM
export const RootQR_Code_Generate = styled(Box, {
  shouldForwardProp: (prop) => prop !== "qrVisible",
})<RootQR_Code_GenerateProps>(({ qrVisible }) => ({
  alignItems: "center",
  background: "rgba(255, 255, 255, 1)",
  borderRadius: "25px",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  height: !qrVisible ? "300px" : "500px",
  maxWidth: "500px",
  minHeight: "300px",
  padding: "25px",
  width: "100%",
}));

export const TypoTitle = styled(Typography)({
  color: "#000",
  textAlign: "center",
});

export const BtnGenerateCodeQR = styled(Button)({
  border: "2px solid #F0F",
  borderRadius: "25px",
  padding: "10px 20px",
});

export const TypoGenerateCodeQR = styled(Typography)({
  color: "#000",
});
