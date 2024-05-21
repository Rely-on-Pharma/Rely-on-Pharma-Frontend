"use client";
import { useState, useEffect } from "react";
import { colors } from "@/constants/colors";
import { Box, Grid, styled, Typography } from "@mui/material";

const CustomPendingOrder = styled(Box)(({ theme }) => ({
  backgroundColor: "#888888",
  padding: "2rem",
  margin: "2rem",
  borderRadius: 12,
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
}));

const PendingOrderCard = () => {
  // const pendingOrders = [
  //   { orderId: "Order#12432" },
  //   { orderId: "Order#10234" },
  //   { orderId: "Order#12044" },
  //   { orderId: "Order#12234" },
  // ];
  const [pendingOrders, setPendingOrders] = useState([]);
  useEffect(() => {
    const fetchPendingOrders = async () => {
      //setLoading(true);
      try {
        const response = await fetch("http://localhost:8000/pending-orders", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(errorMessage);
        }

        const jsonResponse = await response.json();
        setPendingOrders(jsonResponse);
      } catch (error) {
        showSnackbar(error.message || "Something went wrong!", "error");
      }
    };

    fetchPendingOrders();
  }, []);
  return (
    <CustomPendingOrder>
      <Typography
        variant="h4"
        sx={{ color: colors?.white, textDecoration: "underline" }}
      >
        Pending Orders
      </Typography>
      {pendingOrders.length === 0 ? (
        <Typography variant="h6" sx={{ color: "rgba(255, 255, 255, 0.6)" }}>
          No Pending Orders
        </Typography>
      ) : (
        pendingOrders.map((item, index) => (
          <Box
            key={index}
            display={"flex"}
            flexDirection={"row"}
            sx={{ paddingY: "1rem" }}
            justifyContent={"space-between"}
            width={"100%"} // Ensure it takes full width
          >
            <Typography variant="h6" sx={{ color: "rgba(255, 255, 255, 0.6)" }}>
              {item.orderId}
            </Typography>
          </Box>
        ))
      )}
    </CustomPendingOrder>
  );
};

export default PendingOrderCard;
