import { Typography, Box, ListItem } from "@mui/material";
import React from "react";

const CustomOrderRow = ({ data }) => {

  return (
    <Box>
      {data?.length > 0 && data?.map((item, index) => (
       
          <Typography key={index}>{item?.quantity} X {item?.productName}</Typography>

      ))}
    </Box>
  );
};

export default CustomOrderRow;
