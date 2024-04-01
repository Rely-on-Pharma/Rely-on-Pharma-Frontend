"use client";
import DescriptionTab from "@/pages/Product/DescriptionTab";
import Gallery from "@/pages/Product/Gallery";
import ProdDetails from "@/pages/Product/ProdDetails";
import SimilarComponents from "@/pages/Product/SimilarComponents";
import { productData } from "@/constants/data/productData.js";
import { Box, Grid, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useMobile } from "@/common/utils/finndViewSize";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
const ProductData = {
  id: "65d477565b75282dda587003",
  name: "Unbranded Concrete Mouse",
  company: "rely-on-pharma",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu. Tristique senectus et netus et malesuada fames ac. Semper quis lectus nulla at volutpat diam. Nunc faucibus a pellentesque sit amet porttitor.",
  use: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro optio aliquam tempore quaerat quos, nam totam unde adipisci vitae? Neque necessitatibus, tenetur obcaecati, blanditiis eius accusantium ipsa esse excepturi similique corporis tempore vitae, quae odio.",
  ingredients:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro optio aliquam tempore quaerat quos, nam totam unde adipisci vitae? Neque necessitatibus, tenetur obcaecati, blanditiis eius accusantium ipsa esse excepturi similique corporis tempore vitae, quae odio.",
  mainImg: "https://loremflickr.com/640/480?lock=2391645746102272",
  imgs: [
    {
      id: "65d477565b75282dda587004",
      url: "https://loremflickr.com/640/480?lock=6586178289532928",
    },
    {
      id: "65d477565b75282dda587005",
      url: "https://picsum.photos/seed/9o1M7S/640/480",
    },
    {
      id: "65d477565b75282dda587006",
      url: "https://picsum.photos/seed/1mUkGldOY/640/480",
    },
    {
      id: "65d477565b75282dda587007",
      url: "https://picsum.photos/seed/OyKk2mm/640/480",
    },
    {
      id: "65d477565b75282dda587008",
      url: "https://picsum.photos/seed/qebwUfV/640/480",
    },
  ],
  price: "904.00",
  category: "Child",
  discount: "40",
};

const CustomSingleProduct = styled(Box)(({ theme }) => ({
  padding: "4rem",
  ".productContainer": {
    width: "90%",
    margin: "auto",
  },

  [theme.breakpoints.down("md")]: {
    padding: "0.5rem",
    ".productContainer": {
      width: "100%",
    },
  },
}));
const getId = (pathname) => {
  const regex = /\/product\/([^/]+)/;
  const match = pathname.match(regex);

  if (match && match.length > 1) {
    const idValue = match[1];
    return idValue;
  } else {
    return "";
  }
};
const SingleProduct = () => {
  const isMobile = useMobile();
  const pathname = usePathname();
  const id = getId(pathname);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setProductData(jsonData);
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
  }, [id]); // Empty dependency array means this effect runs only once, similar to componentDidMount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <CustomSingleProduct>
      <Grid className="productContainer" container spacing={2}>
        {/* Gallery */}
        <Grid item xs={12} style={{ padding: "0" }} md={6}>
          <Gallery imageGallery={ProductData?.imgs} />
        </Grid>
        <Grid item xs={12} style={{ padding: "0" }} md={6}>
          <ProdDetails productId={id} productData={productData} />
        </Grid>
        {/* Pricing */}
      </Grid>
      {/* details */}
      <DescriptionTab
        desc={productData?.description}
        howToUse={productData?.how_to_use}
        ingredients={"sample ingredient list"}
      />
      {/* related */}

      <Typography variant="h3">Similar Products</Typography>
      <SimilarComponents
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={30}
        loop={true}
        delay={2500}
        data={productData}
        navigation={false}
      />
    </CustomSingleProduct>
  );
};

export default SingleProduct;
