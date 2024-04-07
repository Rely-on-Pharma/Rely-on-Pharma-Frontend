import { colors } from '@/constants/colors'
import { Box, Typography, styled } from '@mui/material'
import React from 'react'
const CustomCapsule = styled(Box)(({theme})=>({
    background:colors?.MonochromeLight,
    color:colors?.black,
    padding:" 1rem",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"35rem",
    gap:"2rem",
    borderRadius:"8px",
    margin:"1rem 0"
}))
const Capsule = ({data = []}) => {
  return (
    <CustomCapsule>
        {data?.map((item,ind)=>{
            return(
                <Box key={ind} style={{width:"45%"}}>
                    <Typography style={{fontSize:"1rem", fontWeight:"600"}}>{item?.name}</Typography>
                    <Typography>{item?.sub}</Typography>
                </Box>
            )
        })}
    </CustomCapsule>
  )
}

export default Capsule