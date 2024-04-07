"use client";
import React from "react";
import Heading from "./Heading";
import { Box, styled } from "@mui/material";
import Capsule from "./Capsule";
import { listingPageColumns } from "@/constants/data/AdminColumnData";
import ListingTable from "./GenericTable";
import { MemoizedButton } from "@/constants/SDK/CustomButton";
import { colors } from "@/constants/colors";
import { useRouter } from 'next/navigation'
const data = [
  { name: "All Inventory", sub: "34" },
  { name: "Stocks", sub: "54" },
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
const CustomListingMain = styled(Box)(({ theme }) => ({
  padding: "2rem",
  ".btn":{
    borderRadius:"8px",
    margin:"0.5rem",
    background:colors?.MonochromeDark,
    boxShadow:"2px 2px 2px 2px grey"
  }
}));
const ListingMain = () => {
  const router = useRouter();
  return (
    <CustomListingMain>
      <Heading title="LISTING" />
      <Capsule data={data} />
      <MemoizedButton handleClick={()=> router.push("/admin/listing/add-new")} className={"btn"} content={"Add New Product"}/>
      <ListingTable columns={listingPageColumns} rows={rows} />
    </CustomListingMain>
  );
};

export default ListingMain;
