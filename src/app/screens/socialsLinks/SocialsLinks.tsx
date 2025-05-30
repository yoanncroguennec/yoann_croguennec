"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
// COMPONENTS
import Modal_Share from "../../components/layouts/customs/modals/Modal_Share";
// FUNCTIONS
import handleSplitStringUsingRegex from "../../utils/helpers/functions/handleSplitStringUsingRegex";
// DATAS
import dataSocialsLinks from "../../utils/constants/data/dataSocialsLinks";
// ICONS
import { FiMoon, FiSun, FiUser } from "react-icons/fi";
import { IoIosMore } from "react-icons/io";
// STYLES
import {
  BoxHeader,
  BoxSocialsLinks,
  Btn,
  RootSocialsLinks,
  stylesImg,
  TypoBtn,
  TypoTitle,
} from "./StylesSocialsLinks";
import { BoxBtn_CV } from "../../StylesListOfLinks";

// IMGS
const imgProfile = "/assets/imgs/img_profile_1.jpeg";

export default function SocialsLinks_Screen() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [openModalShare, setOpenModalShare] = useState<boolean>(false);
  //
  const textMyPresentation =
    "Yoann Croguennec, 37 ans, ayant obtenu un BTS de développeur web et web mobile, puis un niveau Licence. Spécialisé dans la création de site internet (React JS, Next JS), mais également dans la création d'application pour téléphone portable IOS & Android (React native).";

  const textChars = handleSplitStringUsingRegex(textMyPresentation);

  //
  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  return (
    <RootSocialsLinks>
      <BoxSocialsLinks darkMode={darkMode}>
        <BoxHeader>
          <Link href="/screens/admin/dashboard">
            <FiUser color={darkMode ? "#FFF" : "#000"} size={40} />
          </Link>
          <Image
            alt="Photo de profil"
            height={600}
            src={imgProfile}
            style={{
              ...stylesImg,
              border: `2px solid ${darkMode ? "#FFF" : "#000"}`,
            }}
            width={600}
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
        </BoxHeader>

        {/* MODAL SHARE */}
        <Modal_Share openModalShare={openModalShare} />

        {/* Titre */}
        <TypoTitle variant="h4">Développeur FullStack</TypoTitle>

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
              sx={{ color: darkMode ? "#FFF" : "#000", fontSize: "20px" }}
            >
              {char}
            </Typography>
          ))}
        </Box>

        {/* SOCIALS LINKS */}
        <div className="socials-container">
          {dataSocialsLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              data-social={social.name}
              aria-label={social.name}
            >
              {social.svg}
            </a>
          ))}
        </div>
        <Link href="/screens/portfolio/animationIntro">
          <Btn>
            <TypoBtn variant="body2">
              PORTFOLIO (Présentation des projets)
            </TypoBtn>
          </Btn>
        </Link>
        <Link href="/screens/pdf">
          <BoxBtn_CV>
            <Typography
              variant="h5"
              sx={{ color: darkMode ? "#FFF" : "#000", fontWeight: "bold" }}
            >
              CV
            </Typography>
          </BoxBtn_CV>
        </Link>
      </BoxSocialsLinks>
    </RootSocialsLinks>
  );
}
