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
      <body className={`${albertSans.className} ${albertSans.variable} ${playfairDisplay.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
