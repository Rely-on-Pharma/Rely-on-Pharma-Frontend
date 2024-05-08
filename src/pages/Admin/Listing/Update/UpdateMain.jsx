"use client";
import { colors } from "@/constants/colors";
import { Box, Paper, Typography, styled } from "@mui/material";
import React from "react";
import CategorySelection from "../AddNew/CategorySelection";
import PricingInfo from "../AddNew/PricingInfo";
import ProductDetails from "../AddNew/ProductDetails";
import FileUploadComponent from "../AddNew/ImageUploader";
import { MemoizedButton } from "@/constants/SDK/CustomButton";
import useUpdateProductForm from "@/common/Hooks/updateProductForm";
import { useParams, useRouter } from "next/navigation";
import Heading from "../Heading";
import { Padding } from "@mui/icons-material";
const CustomUpdateForm = styled(Box)(({ theme }) => ({
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
const UpdateMain = () => {
  const router = useRouter();
  const { id } = useParams();
  const { form, productData } = useUpdateProductForm(id, router);
  return (
    <CustomUpdateForm>
      <Paper
        style={{
          margin: "2rem auto",
          background: colors?.MonochromeLight,
          padding: "1rem",
          minHeight: "8rem",
        }}
      >
        {productData && (
          <>
            {" "}
            <Typography style={{ fontSize: "1.5rem" }}>
              <strong>Product Detail with product id:- {id}</strong>
            </Typography>
            <Box
              style={{
                display: "flex",
                gap: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              <Typography>
                <strong>Product Name:-</strong> {productData?.name}
              </Typography>
              <Typography>
                <strong>Brand:-</strong> {productData?.brand}
              </Typography>
              <Typography>
                <strong>Product Category:-</strong> {productData?.category}
              </Typography>
              <Typography>
                <strong>Vendor ID:-</strong> {productData?.vendor_id}
              </Typography>
              <Typography>
                <strong>Selling Price:-</strong> {productData?.selling_price}
              </Typography>
            </Box>
            <Box style={{ marginTop: "1rem" }}>
              <Typography>
                <strong>Description:-</strong> {productData?.description}
              </Typography>
              <Typography>
                <strong>How to use:-</strong> {productData?.how_to_use}
              </Typography>
            </Box>
          </>
        )}
      </Paper>

      <Heading title={`Update Product ${id}`} />
      <form onSubmit={form?.handleSubmit} style={{ padding: "1rem" }}>
        <Typography>Select Category</Typography>
        <Box className="categorySection">
          <CategorySelection form={form} />
        </Box>
        <Typography>Price, Stock and Shipping Information</Typography>

        <PricingInfo form={form} />
        <Typography>Product Details</Typography>
        <ProductDetails form={form} />
        <MemoizedButton
          className={"btn"}
          content={"Update"}
          style={{ borderRadius: "8px", display:"inline" }}
          type="submit"
          handleClick={(e) => {
            form.handleSubmit(e);
          }}
        />
      </form>
    </CustomUpdateForm>
  );
};

export default UpdateMain;
