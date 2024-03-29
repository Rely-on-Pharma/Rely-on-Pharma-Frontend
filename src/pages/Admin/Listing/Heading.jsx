import { Box, Typography } from '@mui/material'
import React from 'react'

const Heading = ({title=""}) => {
  return (
    <Box >
        <Typography style={{fontSize:"2rem", fontWeight:"600", letterSpacing:"1.2px", marginLeft:"1rem"}} variant='h4'>{title}</Typography>
    </Box>
  )
}

export default Heading