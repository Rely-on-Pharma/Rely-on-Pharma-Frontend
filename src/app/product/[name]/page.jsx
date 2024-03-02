"use client"
import DescriptionTab from '@/pages/Product/DescriptionTab'
import Gallery from '@/pages/Product/Gallery'
import ProdDetails from '@/pages/Product/ProdDetails'
import SimilarComponents from '@/pages/Product/SimilarComponents'
import { productData } from '@/constants/data/productData.js'
import { Box, Grid, Typography, styled } from '@mui/material'
import React from 'react'
const ProductData = {
    "id": "65d477565b75282dda587003",
    "name": "Unbranded Concrete Mouse",
    "company":"rely-on-pharma",
    "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu. Tristique senectus et netus et malesuada fames ac. Semper quis lectus nulla at volutpat diam. Nunc faucibus a pellentesque sit amet porttitor.",
    "use":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro optio aliquam tempore quaerat quos, nam totam unde adipisci vitae? Neque necessitatibus, tenetur obcaecati, blanditiis eius accusantium ipsa esse excepturi similique corporis tempore vitae, quae odio.",
    "ingredients":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro optio aliquam tempore quaerat quos, nam totam unde adipisci vitae? Neque necessitatibus, tenetur obcaecati, blanditiis eius accusantium ipsa esse excepturi similique corporis tempore vitae, quae odio.", 
    "mainImg": "https://loremflickr.com/640/480?lock=2391645746102272",
    "imgs": [
      {
        "id": "65d477565b75282dda587004",
        "url": "https://loremflickr.com/640/480?lock=6586178289532928"
      },
      {
        "id": "65d477565b75282dda587005",
        "url": "https://picsum.photos/seed/9o1M7S/640/480"
      },
      {
        "id": "65d477565b75282dda587006",
        "url": "https://picsum.photos/seed/1mUkGldOY/640/480"
      },
      {
        "id": "65d477565b75282dda587007",
        "url": "https://picsum.photos/seed/OyKk2mm/640/480"
      },
      {
        "id": "65d477565b75282dda587008",
        "url": "https://picsum.photos/seed/qebwUfV/640/480"
      }
    ],
    "price": "904.00",
    "category": "Child",
    "discount":"40",
   }

  const CustomSingleProduct = styled(Box)(({theme})=>({
    padding:"4rem", 
    ".productContainer":{
      width:"90%",
      margin:"auto"
    },

    [theme.breakpoints.down("md")]:{
      padding:"0.5rem", 
      ".productContainer":{
        width:"100%",
      }
    }
  }))
const SingleProduct = () => {

  return (
    <CustomSingleProduct>
      <Grid className='productContainer' container spacing={2}>
      {/* Gallery */}
      <Grid item xs={12} style={{padding:"0"}}  md={6}><Gallery  imageGallery={ProductData?.imgs}/></Grid>
      <Grid item xs={12} style={{padding:"0"}} md={6}><ProdDetails productData={ProductData}/></Grid>
      {/* Pricing */}
        
      </Grid>
      {/* details */}
      <DescriptionTab desc={ProductData?.desc} howToUse={ProductData?.use} ingredients={ProductData?.ingredients}/>
      {/* related */}

      <Typography variant='h3'>Similar Products</Typography>
      <SimilarComponents slidesPerView={3}
  spaceBetween={30}
  loop = {true}
  delay = {2500}
  data={productData}
  navigation = {false}/>
    </CustomSingleProduct>
  )
}

export default SingleProduct