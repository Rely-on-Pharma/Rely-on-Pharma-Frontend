import { MemoizedButton } from "@/constants/SDK/CustomButton";
import { colors } from "@/constants/colors";
import { Box, Stack, Typography, styled } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const CustomSimilarCard = styled(Box)(({ theme }) => ({
  borderRadius: "4px",
  overflow: "hidden",
  ".details": {
    padding: "4px",
    textAlign: "center",
  },
  ".addBtn": {
    borderRadius: "2px",
    display: "block",
    width: "100%",
    textAlign: "center",
    padding: "8px",
    background: colors?.MonochromeDark,
    "&:hover": {
      background: colors?.white,
    },
  },
  "product--image": {
    objectFit: "contain",
    [theme.breakpoints.down("xs")]: {
      width: 150,
      height: 100,
    },
    [theme.breakpoints.down("sm")]: {
      width: 150,
      height: 100,
    },
  },
}));
const SimilarProductCard = ({ productData }) => {
  const imageUrl = "https://loremflickr.com/640/480?lock=2391645746102272"; //currently hardcoding the image url, as backend does not have image URL set.
  return (
    <CustomSimilarCard>
      {/*<Image src={productData?.image_url} alt={productData?.name} width={360} height={300}/> */}
      <Image src={productData?.image_url?.length>0 ? productData?.image_url[0]:imageUrl} alt={productData?.name} width={360} height={300} />
      <Stack className="details">
        <Link
          href={`/product/${productData?.id}`}
          style={{ fontWeight: "700" }}
        >
          {productData?.name}
        </Link>
        <Typography variant="body">
          {" "}
          Rs. {productData?.selling_price}
        </Typography>
      </Stack>
      <MemoizedButton
        content={"Quick View"}
        href={`/product/${productData?.id}`}
        className={"addBtn"}
      />
    </CustomSimilarCard>
  );
};

export default SimilarProductCard;
