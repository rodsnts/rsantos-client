import type { Metadata } from "next";
import localFont from "next/font/local";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import "./globals.css";

const meslo = localFont({
  src: [
    {
      path: "../fonts/meslo.ttf",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../fonts/meslo-bold.ttf",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../fonts/meslo-italic.ttf",
      weight: "normal",
      style: "italic",
    },
    {
      path: "../fonts/meslo-bold-italic.ttf",
      weight: "bold",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "rsantos.dev",
  description: "my personal blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ marginTop: "64px" }} className={meslo.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
