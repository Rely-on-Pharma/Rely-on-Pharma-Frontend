import DrawerAppBar from "@/common/layout/Navbar/Navbar";
import Footer from "@/common/layout/Footer/Footer";

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <>
    
        <header>
          <DrawerAppBar />
        </header>
        <div style={{minHeight:"100vh"}}>
        {children}
        </div>
        <footer>
          <Footer />
        </footer>
    </>

  );
}
