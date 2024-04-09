import AdminNavbar from "@/common/layout/Navbar/AdminNavbar";
import { colors } from "@/constants/colors";

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin section",
};

export default function RootLayout({ children }) {
  return (
    <>
        <header>
          <AdminNavbar />
        </header>
        {children}
    </>

  );
}
