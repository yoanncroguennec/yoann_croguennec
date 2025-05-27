"use client"

import { useState } from "react";
import { Freehand } from "next/font/google";
import { Typography, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';
import { Typewriter } from "react-simple-typewriter";
import data_Personal_Info from "./data_Personal_Info";
import { BoxCentral, BoxContainer, BoxGlobalHeader_LandingPage, BoxHeader_LandingPage, Item_data_Personal_Info, RootHeader_LandingPage, stylesBtn, stylesImgs_Profile_1, stylesUrlItem_data_Personal_Info, stylesVideoBG } from "./StylesHeader_LandingPage";

const textTopHeader = [
  "CROGUENNEC Yoann -",
  "DÉVELOPPEUR FULL-STACK",
  "React JS & Native",
];

const roboto = Freehand({
  subsets: ["latin"],
  weight: ["400"],
});

function TitleHeader_LandingPage() {
  return textTopHeader.map((text, index) => (
    <Typography
      className={roboto.className}
      key={index}
      variant="h4"
      color='#FFF'
      style={{ textAlign: "center", textShadow: "2px 2px 3px #FF0000", padding: "20px 0" }}
    >
      {text}
    </Typography>
  ))
}

function ProfileImage() {
  return (
    <Image
      alt='Photo Profil'
      src='/assets/imgs/img_profile_1.jpeg'
      height={200}
      loading="lazy"
      style={stylesImgs_Profile_1}
      width={200}
    />
  )
}

export default function Header_LandingPage() {
  const [hoverBtn, sethoverBtn] = useState<boolean>(false)

  // RESPONSIVE
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <RootHeader_LandingPage>
      <video
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/imgs/fallback_header.jpg"
        src='/assets/videos/layouts/portfolio/landingPage/header/BgVideoHeader.mp4'
        style={stylesVideoBG}
      />
      <BoxGlobalHeader_LandingPage>
        {matches ? <TitleHeader_LandingPage /> : null}
        {matches ? <ProfileImage /> : null}
        <BoxHeader_LandingPage>
          <BoxContainer>
            {data_Personal_Info.map(({ icon: Icon, iconColor, href, text }, index) => (
              <Item_data_Personal_Info
                key={index} >
                <div style={{ marginRight: "10px" }}>
                  <Icon color={iconColor ?? "#FFF"} size={32} />
                </div>
                {href ? (
                  <a
                    href={href}
                    style={stylesUrlItem_data_Personal_Info}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {text}
                  </a>
                ) : (
                  <span>{text}</span>
                )}
              </Item_data_Personal_Info>
            ))}
          </BoxContainer>
          <BoxCentral>
            {matches ? null : <TitleHeader_LandingPage />}
            <BoxContainer>
              <Typewriter
                cursor
                cursorStyle='_'
                deleteSpeed={50}
                delaySpeed={10}
                typeSpeed={20}
                words={[
                  `Je m’appelle Yoann Croguennec, j’ai 37 ans, ayant obtenu un diplôme en tant que développeur web et web mobile, de niveau V, au sein du centre de formation «Callac Soft Collège». A la suite, j’ai continué à m’auto-former en React JS et Native pendant 1 an 1/2, auprès de Site Internet (Udemy, ...) et Youtubeur (SDZ, PrimFX, Waked XY, Les teachers du net, ...), qui m’ont permis de développer mes compétences en tant que développeur web. Puis je suis rentré au centre de formation « Le Réacteur » (75010), afin de renforcer mes connaissances mais également de comprendre certaines parties. Après, j'ai continué à m'auto-former en Next JS, tout en réalisant différents types de Projets, cités dans mon CV..`,
                ]}
              // words={[
              //   `${dataHeaderLanguages[lang].scrollingText1}`,
              //   `${dataHeaderLanguages[lang].scrollingText2}`,
              // ]}
              />
            </BoxContainer>
            <Link
              href='/screens/pdf'
              passHref
              legacyBehavior
            >
              <a
                onMouseEnter={() => sethoverBtn(true)}
                onMouseLeave={() => sethoverBtn(false)}
                style={{
                  ...stylesBtn,
                  background: hoverBtn ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.4)",

                }}
              >
                <Typography variant="h6" color="#FFF">
                  Télécharger le CV (PDF)
                </Typography>
              </a>
            </Link>
          </BoxCentral>
          {matches
            ? null :
            <ProfileImage />
          }
        </BoxHeader_LandingPage>
      </BoxGlobalHeader_LandingPage>
    </RootHeader_LandingPage>
  )
}
