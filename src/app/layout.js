import ThemeRegistry from "@/theme/ThemeRegistry.js";
import "./globals.css";
import AppContextProvider from "@/constants/context/contextProvider";
import { MemoizedSnackBar } from "@/constants/SDK/CustomSnackBar";
import { poppinsFont } from "@/theme/fonts";
export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppinsFont}`}>
        <AppContextProvider>
          <MemoizedSnackBar/>
          <ThemeRegistry>
            {children}
          </ThemeRegistry>
        </AppContextProvider>
      </body>
    </html>
  );
}
