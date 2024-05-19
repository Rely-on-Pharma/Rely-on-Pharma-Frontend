"use client";
import { useState } from "react";
import { colors } from "@/constants/colors";
import { Box, Grid, styled, Typography } from "@mui/material";

const CustomStockCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#888888",
  padding: "2rem",
  margin: "2rem",
  borderRadius: 12,
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
}));

const LowStockCard = () => {
  const lowStockItems = [
    { name: "B-Glow Acne FaceWash", quantity: 12 },
    { name: "C-Glow Brightening Serum", quantity: 8 },
    { name: "D-Glow Night Cream", quantity: 5 },
    { name: "E-Glow Sunscreen Lotion", quantity: 2 },
  ];

  return (
    <CustomStockCard>
      <Typography
        variant="h4"
        sx={{ color: colors?.white, textDecoration: "underline" }}
      >
        Low Stock
      </Typography>
      {lowStockItems.map((item, index) => (
        <Box
          key={index}
          display={"flex"}
          flexDirection={"row"}
          sx={{ paddingY: "1rem" }}
          justifyContent={"space-between"}
        >
          <Typography variant="h6" sx={{ color: "rgba(255, 255, 255, 0.6)" }}>
            {item.name}
          </Typography>
          <Typography ml={4} variant="h6" sx={{ color: "rgb(255, 255, 255)" }}>
            {item.quantity}
          </Typography>
        </Box>
      ))}
    </CustomStockCard>
  );
};

export default LowStockCard;
