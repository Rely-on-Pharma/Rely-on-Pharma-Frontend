"use client";
import React from "react";
import { Box, styled } from "@mui/material";
import { inventoryPageColumns, listingPageColumns } from "@/constants/data/AdminColumnData";
import Heading from "../Listing/Heading";
import Capsule from "../Listing/Capsule";
import InventoryTable from "./GenericTable";

const data = [
  { name: "All Inventory", sub: "52SKUs" },
  { name: "Low Stocks", sub: "3SKUs" },
];

const rows = [
  {
    name: "India",
    category: "IN",
    brand: 1324171354,
    price: 3287263,
    image: "https://loremflickr.com/640/480?lock=6586178289532928",
  },
  {
    name: "China",
    category: "CN",
    brand: 1403500365,
    price: 9596961,
    image: "https://loremflickr.com/640/480?lock=6586178289532928",
  },
  {
    name: "Italy",
    category: "IT",
    brand: 60483973,
    price: 301340,
    image: "https://loremflickr.com/640/480?lock=6586178289532928",
  },
  // Add more rows as needed
];
const CustomInventoryMain = styled(Box)(({ theme }) => ({
  padding: "2rem",
}));
const InventoryMain = () => {
  return (
    <CustomInventoryMain>
      <Heading title="INVENTORY" />
      <Capsule data={data} />
      <InventoryTable columns={inventoryPageColumns} rows={rows} />
    </CustomInventoryMain>
  );
};

export default InventoryMain;
