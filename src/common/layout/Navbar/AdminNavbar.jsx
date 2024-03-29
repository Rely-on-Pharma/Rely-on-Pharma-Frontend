"use client";

import { adminNavLinks } from "@/constants/NavbarData";
import { colors } from "@/constants/colors";
import AppContext from "@/constants/context/context";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { useContext } from "react";
import logo from '../../../../public/logo.svg';

function AdminNavbar(props) {
  const { window } = props;
  const {  user } = useContext(AppContext); 
  return (
    <Box sx={{ display: "flex", background: colors?.MonochromeLight, marginBottom:"4rem" }}>
      <AppBar component="nav" sx={{ background: colors?.MonochromeLight }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Image
            style={{
              marginInline: "8px",
              width: "60px",
              height: "40px",
              objectFit: "contain",
            }}
            width={50}
            height={40}
            src={logo}
            alt="logo"
          />
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "space-between",
            }}
          >
            {adminNavLinks?.map((item) => (
              <Link
                key={item?.id}
                // className={
                //   isNavLinkActive(router.pathname, item?.href) ? "active" : ""
                // }
                style={{
                  color: colors?.primaryDark,
                  display: "block",
                  marginInline: "18px",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
                href={item?.href}
              >
                {item?.name}
              </Link>
            ))}
          </Box>
          <Box sx={{ display: { xs: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color={colors?.primaryDark}
            >
              <AccountCircle style={{ color: `${colors?.primaryDark}` }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}

AdminNavbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AdminNavbar;
