import AdminNavbar from "@/common/layout/Navbar/AdminNavbar";
import { colors } from "@/constants/colors";

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin section",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{background:colors?.white}}>
        <header>
          <AdminNavbar />
        </header>
        {children}
      </body>
    </html>
  );
}
