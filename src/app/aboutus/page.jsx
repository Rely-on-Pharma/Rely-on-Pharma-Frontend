"use client"
import { colors } from '@/constants/colors'
import { Box, Typography, styled } from '@mui/material'
import React from 'react'
const CustomAbout = styled(Box)(({theme})=>({
  ".heading":{
    fontSize:"60px",
    fontWeight:"700",
    letterSpacing:"1px",
    padding:"12px",
    textAlign:"center",
    color:colors?.primaryDark,
  },
  ".underline":{
    height:"2px",
    width:"15%",
    background:colors.primaryDark,
    margin:"15px auto"
  },
  ".section":{
    width:"100%",
    margin:"auto" ,
    padding:"30px",
    ".section-head":{
      textAlign:"center",
      fontSize:"30px",
      margin:"8px auto",
      fontWeight:"700",
      letterSpacing:"1.2px",
      color:colors?.primaryDark
    },
    ".section-text":{
      fontSize:"18px",
      width:"70%",
      margin:"auto",
      fontWeight:"500"
    }
  },

  [theme.breakpoints.down("sm")]:{
    ".heading":{
      fontSize:"40px",
      padding:"2px",
    },
    ".underline":{
      height:"2px",
      width:"40%",
      margin:"8px auto"
    },
    ".section":{
      padding:"30px 8px",
      ".section-head":{
        fontSize:"28px"
      },
      ".section-text":{
        fontSize:"14px",
        width:"90%",
      }
    },
  }
}))
const AboutUs = () => {
  return (
    <CustomAbout>
      <Typography className='heading' variant='h2'>ABOUT US</Typography>
      <Box className="underline"></Box>
      <Box className="section" style={{background:colors.champagneDark}}>
        <Typography className='section-head' variant='subtitle1'>OUR QUALITY</Typography>
        <Typography className='section-text' variant='body1'>Our goal is to exceed customer expectations in a measurable way. We believe that the quality, safety and efficacy of any product is directly proportional to the amount of care and attention that is used in obtaining quality ingredients, and during its manufacture, with proper good manufacturing practices (GMP) and quality control processes. Our success has been, and will continue to be with excellent quality products, we carter to. Our obsession for quality at every step along the way!</Typography>
      </Box>
      <Box className="section" >
        <Typography className='section-head' variant='subtitle1'>OUR MISSION</Typography>
        <Typography className='section-text' variant='body1'>To offer integrated, best quality pharmaceutical & cosmeceutical products, enabling us to seat among Top rank companies, and to be a reliable partner in our sphere of work through valued, compelling relationships. We believe to surpass customer expectation. Customer satisfaction is seen as a key differentiator, and has become a key element of our business strategy.</Typography>
      </Box>
      <Box className="section" style={{background:colors.champagneDark}}>
        <Typography className='section-head' variant='subtitle1'>OUR VISION</Typography>
        <Typography className='section-text' variant='body1'>We believe to grow beyond its horizon of goals and put our dedicated efforts continuously, in order to become a hallmark of a dynamic organization, responding to its market needs. We strongly believe in providing quality medicine. It is our constant endeavor that every single patient should get best quality & utmost satisfaction.</Typography>
      </Box>
    </CustomAbout>
  )
}

export default AboutUs