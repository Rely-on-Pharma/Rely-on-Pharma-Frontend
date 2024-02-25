
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
      padding:"8px",
      background:colors?.MonochromeDark,
      "&:hover":{
      background:colors?.white,

      }
    }
}))
const ProductCard = ({productData}) => {
  return (
    <CustomCard>

        <Image src={productData?.mainImg} alt={productData?.name} width={360} height={300}/>
        <Stack className='details'>
        <Link href="/dashboard" style={{fontWeight:"700"}}>{productData?.name}</Link>
        <Typography variant='body'>{productData?.price}</Typography>
        </Stack>
        <MemoizedButton content={"Add To Cart"} className={"addBtn"}/>
    </CustomCard>
  ) 
}

export default ProductCard