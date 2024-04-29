"use client";
import useAddNewProductForm from "@/common/Hooks/addnewForm";
import { Box, Typography, styled } from "@mui/material";
import CategorySelection from "./CategorySelection";
import PricingInfo from "./PricingInfo";
import ProductDetails from "./ProductDetails";
import FileUploadComponent from "./ImageUploader";
import { MemoizedButton } from "@/constants/SDK/CustomButton";
import { colors } from "@/constants/colors";
import { useRouter } from "next/navigation";

const CustomAddNewForm = styled(Box)(({ theme }) => ({
  ".categorySection": {
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
    margin: "1rem 0",
  },
  ".btn": {
    width: "100%",
    background: colors?.MonochromeDark,
    margin: "1rem auto",
  },
}));
const AddnewForm = () => {
  const router = useRouter()
  const { form } = useAddNewProductForm(router);
  return (
    <CustomAddNewForm>
      <form onSubmit={form?.handleSubmit}>
        <Typography>Select Category</Typography>
        <Box className="categorySection">
          <CategorySelection form={form}/>
        </Box>
        <Typography>Price, Stock and Shipping Information</Typography>

        <PricingInfo form={form}/>
        <Typography>Product Details</Typography>
        <ProductDetails form={form}/>
        {/* <FileUploadComponent/> */}

        <MemoizedButton
          className={"btn"}
          content={"Save"}
          type="submit"
          handleClick={(e) => {
            form.handleSubmit(e);
          }}
        />
      </form>
    </CustomAddNewForm>
  );
};

export default AddnewForm;
