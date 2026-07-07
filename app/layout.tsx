import { Albert_Sans, Playfair_Display } from "next/font/google";
import Navbar from "./components/Navbar";
import type { RootLayoutProps } from "@/app/types";
import "./globals.css";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-albert-sans",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair-display",
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <head>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />

        <title>PrintForge</title>
      </head>
      <body className={`${albertSans.className} ${albertSans.variable} ${playfairDisplay.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
