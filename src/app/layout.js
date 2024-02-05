import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from "@mui/material/styles";
import { Inter } from "next/font/google";
import theme from "../theme/theme.js";
import "./globals.css";
import { CssBaseline } from '@mui/material';

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
      <AppRouterCacheProvider>
         <ThemeProvider theme={theme}>
          <CssBaseline/>
              {children}
           </ThemeProvider>
          </AppRouterCacheProvider>
      </body>
    </html>
  );
}
