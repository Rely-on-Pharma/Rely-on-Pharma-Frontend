"use client";
import React, { useContext } from "react";
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
import AppContext from "@/constants/context/context";
import { useRouter } from "next/navigation";

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
    fontSize: "1.4rem",
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
      fontSize: "1.2rem",
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
      fontSize: "1.2rem",
    },
    ".btn": {
      width: "100%",
      fontSize: "1rem",
    },
  },
}));

const SelectAddress = ({ addresses,fetchAddresses }) => {
  const [value, setValue] = React.useState(0 || null);
  const [open, setOpen] = React.useState(false);
  const {showSnackbar} = useContext(AppContext)
  const router = useRouter();
  const [addressValue, setAddressValue]=  React.useState({
    user_tag:"",
    address_line:"",
    pincode:null,
    verified:false
  })
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddNewAddress = async () => {
    try {
      const token = localStorage.getItem('token').slice(1,-1);
      if (!token) {
        showSnackbar("You need to login/signup to process the order", "info");
        router.push("/login");
        return;
      }
  
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
  
      if (!addressValue?.address_line || !addressValue?.pincode || !addressValue?.user_tag) {
        showSnackbar("All fields are mandatory", "error");
        return;
      }
  
      const resp = await fetch("http://localhost:8000/address", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          user_tag: addressValue?.user_tag,
          pincode: addressValue?.pincode,
          address_line: addressValue?.address_line
        })
      });
  
      if (!resp.ok) {
        throw new Error("Unable to add new address");
      }
  
      showSnackbar("New Address Added successfully!", "success");
      setOpen(false);
      fetchAddresses();
    } catch (error) {
      console.error("Error adding new address:", error);
      showSnackbar("Unable to add new address", "error");
      setOpen(false)
    }
  };
  
  const checkAvailability = async()=>{
    try{
      const token = localStorage.getItem('token').slice(1,-1);
      if (!token) {
        showSnackbar("You need to login/signup to process the order", "info");
        router.push("/login");
        return;
      }
  
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const pin = parseInt(addressValue?.pincode);
      if(!pin){
        showSnackbar("Pincode is empty!","error");
        return;
      }
      const resp = await fetch(`http://localhost:8000/vendors/${1}/pincode/${pin}`,{
        method:"GET",
        headers:headers
      })
      if(!resp?.ok){
        throw new Error("Unable to check availability!");
      }
      const data = await resp.json();
      if(data){
        setAddressValue((prevState) => ({ ...prevState, verified: true }));
        showSnackbar("Pincode is available for deleivery", "info")
      }else{
        showSnackbar("Pincode is not available for deleivery", "info")
      }
    }catch(e){
      console.log("yash", e)
      showSnackbar(e?.message || "Unable to check availability", "error")
    }
  }
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
            name="user_tag"
            label="Address Title"
            fullWidth
            variant="outlined"
            onChange={(e)=> setAddressValue({...addressValue, user_tag: e?.target?.value})}
          />
          <TextField
            autoFocus
            required
            multiline
            rows={4}
            margin="dense"
            id="address"
            name="address_line"
            label="Address"
            fullWidth
            variant="outlined"
            onChange={(e)=> setAddressValue({...addressValue, address_line: e?.target?.value})}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="pincode"
            name="pincode"
            label="Enter Pincode"
            fullWidth
            onChange={(e)=> setAddressValue({...addressValue, pincode: parseInt(e?.target?.value)})}
            variant="outlined"
          />
          <MemoizedButton disabled={addressValue?.verified} style={{width:"100%", margin:"0.4rem auto", display:"block", borderRadius:"12px"}} content={addressValue?.verified ? "Verified" : "Verify"} handleClick={checkAvailability}/>
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
            onClick={handleAddNewAddress}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
        {addresses?.length>0 ? (addresses.map((address, index) => (
          <Box key={index} className="cust-address-box">
            <Radio
              value={index}
              sx={{
                "&.Mui-checked": {
                  color: colors?.primaryDark,
                },
              }}
            />
            <Box display="flex" flexDirection="column">
              <Typography ml={2} className="address-name">
                {address.user_tag}
              </Typography>
              <Typography ml={2}>{address.address_line}</Typography>
              <Typography ml={2}>{address.pincode}</Typography>
            </Box>
          </Box>
        ))):(<Typography>No Saved Address</Typography>)}
      </RadioGroup>
      <MemoizedButton className="btn" content={"Continue"} />
    </CustomSelectAddress>
  );
};

export default SelectAddress;
