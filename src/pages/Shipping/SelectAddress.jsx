"use client";
import React from "react";
import { colors } from "@/constants/colors";
import {
  Box,
  styled,
  Typography,
  RadioGroup,
  Radio,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { AddRounded } from "@mui/icons-material";
import { MemoizedButton } from "@/constants/SDK/CustomButton";

const CustomSelectAddress = styled(Box)(({ theme }) => ({
  display: "block",
  padding: "1rem",
  height: "max-content",
  ".add-address-box": {
    gap: "1rem",
    border: "1px dashed",
    borderColor: colors?.primaryDark,
    padding: "1rem 6.5rem",
    marginBottom: "0.5rem",
    width: "fit-content",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    whitespace: "no-wrap",
    "&:hover": {
      border: "1px solid",
      borderColor: colors?.primaryDark,
      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    },
  },
  ".add-address-txt": {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: colors?.primaryDark,
  },
  ".cust-address-box": {
    display: "flex",
    //alignItems: "center",
    margin: "1rem 0rem",
    padding: "1rem 1rem",
    width: "25rem",
    border: "1px solid",
    borderColor: colors?.primaryDark,
    borderRadius: "8px",
  },
  ".address-name": {
    fontSize: "2rem",
    fontWeight: "medium",
  },
  ".btn": {
    display: "block",
    width: "25rem",
    fontSize: "1.5rem",
    borderRadius: "8px",
    background: colors?.primaryDark,
    padding: "4px",
    outline: "none",
    boxShadow: "none",
    margin: "0.4rem 0",
    "&:hover": {
      color: colors?.MonochromeDark,
      background: colors?.seaShellLight,
    },
  },
  [theme.breakpoints.down("xs")]: {
    ".add-address-txt": {
      fontSize: "1rem",
      margin: "0.8rem 0",
    },
    ".add-address-box": {
      padding: "1rem 5rem",
      width: "100%",
    },
    ".cust-address-box": {
      width: "100%",
    },
    ".address-name": {
      fontSize: "1.5rem",
    },
    ".btn": {
      width: "100%",
      fontSize: "1rem",
    },
  },
  [theme.breakpoints.down("sm")]: {
    ".add-address-txt": {
      fontSize: "1rem",
      margin: "0.8rem 0",
    },
    ".add-address-box": {
      padding: "1rem 2rem",
      width: "100%",
    },
    ".cust-address-box": {
      width: "100%",
    },
    ".address-name": {
      fontSize: "1.5rem",
    },
    ".btn": {
      width: "100%",
      fontSize: "1rem",
    },
  },
}));

const SelectAddress = ({ addresses }) => {
  const [value, setValue] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <CustomSelectAddress>
      <Typography className="order-ov" mb={2}>
        Select Shipping Address
      </Typography>
      <Box className="add-address-box" onClick={handleClickOpen}>
        <AddRounded />
        <Typography className="add-address-txt">Add Address</Typography>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: { borderRadius: "20px", backgroundColor: colors?.seaShellLight },
        }}
      >
        <DialogTitle color={colors?.primaryDark} fontWeight="bold">
          ADD ADDRESS
        </DialogTitle>
        <DialogContent>
          <DialogContentText mb={2}>
            To add a new address to your account please enter the address name
            as in the address title and the address with the pincode
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="address title"
            name="address title"
            label="Address Title"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            required
            multiline
            rows={4}
            margin="dense"
            id="address"
            name="address"
            label="Address"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button
            style={{
              display: "block",
              width: "fit-content",
              fontWeight: "200",
              fontSize: "1.5rem",
              borderRadius: "8px",
              background: colors?.primaryDark,
              padding: "0.5rem 0.5rem",
              outline: "none",
              boxShadow: "none",
              margin: "0rem 0.4rem",
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            style={{
              display: "block",
              width: "fit-content",
              fontWeight: "200",
              fontSize: "1.5rem",
              borderRadius: "8px",
              background: colors?.primaryDark,
              padding: "0.5rem 0.5rem",
              outline: "none",
              boxShadow: "none",
              margin: "0rem 0.4rem",
            }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
        {addresses.map((address, index) => (
          <Box key={index} className="cust-address-box">
            <Radio
              value={address.id}
              sx={{
                "&.Mui-checked": {
                  color: colors?.primaryDark,
                },
              }}
            />
            <Box display="flex" flexDirection="column">
              <Typography ml={2} className="address-name">
                {address.name}
              </Typography>
              <Typography ml={2}>{address.address}</Typography>
            </Box>
          </Box>
        ))}
      </RadioGroup>
      <MemoizedButton className="btn" content={"Continue"} />
    </CustomSelectAddress>
  );
};

export default SelectAddress;
