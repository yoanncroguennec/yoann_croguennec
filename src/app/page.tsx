import { Metadata } from "next";
import SocialsLinks from "./screens/SocialsLinks";

export const metadata: Metadata = {
  title: "Yoann Croguennec - Développeur FullStack",
  description:
    "Portfolio et liens sociaux de Yoann Croguennec, développeur web et mobile FullStack (React, Next, React Native).",
};

export default function Page() {
  return <SocialsLinks />;
}
