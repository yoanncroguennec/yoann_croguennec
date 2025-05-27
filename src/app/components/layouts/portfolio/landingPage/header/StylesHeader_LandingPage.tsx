import { Box, styled } from "@mui/material";
import { CSSProperties } from "react";

export const RootHeader_LandingPage = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    padding: "0 40px",
    position: "relative",
    // width: "100vw",
    "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.2)",
        zIndex: 1,
    },
    [theme.breakpoints.down("sm")]: {
        height: "200vh",
        overflow: "hidden",
        padding: "40px 0",
    },
}));

export const stylesVideoBG: CSSProperties = {
    left: 0,
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 0,
}

export const BoxGlobalHeader_LandingPage = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    zIndex: 2,
    [theme.breakpoints.down("sm")]: {
        height: "100%",
        gap: "20px",
    },
}));

export const BoxHeader_LandingPage = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        gap: "20px",
    },
}));

export const BoxContainer = styled(Box)(({ theme }) => ({
    background: "rgba(0, 0, 0, 0.4)",
    borderRadius: "25px",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    color: "#FFF",
    minHeight: "250px",
    minWidth: "450px",
    maxWidth: "550px",
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
        minHeight: "300px",
        minWidth: "350px",
        maxWidth: "350px",
    },
}));

export const Item_data_Personal_Info = styled(Box)(({ }) => ({
    alignItems: "center",
    color: "#FFF",
    display: "flex",
    flexWrap: "nowrap",
    padding: "3px 10px",
}));

export const stylesUrlItem_data_Personal_Info = {
    color: "#FFF",
    cursor: "pointer",
    textDecoration: "none",
}

export const BoxCentral = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        gap: "20px",
    },
}));

export const stylesImgs_Profile_1 = {
    border: "2px solid #000",
    borderRadius: "100%",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    height: "200px",
    width: "200px",
}

export const stylesBtn = {
    borderRadius: "15px 35px",
    cursor: "pointer",
    display: "inline-block",
    margin: "25px 0",
    padding: "20px",
    textDecoration: "none",
    transition: "background 0.3s ease",
}