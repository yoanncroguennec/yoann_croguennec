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
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function isValidURL(str: string): boolean {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  }

  function formatUrl(url: string): string {
    if (!/^https?:\/\//i.test(url)) {
      return "https://" + url;
    }
    return url;
  }

  function GenerateQrCode_Handler() {
    const formattedUrl = formatUrl(value);

    if (!value || !isValidURL(formattedUrl)) {
      inputRef.current?.focus();
      setError("Veuillez entrer une URL valide.");
      setQrVisible(false);
      return;
    }

    setError(null);
    setValue(formattedUrl);
    setQrVisible(true);
  }

  useEffect(() => {
    if (!value) {
      setQrVisible(false);
      setError(null);
    }
  }, [value]);

  return (
    <RootQR_Code_Generate qrVisible={qrVisible}>
      <TypoTitle variant="h5">Générer un Code QR</TypoTitle>

      <TextField
        inputRef={inputRef}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FaInternetExplorer style={{ color: "#000", fontSize: "25px" }} />
            </InputAdornment>
          ),
          sx: {
            fontSize: "18px",
          },
        }}
        inputProps={{
          "aria-label": "Champ pour entrer l'URL à convertir en QR code",
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
            fontSize: "18px",
            "::placeholder": {
              color: "#000",
              opacity: 1,
              fontSize: "18px",
              fontWeight: "bold",
            },
          },
          label: {
            color: "#000",
            fontSize: "18px",
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

      {error && (
        <p style={{ color: "red", marginTop: 8, fontSize: "14px" }}>{error}</p>
      )}

      <BtnGenerateCodeQR onClick={GenerateQrCode_Handler} variant="text">
        <TypoGenerateCodeQR variant="h6">Générer Code QR</TypoGenerateCodeQR>
      </BtnGenerateCodeQR>

      {qrVisible && (
        <div style={{ marginTop: "20px", width: "100%", maxWidth: 200 }}>
          <QRCode value={value} style={{ width: "100%" }} />
        </div>
      )}
    </RootQR_Code_Generate>
  );
}
