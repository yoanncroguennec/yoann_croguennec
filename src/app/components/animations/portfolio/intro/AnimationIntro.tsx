import Image from "next/image";
import { Box, useMediaQuery, useTheme } from "@mui/material";
// STYLES
import {
    BoxAnimationIntro,
    RootAnimationIntro,
    stylesImgProfile_3,
    TypoTitle,
    TypoTitleSpan,
} from "./StylesAnimationIntro";

// IMGS
const img_profile_3 = "/assets/imgs/screens/portfolio/animationIntro/img_profile_3.jpg";

const firstName = "YOANN";
const lastName = "CROGUENNEC";

export default function AnimationIntro() {
    // RESPONSIVE
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <RootAnimationIntro>
            <video
                autoPlay
                // loop
                muted
                playsInline
                src="/assets/videos/animations/portfolio/intro/smoke.mp4"
                style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
            />
            <BoxAnimationIntro>
                <Image
                    alt="Photo de profil de Yoann Croguennec"
                    height={250}
                    src={img_profile_3}
                    style={stylesImgProfile_3}
                    width={250}
                />
                <TypoTitle variant={matches ? "h4" : "h2"}>
                    <Box>
                        {firstName.split("").map((letter, i) => (
                            <TypoTitleSpan key={`first-${i}`}>{letter}</TypoTitleSpan>
                        ))}
                    </Box>
                    <Box>
                        {lastName.split("").map((letter, i) => (
                            <TypoTitleSpan key={`last-${i}`}>{letter}</TypoTitleSpan>
                        ))}
                    </Box>
                </TypoTitle>
            </BoxAnimationIntro>
        </RootAnimationIntro>
    )
}
