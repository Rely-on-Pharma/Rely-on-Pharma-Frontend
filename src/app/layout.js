import ThemeRegistry from "@/theme/ThemeRegistry.js";
import "./globals.css";
import DrawerAppBar from "@/common/layout/Navbar/Navbar";
import Footer from "../common/layout/Footer/Footer.jsx";
import AppContextProvider from "@/constants/context/contextProvider";
export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <ThemeRegistry>
            <header>
              <DrawerAppBar />
            </header>
            {children}
            <footer>
              <Footer />
            </footer>
          </ThemeRegistry>
        </AppContextProvider>
      </body>
    </html>
  );
}
