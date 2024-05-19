"use client";
import { useState } from "react";
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
  const pendingOrders = [
    { orderId: "Order#12432" },
    { orderId: "Order#10234" },
    { orderId: "Order#12044" },
    { orderId: "Order#12234" },
  ];

  return (
    <CustomPendingOrder>
      <Typography
        variant="h4"
        sx={{ color: colors?.white, textDecoration: "underline" }}
      >
        Pending Orders
      </Typography>
      {pendingOrders.map((item, index) => (
        <Box
          key={index}
          display={"flex"}
          flexDirection={"row"}
          sx={{ paddingY: "1rem" }}
          justifyContent={"space-between"}
        >
          <Typography variant="h6" sx={{ color: "rgba(255, 255, 255, 0.6)" }}>
            {item.orderId}
          </Typography>
        </Box>
      ))}
    </CustomPendingOrder>
  );
};

export default PendingOrderCard;
