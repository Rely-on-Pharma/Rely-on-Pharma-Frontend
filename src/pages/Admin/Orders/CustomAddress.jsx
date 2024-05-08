import React from "react";
import { Typography, Box } from "@mui/material";

const AddressComponent = ({ address }) => {
  return (
    <Box>
      <Typography>Pincode: {address.pincode}</Typography>
      <Typography>Address Line: {address.address_line}</Typography>
      <Typography>User Tag: {address.user_tag}</Typography>
    </Box>
  );
};

export default AddressComponent;
