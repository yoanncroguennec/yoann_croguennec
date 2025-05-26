import type { Metadata } from "next";
import "./globals.css";
import SocialsLinks from "./screens/SocialsLinks";

export const metadata: Metadata = {
  title: "Yoann Croguennec",
  description: "Portfolio",
};

export default function RootLayout({}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <SocialsLinks />
      </body>
    </html>
  );
}
