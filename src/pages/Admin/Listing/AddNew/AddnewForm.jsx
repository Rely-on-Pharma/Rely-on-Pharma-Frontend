"use client";
import useAddNewProductForm from "@/common/Hooks/addnewForm";
import { Box, Typography, styled } from "@mui/material";
import CategorySelection from "./CategorySelection";
import PricingInfo from "./PricingInfo";
import ProductDetails from "./ProductDetails";
import FileUploadComponent from "./ImageUploader";
import { MemoizedButton } from "@/constants/SDK/CustomButton";
import { colors } from "@/constants/colors";

const CustomAddNewForm = styled(Box)(({ theme }) => ({
  ".categorySection": {
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
    margin: "1rem 0",
  },
  ".btn":{
    width:"100%",
    background:colors?.MonochromeDark,
    margin:"1rem auto"
  }
}));
const AddnewForm = () => {
  const { form } = useAddNewProductForm();
  return (
    <CustomAddNewForm>
      <Typography>Select Category</Typography>
      <Box className="categorySection">
        <CategorySelection />
      </Box>
      <Typography>Price, Stock and Shipping Information</Typography>

      <PricingInfo />
      <Typography>Product Details</Typography>
      <FileUploadComponent/>
      <ProductDetails/>

      <MemoizedButton className={"btn"} content={"Save"}/>
    </CustomAddNewForm>
  );
};

export default AddnewForm;
