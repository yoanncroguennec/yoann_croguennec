"use client";

import React, { useRef, useState, useEffect } from "react";
import { InputAdornment, TextField } from "@mui/material";
import QRCode from "react-qr-code";
// ICONS
import { FaInternetExplorer } from "react-icons/fa";
// STYLES
import {
  BtnGenerateCodeQR,
  RootQR_Code_Generate,
  TypoGenerateCodeQR,
  TypoTitle,
} from "./StylesQR_Code_Generate";

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
    <RootQR_Code_Generate qrVisible={qrVisible}>
      <TypoTitle variant="h5">Générer un Code QR</TypoTitle>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FaInternetExplorer style={{ color: "#000", fontSize: "25px" }} />
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
            color: "#000",
            fontSize: "18px", // ✅ taille du texte saisi
            "::placeholder": {
              color: "#000",
              opacity: 1,
              fontSize: "18px", // ✅ taille du placeholder
              fontWeight: "bold",
            },
          },
          label: {
            color: "#000",
            fontSize: "18px", // ✅ taille du label
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#000",
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

      <BtnGenerateCodeQR onClick={GenerateQrCode_Handler} variant="text">
        <TypoGenerateCodeQR variant="h6">Générer Code QR</TypoGenerateCodeQR>
      </BtnGenerateCodeQR>

      {qrVisible && (
        <QRCode size={150} style={{ marginTop: "20px" }} value={value} />
      )}
    </RootQR_Code_Generate>
  );
}
