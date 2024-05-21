"use client";
import { Box, styled, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { colors } from "@/constants/colors";

const CustomColumnItem = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-start",
  gap: "3rem",
  margin: "0.5rem 0",
  padding: "8px",
  ".img-box": {
    width: "10rem",
    height: "100%",
    objectFit: "contain",
  },
  ".prodDetail": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    margin: "0.4rem 0",
    ">p": {
      fontSize: "1.02rem",
      fontWeight: "700",
      letterSpacing: "1px",
    },
  },
}));

const ColumnItem = ({ item }) => {
  return (
    <CustomColumnItem>
      <Box>
        <Image
          className="img-box"
          src={item?.image_url[0]}
          alt={item.name}
          width={120}
          height={120}
        />
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        <Box className="prodDetail">
          <Typography variant="h5" fontWeight={"bold"}>
            {item?.name}
          </Typography>
          <Typography variant="body1" fontWeight={"100"}>
            Rs. {item?.selling_price}/-
          </Typography>
          <Typography variant="body1" fontWeight={"100"}>
            Qty :{item?.qty}
          </Typography>
        </Box>
      </Box>
    </CustomColumnItem>
  );
};

export default ColumnItem;
