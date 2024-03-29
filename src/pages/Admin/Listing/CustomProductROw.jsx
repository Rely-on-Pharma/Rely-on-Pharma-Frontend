import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const CustomProductROw = ({ image, name }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap:"0.4rem" }}>
      <Avatar alt={name} src={image} />
      <Box>
        <Typography>{name}</Typography>
        <Typography>{name}</Typography>
      </Box>
    </div>
  );
};

export default CustomProductROw;
