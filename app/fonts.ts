import { Pacifico, Poppins } from "next/font/google";

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const fonts = [pacifico, poppins];

export const fontVariables = fonts.map((font) => font.variable).join(" ");
