"use client";
import React, { useContext, useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import Heading from "../Listing/Heading";
import Capsule from "../Listing/Capsule";
import OrdersTable from "./OrdersTable";
import { dummyOrdersRows, orderPageColumns } from "@/constants/data/AdminColumnData";
import { useRouter } from "next/navigation";
import AppContext from "@/constants/context/context";
const data = [
  { name: "Delivered Orders", sub: "34" },
  { name: "In Transit", sub: "54" },
];
const CustomOrdersMain = styled(Box)(({ theme }) => ({
  padding: "4rem",
}));
const OrdersMain = () => {
  const router = useRouter();
  const [rowsData, setRowsData] = useState([]);
  const {showSnackbar} = useContext(AppContext)
  const token = typeof localStorage !== 'undefined' ? localStorage.getItem('token')?.slice(1, -1) : null;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/orders", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        });

        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(errorMessage);
        }

        const jsonResponse = await response.json();
        setRowsData(jsonResponse);
      } catch (error) {
        showSnackbar(error.message || "Something went wrong!", "error");
      }
    }

    fetchData();
  }, []);
  return (
    <CustomOrdersMain>
      <Heading title="ORDERS" />
      <Box style={{display:"flex", justifyContent:"flex-start", gap:"1rem"}}>

      <Capsule data={[{ name: "Orders Processing", sub: "34" }]} />
      <Capsule data={data} />
      </Box>
      <OrdersTable columns={orderPageColumns} rows={rowsData}/>
      
    </CustomOrdersMain>
  );
};

export default OrdersMain;
