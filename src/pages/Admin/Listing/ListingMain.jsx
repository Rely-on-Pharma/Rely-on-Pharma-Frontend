"use client";
import React, { useState, useEffect } from "react";
import Heading from "./Heading";
import { Box, styled } from "@mui/material";
import Capsule from "./Capsule";
import { listingPageColumns } from "@/constants/data/AdminColumnData";
import ListingTable from "./GenericTable";

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
}));

const ListingMain = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productListing, setProductListing] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/products");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setProductListing(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();

    // Cleanup function (optional)
    return () => {
      // Cleanup code, if needed
    };
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <CustomListingMain>
      <Heading title="LISTING" />
      <Capsule data={data} />
      <ListingTable columns={listingPageColumns} rows={productListing} />
    </CustomListingMain>
  );
};

export default ListingMain;
