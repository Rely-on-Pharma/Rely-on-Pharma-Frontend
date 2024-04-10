"use client";
import { MemoizedButton } from "@/constants/SDK/CustomButton";
import { MemoizedIconButton } from "@/constants/SDK/CustomIconButton";
import { colors } from "@/constants/colors";
import AppContext from "@/constants/context/context";
import StarIcon from "@mui/icons-material/Star";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Typography,
  styled,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useContext, useEffect, useState } from "react";
import {
  DialogContent,
  DialogActions,
  Dialog,
  Button,
  DialogTitle,
} from "@mui/material";
import { MemoizedSelectDropDown } from "@/constants/SDK/selectDropdown";
import { MemoizedInputField } from "@/constants/SDK/customInput";
import { quantityOptions } from "@/constants/data/adminFormData";
import AddNewVariantAdmin from "./AddNewVariantAdmin";
const CustomAdminProductDetails = styled(Box)(({ theme }) => ({
  padding: "2rem",
  ".prodName": {
    fontSize: "36px",
    fontWeight: "600",
    letterSpacing: "1px",
    textAlign: "left",
    textTransform: "capitalize",
  },
  ".btn": {
    textTransform: "capitalize",
    borderRadius: "8px",
    "&.addToBtn": {
      background: colors?.primaryDark,
      color: colors?.MonochromeLight,
      width: "40%",
      padding: "8px",
    },
    "&.favBtn": {
      background: colors?.secondaryMedium,
      color: colors?.white,
      width: "8%",
      padding: "10px",
      "&.active": {
        background: colors?.secondaryDark,
        color: colors?.white,
      },
    },
    "&.checkBtn": {
      background: colors?.secondaryMedium,
      color: colors?.white,
      padding: "8px",
      width: "50%",
    },
  },

  [theme.breakpoints.down("md")]: {
    padding: "0.5rem",
    ".prodName": {
      fontSize: "26px",
    },
    ".btn": {
      "&.addToBtn": {
        width: "80%",
      },
      "&.favBtn": {
        width: "16%",
      },
      "&.checkBtn": {
        width: "100%",
      },
    },
  },
}));

const AdminProductDetails = ({ productData, productId }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [variantId, setvariantId] = useState(null);
  const [variants, setVariants] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/variants/${productId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setVariants(jsonData);
        console.log("yash", jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();

    // Cleanup function (optional)
    return () => {
      // Cleanup code, if needed
    };
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount
  const handleOpenDialog = (item=null) => {
    setvariantId(item?.variant_id);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  if (loading) {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <CustomAdminProductDetails>
      <Typography className="prodName">{productData?.name}</Typography>
      <Typography
        style={{
          fontSize: "16px",
          textTransform: "capitalize",
          marginBlock: "8px",
        }}
      >
        by {productData?.brand}
      </Typography>
      <Typography style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <StarIcon /> 4.5
      </Typography>
      <Box>
        <List dense={true}>
          {variants?.length > 0 ? (
            variants?.map((item) => (
              <ListItem
                key={item?.variant_id}
                secondaryAction={
                  <MemoizedIconButton
                    end="end"
                    aria-label="delete"
                    icon={EditIcon}
                    handleClick={() => handleOpenDialog(item)}
                  />
                }
                sx={{ display: "inline-block" }}
              >
                <ListItemText
                  primary={`Quantity:- ${item?.quantity}`}
                  secondary={`Discount:- ${item?.discount_percentage}`}
                />
              </ListItem>
            ))
          ) : (
            <></>
          )}
          <MemoizedButton
            content={"Add New Variant"}
            style={{
              margin: "0.5rem auto",
              width: "100%",
              padding: "8px",
              background: colors?.MonochromeMedium,
              boxShadow: "none",
              borderRadius: "4px",
            }}

            handleClick={()=> 
                handleOpenDialog()}
          />
        </List>
      </Box>

      <MemoizedButton
        className={"btn addToBtn"}
        content={"Update Product"}
        style={{
          margin: "auto",
          width: "100%",
          padding: "8px",
          background: colors?.MonochromeBase,
          boxShadow: "none",
        }}
      />

      <AddNewVariantAdmin
        open={openDialog}
        handleClose={handleCloseDialog}
        productId={productId}
        variantId={variantId}
      />
    </CustomAdminProductDetails>
  );
};

export default AdminProductDetails;
