import DrawerAppBar from "@/common/layout/Navbar/Navbar";
import Footer from "@/common/layout/Footer/Footer";

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <DrawerAppBar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
