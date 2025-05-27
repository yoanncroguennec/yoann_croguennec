import Image from "next/image";
import { Box } from "@mui/material";
// STYLES
import {
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
            <Image
                alt="Photo de profil de Yoann Croguennec"
                height={250}
                src={img_profile_3}
                style={stylesImgProfile_3}
                width={250}
            />
            <TypoTitle variant="h1">
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
        </RootAnimationIntro>
    )
}
