"use client";
import React from "react";
import { Box, styled } from "@mui/material";
import Heading from "../Listing/Heading";
import Capsule from "../Listing/Capsule";
import OrdersTable from "./OrdersTable";
import { dummyOrdersRows, orderPageColumns } from "@/constants/data/AdminColumnData";
const data = [
  { name: "Delivered Orders", sub: "34" },
  { name: "In Transit", sub: "54" },
];
const CustomOrdersMain = styled(Box)(({ theme }) => ({
  padding: "4rem",
}));
const OrdersMain = () => {
  return (
    <CustomOrdersMain>
      <Heading title="ORDERS" />
      <Box style={{display:"flex", justifyContent:"flex-start", gap:"1rem"}}>

      <Capsule data={[{ name: "Orders Processing", sub: "34" }]} />
      <Capsule data={data} />
      </Box>
      <OrdersTable columns={orderPageColumns} rows={dummyOrdersRows}/>
      
    </CustomOrdersMain>
  );
};

export default OrdersMain;
