"use client";

import { useContext } from "react";
import AppContext from "@/constants/context/context";
import { Box, Grid, Typography, styled, Divider } from "@mui/material";
import { colors } from "@/constants/colors";
import ColumnItem from "./ColumnItem";
import { MemoizedButton } from "@/constants/SDK/CustomButton";
import SelectAddress from "./SelectAddress";

const CustomShippingMain = styled(Box)(({ theme }) => ({
  padding: "4rem",
  ".heading": {
    fontSize: "3rem",
    fontWeight: "600",
    letterSpacing: "1px",
    textDecoration: "underline",
    color: colors?.primaryDark,
  },
  ".order-ov": {
    fontSize: "2rem",
    fontWeight: "600",
    letterSpacing: "1px",
    color: colors?.primaryDark,
  },
  ".total-amt": {
    fontSize: "1.7rem",
    fontWeight: "bold",
    color: colors?.primaryDark,
    margin: "1rem 0",
  },
  ".amt": {
    fontSize: "1.7rem",
    fontWeight: "medium",
    color: colors?.black,
    margin: "1rem 0",
  },
  ".grid_container": {
    display: "flex",
    justifyContent: "space-between",
  },

  ".btn": {
    display: "block",
    width: "fit-content",
    background: colors?.primaryDark,
    padding: "6px",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
    boxShadow: "none",
    margin: "0.4rem 0",
    "&:hover": {
      color: colors?.MonochromeDark,
      background: colors?.seaShellLight,
    },
  },

  [theme.breakpoints.down("md")]: {
    padding: "1rem",
    ".heading": {
      fontSize: "1.5rem",
      margin: "0.8rem 0",
    },
  },
}));

const ShippingMain = () => {
  const { cart } = useContext(AppContext);
  let total = 0;
  const totalCartValue = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const totalAmount = totalCartValue * 1.12;
  const address = [
    {
      id: 1,
      name: "Home",
      address:
        "B-304 Nisarg Nirmiti Pimple Saudagar Kokane Chowk , Pune 411027",
    },
    {
      id: 2,
      name: "Home 2",
      address: "C2 - 501 Gagan Vihar Bibewadi Market yard Pune 411037",
    },
  ];

  return (
    <CustomShippingMain>
      <Typography className="heading">Shipping Address</Typography>
      <Grid container spacing={2} className="grid_container">
        <Grid
          item
          xs={12}
          sm={6}
          md={8}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <SelectAddress addresses={address} />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Typography className="order-ov">Order Overview</Typography>
          {cart?.map((item) => (
            <ColumnItem key={item.id} item={item} />
          ))}
          <Divider sx={{ borderBottomWidth: "2px", background: "black" }} />
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography className="total-amt" ml={"1rem"}>
              TOTAL AMOUNT
            </Typography>
            <Typography className="amt">₹ {totalAmount.toFixed(2)}</Typography>
          </Box>
        </Grid>
      </Grid>
    </CustomShippingMain>
  );
};

export default ShippingMain;
