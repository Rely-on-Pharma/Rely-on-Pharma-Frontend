"use client";
import { MemoizedButton } from "@/constants/SDK/CustomButton";
import { MemoizedIconButton } from "@/constants/SDK/CustomIconButton";
import { colors } from "@/constants/colors";
import EditIcon from "@mui/icons-material/Edit";
import StarIcon from "@mui/icons-material/Star";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import AddNewVariantAdmin from "./AddNewVariantAdmin";
import FileUploadComponent from "./ImageUploader";
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
  const [openImageDialog, setImageDialog] = useState(false);
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
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    // Call the fetchData function when the component mounts
    fetchData();
    // Cleanup function (optional)
    return () => {
      // Cleanup code, if needed
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleVariantUpdate = () => {
    // Fetch variants again after update
    fetchData();
  };
  const handleOpenDialog = (item = null) => {
    setvariantId(item?.variant_id);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenImageDialog = (item = null) => {
    setImageDialog(true);
  };
  // const handleCloseImageDialog = () => {
  //   setImageDialog(false);
  // };
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
            handleClick={() => handleOpenDialog()}
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

      <MemoizedButton
        className={"btn addToBtn"}
        content={"Add/Update Images"}
        handleClick={() => handleOpenImageDialog()}
        style={{
          margin: "auto",
          width: "100%",
          padding: "8px",
          background: colors?.MonochromeMedium,
          boxShadow: "none",
        }}
      />

      <AddNewVariantAdmin
        open={openDialog}
        handleClose={handleCloseDialog}
        productId={productId}
        variantId={variantId}
        onVariantUpdate={handleVariantUpdate}
      />
      <FileUploadComponent
        open={openImageDialog}
        handleClose={handleCloseDialog}
        productId={productId}
        productImgs={["https://picsum.photos/seed/OyKk2mm/640/480","https://picsum.photos/seed/OyKk2mm/640/480" ]}
      />
    </CustomAdminProductDetails>
  );
};

export default AdminProductDetails;
