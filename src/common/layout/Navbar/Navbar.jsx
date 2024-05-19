"use client";

import { mobileNavLinks } from "@/constants/NavbarData";
import { colors } from "@/constants/colors";
import AppContext from "@/constants/context/context";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import logo from '../../../../public/logopng.png'
import { MemoizedButton } from "@/constants/SDK/CustomButton";
import { useRouter } from "next/navigation";
const drawerWidth = 300;

function DrawerAppBar(props) {
  const { window } = props;
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false);
  const container = window !== undefined ? () => window().document.body : undefined;
  // const router = useRouter();
  const { cart } = useContext(AppContext); // Access the cart from your context
  const [cartLength, setCartLength] = useState(cart.length);
  const token = localStorage.getItem('token')?.slice(1,-1)
  useEffect(() => {
    // Update cart length when cart updates
    setCartLength(cart.length);
  }, [cart]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", p: 4}}>
      <Image
        style={{
          marginInline: "8px",
          width: "12rem",
          height: "80px",
          objectFit: "contain",
        }}
        width={100}
        height={32}
        src={logo}
        alt="logo"
        />
      <Divider />
      <List>
        {mobileNavLinks.map((item) => (
          <ListItem key={item?.id} disablePadding>
            <Link
              sx={{ textAlign: "center" }}
              href={item?.href}
              // className={
              //   isNavLinkActive(router.pathname, item?.href) ? "active" : ""
              // }
              style={{
                color: colors?.primaryDark,
                display: "block",
                margin: "6px 18px",
                fontSize: "16px",
                fontWeight: "800",
              }}
              >
              <ListItemText primary={item?.name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  
  return (
    <Box sx={{ display: "flex", background: colors?.seaShellLight, marginBottom:"4rem" }}>
      <AppBar component="nav" sx={{ background: colors?.seaShellLight }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Image
            style={{
              marginInline: "8px",
              width: "120px",
              height: "50px",
              objectFit: "contain",
            }}
            width={150}
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
            {mobileNavLinks.map((item) => (
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
          {
            token ? (<Box sx={{ display: { xs: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color={colors?.primaryDark}
            >
              <Link href={"/cart"}>
              <Badge badgeContent={cartLength} color="success">
                <ShoppingCartIcon style={{ color: `${colors?.primaryDark}` }} />
              </Badge>
              </Link>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color={colors?.primaryDark}
            >
              <Link href={"/profile"}>
              <AccountCircle style={{ color: `${colors?.primaryDark}` }} />
              </Link>
            </IconButton>
          </Box>):(
            <>
              <MemoizedButton content={"Login"} style={{background:"none",boxShadow:"none", borderRadius:"2px", outline:"none", color:colors?.primaryDark}} handleClick={()=> router.push("/login")}/>
            </>
          )
          }
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            p: 4,
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            background: colors?.background,
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
