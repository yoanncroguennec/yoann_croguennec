"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinShareButton,
  EmailShareButton,
  LinkedinIcon,
  EmailIcon,
} from "react-share";
import { FiSun, FiMoon, FiUser } from "react-icons/fi";
import { IoIosMore } from "react-icons/io";
import { motion } from "framer-motion";

// STYLES
import {
  BoxBtn_CV,
  BoxLinkPortfolio,
  TypoPortfolio,
} from "./StylesListOfLinks";
import dataLinks from "@/app/utils/constants/data/dataLinks";
import handleSplitStringUsingRegex from "@/app/utils/helpers/functions/handleSplitStringUsingRegex";

// IMGS
const bg_1 = "/assets/imgs/bg_1.jpeg";
const imgProfile = "/assets/imgs/img_profile_1.jpeg";

const textMyPresentation =
  "Yoann Croguennec, 37 ans, ayant obtenu un BTS de développeur web et web mobile, puis un niveau Licence. Spécialisé dans la création de site internet (React JS, Next JS), mais également dans la création d'application pour téléphone portable IOS & Android (React native).";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

export default function Home() {
  const [openModalShare, setOpenModalShare] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [shareUrl, setShareUrl] = useState("");

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const textChars = handleSplitStringUsingRegex(textMyPresentation);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
  }, []);

  return (
    <Box
      sx={{
        alignItems: "center",
        backgroundImage: `url(${bg_1})`,
        backgroundSize: "cover",
        display: "flex",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          background: matches
            ? "transparent"
            : darkMode
              ? "rgba(0, 0, 0, 0.5)"
              : "rgba(255, 238, 255, 0.5)",
          borderRadius: matches ? 0 : 3,
          display: "flex",
          height: matches ? "100%" : 770,
          justifyContent: "center",
          padding: matches ? 0 : 3,
          width: matches ? "100%" : 560,
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            width: "100%",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Link href="#">
              <FiUser color={darkMode ? "#FFF" : "#000"} size={40} />
            </Link>
            <Image
              alt="Photo de profil"
              src={imgProfile}
              width={600}
              height={600}
              style={{
                border: `2px solid ${darkMode ? "#FFF" : "#000"}`,
                borderRadius: "50%",
                height: 100,
                width: 100,
              }}
            />
            <Box>
              <Box onClick={() => setOpenModalShare(!openModalShare)}>
                <IoIosMore color={darkMode ? "#FFF" : "#000"} size={40} />
              </Box>
              <Box onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? (
                  <FiSun color="#FFF" size={30} />
                ) : (
                  <FiMoon color="#000" size={30} />
                )}
              </Box>
            </Box>
          </Box>

          {/* Share Modal */}
          {openModalShare && (
            <Box
              sx={{
                position: "absolute",
                zIndex: 999,
                background: "rgba(255, 255, 255, 0.06)",
                backdropFilter: "blur(5px)",
                border: "2px solid #FFF",
                borderRadius: "15px",
                padding: "10px 20px",
              }}
            >
              <Typography variant="h5" sx={{ color: "red", mb: 1 }}>
                Partager sur
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 2,
                }}
              >
                <FacebookShareButton url={shareUrl}>
                  <FacebookIcon round size={35} />
                </FacebookShareButton>
                <LinkedinShareButton url={shareUrl}>
                  <LinkedinIcon round size={35} />
                </LinkedinShareButton>
                <EmailShareButton url={shareUrl}>
                  <EmailIcon round size={35} />
                </EmailShareButton>
              </Box>
            </Box>
          )}

          {/* Titre */}
          <Typography
            variant="h4"
            sx={{
              color: "#FF69B4",
              fontFamily: "Alex_Brush",
              textAlign: "center",
            }}
          >
            Développeur FullStack
          </Typography>

          {/* Réseaux sociaux */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              width: "100%",
              gap: 2,
              mt: 2,
            }}
          >
            {dataLinks.map(({ name, icon, url }) => (
              <Link href={url} key={name}>
                <Image
                  src={icon}
                  alt={name}
                  width={60}
                  height={60}
                  style={{ objectFit: "contain" }}
                />
              </Link>
            ))}
          </Box>

          {/* Présentation animée */}
          <Box
            component={motion.div}
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.015 }}
            sx={{ mt: 2, px: 2, textAlign: "justify" }}
          >
            {textChars.map((char, idx) => (
              <Typography
                key={idx}
                component={motion.span}
                variants={charVariants}
                transition={{ duration: 3 }}
                sx={{ color: darkMode ? "#FFF" : "#000" }}
              >
                {char}
              </Typography>
            ))}
          </Box>

          {/* Liens Portfolio + CV */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Link href="https://portfolio-4zu2.vercel.app/">
              <BoxLinkPortfolio
                sx={{ border: `2px solid ${darkMode ? "#FFF" : "#000"}` }}
              >
                <TypoPortfolio variant="body2">
                  PORTFOLIO(Présentation des projets, compétences et parcours
                  professionnel)
                </TypoPortfolio>
              </BoxLinkPortfolio>
            </Link>
            <Link href="https://portfolio-4zu2.vercel.app/cv_pdf/CV_PDF">
              <BoxBtn_CV>
                <Typography
                  variant="h5"
                  sx={{ color: darkMode ? "#FFF" : "#000", fontWeight: "bold" }}
                >
                  CV
                </Typography>
              </BoxBtn_CV>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
