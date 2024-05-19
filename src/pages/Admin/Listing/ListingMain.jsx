"use client";
import React, { useContext, useEffect, useState } from "react";
import Heading from "./Heading";
import { Box, styled } from "@mui/material";
import Capsule from "./Capsule";
import { listingPageColumns } from "@/constants/data/AdminColumnData";
import ListingTable from "./GenericTable";
import { MemoizedButton } from "@/constants/SDK/CustomButton";
import { colors } from "@/constants/colors";
import { useRouter } from 'next/navigation'
import AppContext from "@/constants/context/context";
import UpdatePincodeDialog from "./Update/UpdatePincodeDialog";
const data = [
  { name: "All Inventory", sub: "34" },
  { name: "Stocks", sub: "54" },
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
  const [rowsData, setRowsData] = useState([]);
  const {showSnackbar} = useContext(AppContext)
  const [openDialog, setOpenDialog] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/products", {
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
      } catch (error) {
        showSnackbar(error.message || "Something went wrong!", "error");
      }
    }

    fetchData();
  }, []);

  const handleCloseDialog = ()=>{
    setOpenDialog(false)
  }
  return (
    <CustomListingMain>
      <Heading title="LISTING" />
      <Capsule data={data} />
      <MemoizedButton handleClick={()=> router.push("/admin/listing/add-new")} className={"btn"} content={"Add New Product"}/>
      <MemoizedButton className={"btn"} content={"Add Pincodes"}  handleClick={() => setOpenDialog(true)}/>
      <UpdatePincodeDialog
        open={openDialog}
        handleClose={handleCloseDialog}
      />
      <ListingTable columns={listingPageColumns} rows={rowsData} />
    </CustomListingMain>
  );
};

export default ListingMain;
