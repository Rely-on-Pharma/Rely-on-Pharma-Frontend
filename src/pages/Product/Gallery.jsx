"use client"
import { colors } from '@/constants/colors'
import { Box, styled } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
const CustomGallery = styled(Box)(({theme})=>({
    width:"100%",
    ".mainImg":{
        width:"100%",
        objectFit:"contain"
    },
    ".subImg":{
        transition:"all 0.2s ease-in",
        cursor:"pointer",
        "&:hover":{
            boxShadow:`2px 2px 2px 1px ${colors?.primaryMedium}`,
            transform:"scale(1.009)"
        },
        "&.active":{
            boxShadow:`2px 2px 2px 1px ${colors?.primaryDark}`,
            borderRadius:"8px"
        }
    },
    ".subImg-container":{
        display:"flex",
        justifyContent:"center",
        gap:"0.5rem"
    },
    [theme.breakpoints.down("md")]:{
        ".mainImg":{
            width:"100%",
            display:"block",
            margin:"auto auto 1rem auto",
            objectFit:"contain",
            overflow:"hidden",
        },
    },
    [theme.breakpoints.down("sm")]:{
        ".mainImg":{
            height:"14rem"
        },
        ".subImg-container":{
            padding:"0.5rem",
            gap:"0.2rem",
            maxWidth:"100vw",
        },
        ".subImg":{
            width:"20%",
            maxHeight:"4rem"
        }
    }
}))
const Gallery = ({imageGallery}) => {
    const [currImg, setCurrImg] = useState(0);
  return (
    <CustomGallery>
        <Image src={imageGallery[currImg]} alt='mainImage' width={360} height={360} className='mainImg'/>
        <Box className="subImg-container">
           {
            imageGallery?.map((item,ind)=>{
                return (
                    <Image key={ind} className={ind === currImg
                    ? 'subImg active': 'subImg'} src={item} alt='item1' onClick={()=> setCurrImg(ind)}  width={90} height={90}/>
                )
            })
           }
        </Box>
    </CustomGallery>
  )
}

export default Gallery