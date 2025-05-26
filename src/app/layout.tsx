import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yoann Croguennec",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
