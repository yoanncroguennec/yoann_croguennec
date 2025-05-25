import { Box, styled, Typography } from "@mui/material";

export const Root = styled(Box)(({ theme, darkMode }) => ({
  alignItems: "center",
  background: darkMode ? "#000" : "#FEF",
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  justifyContent: "space-between",
  overflow: "hidden",
  overflowY: "hidden",
  padding: "10px",
  width: "180vw",
  [theme.breakpoints.down("sm")]: {
    width: "100vw",
  },
}));

export const BoxHeader = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexWrap: "no-wrap",
  justifyContent: "center",
  overflowY: "hidden",
  padding: "10px",
  position: "relative",
  width: "100vw",
  [theme.breakpoints.down("sm")]: {},
}));

export const stylesImgProfile = {
  border: "3px solid #FFF",
  borderRadius: "50%",
  height: "70px",
  width: "70px",
};

// MY LINKS SOCIAL NETWORKS //
export const BoxListIconsForMyLinksSocialNetworks = styled(Box)(
  ({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexWrap: "no-wrap",
    justifyContent: "space-between",
    width: "100vw",
    [theme.breakpoints.down("sm")]: {},
  }),
);

// //
export const BoxLinkPortfolio = styled(Box)(({ theme, darkMode }) => ({
  border: darkMode ? "2px solid #FFF" : "2px solid #000",
  borderRadius: "20px",
  boxShadow: "rgba(255, 0, 0, 0.56) 0px 0px 20px 6px",
  color: "#FFF",
  padding: "15px",
  textAlign: "center",
  width: "80vw",
  [theme.breakpoints.down("sm")]: {},
}));

export const TypoPortfolio = styled(Typography)(({ theme }) => ({
  color: "#FF69B4",
  // fontFamily: "Playwrite_PE_Poppins",
  fontWeight: "bold",
  letterSpacing: "15px",
  marginRight: "25px",
  WebkitTextFillColor: "transparent",
  WebkitTextStrokeWidth: "2px",
  [theme.breakpoints.down("sm")]: {},
}));

export const BoxBtn_CV = styled(Box)(({ theme, darkMode }) => ({
  alignItems: "center",
  border: darkMode ? "2px solid #FFF" : "2px solid #000",
  borderRadius: "50%",
  boxShadow: "rgba(255, 0, 0, 0.56) 0px 22px 70px 4px",
  color: "#FFF",
  display: "flex",
  height: "60px",
  justifyContent: "center",
  textAlign: "center",
  width: "60px",
  [theme.breakpoints.down("sm")]: {},
}));
