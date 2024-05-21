import { Typography, Box } from "@mui/material";
import React from "react";

const CustomFeedbackRow = ({ data }) => {
  return (
    <Box>
      {data?.length > 0 &&
        data?.map((item, index) => (
          <Typography key={index}>{item?.name}</Typography>
        ))}
    </Box>
  );
};

export default CustomFeedbackRow;