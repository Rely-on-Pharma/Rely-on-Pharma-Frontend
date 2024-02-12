import ThemeRegistry from "@/theme/ThemeRegistry.js";
import { Inter } from "next/font/google";
import "./globals.css";
import DrawerAppBar from "@/common/layout/Navbar/Navbar";
const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          <DrawerAppBar/>
          {children}
          </ThemeRegistry>
      </body>
    </html>
  );
}
