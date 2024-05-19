import { Poppins, Roboto_Mono, Fjalla_One } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "600", "400", "500", "700"],
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
  weight: ["500"],
});

const fjalla_one = Fjalla_One({
  subsets: ["latin"],
  variable: "--font-fjalla-one",
  display: "swap",
  weight: ["400"],
});

export const poppinsFont = poppins.variable;
export const robotoFont = roboto_mono.variable;
export const fjallaFont = fjalla_one;
