"use client";

import { colors } from "@/constants/colors";
import AppContext from "@/constants/context/context";
import { Box, Divider, Grid, Typography, styled } from "@mui/material";
import { redirect, useRouter } from "next/navigation";
import { useCallback, useContext, useEffect, useState } from "react";
import ColumnItem from "./ColumnItem";
import SelectAddress from "./SelectAddress";
import { getOrderPayload } from "@/common/utils/getPayload";
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
  const { cart, showSnackbar } = useContext(AppContext);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const router = useRouter();
  const fetchAddresses = useCallback(async () => {
    try {
      const token = localStorage.getItem("token")?.slice(1, -1);

      if (!token) {
        showSnackbar("You need to login/signup to process the order", "info");
        router.push("/login");
        return;
      }

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const resp = await fetch("http://localhost:8000/address", {
        method: "GET",
        headers: headers,
      });
      if (!resp.ok) {
        throw new Error("Failedd to fetch address!");
      }

      const jsonData = await resp.json();
      setAddresses(jsonData);
    } catch (error) {
      console.error(error);
    }
  }, [router, showSnackbar]);

  useEffect(() => {
    fetchAddresses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddressSelection = (address) => {
    setSelectedAddress(address);
    const orderPayload = getOrderPayload(
      address,
      cart,
      totalCartValue,
      totalAmount
    );
    placeOrder(orderPayload);
  };

  const placeOrder = async (orderPayload) => {
    try {
      const token = localStorage.getItem("token")?.slice(1, -1);
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const response = await fetch("http://localhost:8000/orders", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(orderPayload),
      });

      if (!response.ok) {
        throw new Error("Failed to place order");
      }
      const data = await response.json();
      router.push(data)
      return data;
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const totalCartValue = cart.reduce(
    (acc, item) => acc + item?.selling_price * item.qty,
    0
  );
  const totalAmount = totalCartValue * 1.12 + 20;

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
          {selectedAddress && selectedAddress?.address_line}
          <SelectAddress
            addresses={addresses}
            fetchAddresses={fetchAddresses}
            onSelectAddress={handleAddressSelection}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Typography className="order-ov">Order Overview</Typography>
          {cart?.map((item, ind) => (
            <ColumnItem key={ind} item={item} />
          ))}
          <Divider sx={{ borderBottomWidth: "2px", background: "black" }} />
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography style={{ fontSize: "1.2rem" }}>
              Shipping Charges:-
            </Typography>
            <Typography style={{ fontSize: "1.2rem" }}>₹ {20}</Typography>
          </Box>
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
