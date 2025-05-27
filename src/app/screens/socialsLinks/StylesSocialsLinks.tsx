"use client";

import { Box, Button, styled, Typography } from "@mui/material";

// IMGS
const bg_1 = "/assets/imgs/bg_2.jpg";

// Typage des props personnalisées
interface BoxSocialsLinksProps {
  darkMode: boolean;
}

export const RootSocialsLinks = styled(Box)(({ }) => ({
  alignItems: "center",
  backgroundImage: `url(${bg_1})`,
  backgroundSize: "cover",
  display: "flex",
  minHeight: "100vh",
  justifyContent: "center",
  width: "100vw",
}));

export const BoxSocialsLinks = styled(Box, {
  shouldForwardProp: (prop) => prop !== "darkMode", // important pour éviter un warning HTML
})<BoxSocialsLinksProps>(({ darkMode, theme }) => ({
  alignItems: "center",
  background: darkMode ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 238, 255, 0.5)",
  borderRadius: 30,
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  display: "flex",
  flexDirection: "column",
  height: 850,
  justifyContent: "space-evenly",
  padding: 30,
  width: 560,
  [theme.breakpoints.down("sm")]: { borderRadius: 0 },
}));

export const BoxHeader = styled(Box)(({  }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
}));

export const stylesImg = {
  borderRadius: "50%",
  height: 100,
  width: 100,
};

export const TypoTitle = styled(Typography)(({}) => ({
  color: "#FF69B4",
  fontFamily: "Alex_Brush",
  textAlign: "center",
}));

export const Btn = styled(Button)(({}) => ({
  background: "rgba(0, 0, 0, 0.8)",
  border: "2px solid #F0F",
  borderRadius: "25px",
  padding: "10px 20px",
}));

export const TypoBtn = styled(Typography)(({}) => ({
  color: "#F0F",
  fontSize: "18px",
  fontWeight: "bold",
}));
