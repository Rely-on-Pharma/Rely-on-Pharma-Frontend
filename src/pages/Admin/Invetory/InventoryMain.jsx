"use client";
import AppContext from "@/constants/context/context";
import { inventoryPageColumns } from "@/constants/data/AdminColumnData";
import { Backdrop, Box, styled } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { useContext, useEffect, useState } from "react";
import Capsule from "../Listing/Capsule";
import Heading from "../Listing/Heading";
import InventoryTable from "./GenericTable";

const data = [
  { name: "All Inventory", sub: "52SKUs" },
  { name: "Low Stocks", sub: "3SKUs" },
];

const CustomInventoryMain = styled(Box)(({ theme }) => ({
  padding: "2rem",
}));
const InventoryMain = () => {
  const [rowsData, setRowsData] = useState([]);
  const [loading, setLoading] = useState(false)
  const {showSnackbar} = useContext(AppContext)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch("http://localhost:8000/inventory", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });

        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(errorMessage);
        }

        const jsonResponse = await response.json();
        setRowsData(jsonResponse);
        setLoading(false)
      } catch (error) {
        setLoading(false)
        showSnackbar(error.message || "Something went wrong!", "error");
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={loading}
   
  >
    <CircularProgress color="inherit" />
  </Backdrop>;
  }
  return (
    <CustomInventoryMain>
      <Heading title="INVENTORY" />
      <Capsule data={data} />
      <InventoryTable columns={inventoryPageColumns} rows={rowsData} />
    </CustomInventoryMain>
  );
};

export default InventoryMain;
