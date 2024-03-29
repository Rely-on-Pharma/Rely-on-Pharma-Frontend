
import { MemoizedButton } from '@/constants/SDK/CustomButton'
import { colors } from '@/constants/colors'
import { Box, Stack, Typography, styled } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const CustomCard = styled(Box)(({theme})=>({
    borderRadius:"4px",
    overflow:"hidden",
    ".details":{
      padding:"4px",
      textAlign:"center"
    },
    ".addBtn":{
      borderRadius:"2px",
      display:"block",
      width:"100%",
      textAlign:"center",
      padding:"8px",
      background:colors?.MonochromeDark,
      "&:hover":{
      background:colors?.white,

      }
    }
}))
const ProductCard = ({productData}) => {
  const imageUrl = "https://loremflickr.com/640/480?lock=2391645746102272" //currently hardcoding the image url, as backend does not have image URL set. 
  return (
    <CustomCard>

      {/*<Image src={productData?.image_url} alt={productData?.name} width={360} height={300}/> */}
        <Image src={imageUrl} alt={productData?.name} width={360} height={300}/>
        <Stack className='details'>
        <Link href={`/product/${productData?.name}`} style={{fontWeight:"700"}}>{productData?.name}</Link>
        <Typography variant='body'> Rs. {productData?.price}</Typography>
        </Stack>
        <MemoizedButton content={"Quick View"} href={`/product/${productData?.name}`} className={"addBtn"}/>
    </CustomCard>
  ) 
}

export default ProductCard
