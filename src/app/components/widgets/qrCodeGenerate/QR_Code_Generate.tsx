"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import QRCode from "react-qr-code";
// ICONS
import { FaInternetExplorer } from "react-icons/fa";

export default function QR_Code_Generate() {
  const [value, setValue] = useState<string>("");
  const [qrVisible, setQrVisible] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function isValidURL(str: string): boolean {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  }

  function GenerateQrCode_Handler() {
    if (!value || !isValidURL(value)) {
      inputRef.current?.focus();
      alert("Veuillez entrer une URL valide.");
      return;
    }
    setQrVisible(true);
  }

  useEffect(() => {
    if (!value) {
      setQrVisible(false);
    }
  }, [value]);

  return (
    <Box
      sx={{
        alignItems: "center",
        background: "rgba(0, 0, 0, 1)",
        borderRadius: "25px",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: !qrVisible ? "300px" : "500px",
        minHeight: "300px",
        padding: "25px",
        width: "100%",
        maxWidth: "500px",
      }}
    >
      <Typography sx={{ color: "#FFF", textAlign: "center" }} variant="h5">
        Générer un Code QR
      </Typography>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FaInternetExplorer style={{ color: "#FFF", fontSize: "25px" }} />
            </InputAdornment>
          ),
          sx: {
            fontSize: "18px", // taille du texte saisi
          },
        }}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            GenerateQrCode_Handler();
          }
        }}
        label="Entrez une Url"
        placeholder="https://exemple.com"
        sx={{
          width: "100%",
          input: {
            color: "#FFF",
            fontSize: "18px", // ✅ taille du texte saisi
            "::placeholder": {
              color: "#FFF",
              opacity: 1,
              fontSize: "18px", // ✅ taille du placeholder
              fontWeight: "bold",
            },
          },
          label: {
            color: "#FFF",
            fontSize: "18px", // ✅ taille du label
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#FFF",
            },
            "&:hover fieldset": {
              borderColor: "#00CFFF",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#00CFFF",
            },
          },
        }}
        type="text"
        value={value}
        variant="outlined"
      />

      <Button
        onClick={GenerateQrCode_Handler}
        sx={{ border: "2px solid #F0F", borderRadius: "25px", padding: "10px 20px" }}
        variant="text"
      >
        <Typography sx={{ color: "#FFF" }} variant="h6">
          Générer Code QR
        </Typography>
      </Button>

      {qrVisible && (
        <Box sx={{ marginTop: "20px" }}>
          <QRCode size={150} value={value} />
        </Box>
      )}
    </Box>
  );
}
