import { useState } from "react";
import TextField from "@mui/material/TextField";
import { colors } from "@/constants/colors";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";

const HomeAddressBox = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [home, setHome] = useState({
    title: "Home",
    address: "123 Main St",
  });
  const [addresses, setAddresses] = useState([home]);
  const [newAddress, setNewAddress] = useState(null);

  const handleAddAddressClick = () => {
    setNewAddress(home);
  };

  const handleNewAddressSaveClick = () => {
    setAddresses([...addresses, newAddress]);
    setNewAddress(null);
  };

  const handleNewAddressCancelClick = () => {
    setNewAddress(null);
  };
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleTitleChange = (event) => {
    setHome({ ...home, title: event.target.value });
  };

  const handleAddressChange = (event) => {
    setHome({ ...home, address: event.target.value });
  };

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row", md: "row", lg: "row" }}
      gap={2}
    >
      <Box
        sx={{
          borderRadius: 5,
          border: 1,
          borderColor: "black",
          padding: 2,
          display: "flex",
          flexDirection: "column",
          maxWidth: { xs: "100", sm: "100%", md: "50%", lg: "50%" },
          width: "fit-content",
          height: "fit-content",
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            color={colors?.primaryDark}
            sx={{
              fontSize: { xs: "4vw", md: "3vw", lg: "1.7vw" },
            }}
          >
            {isEditing ? (
              <TextField
                value={home.title}
                onChange={handleTitleChange}
                size="small"
                width="30%"
              />
            ) : (
              home.title
            )}
          </Typography>
          <Button
            variant="outlined"
            onClick={isEditing ? handleSaveClick : handleEditClick}
            sx={{
              border: "1px solid black",
              backgroundColor: colors?.primaryMedium,
              borderRadius: "8px",
              boxShadow: "none",
              marginX: "1rem",
            }}
          >
            {isEditing ? "Save" : "Edit"}
          </Button>
        </Box>
        <Typography variant="body1" mt={2}>
          {isEditing ? (
            <TextField
              value={home.address}
              onChange={handleAddressChange}
              size="small"
              multiline
              width="40%"
              rows={4}
            />
          ) : (
            home.address
          )}
        </Typography>
      </Box>
      <Box
        sx={{
          borderRadius: 5,
          border: 1,
          borderStyle: "dashed",
          borderColor: "black",
          padding: 2,
          display: "flex",
          flexDirection: "column",
          width: {
            xs: "100%",
            sm: "fit-content",
            md: "fit-content",
            lg: "fit-content",
          },
          justifyContent: "center",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          onClick={handleAddAddressClick}
          sx={{ cursor: "pointer" }}
        >
          <Box display="flex" alignItems="center">
            <AddIcon sx={{ mr: 1 }} />
            <Typography
              color={colors?.primaryDark}
              sx={{
                fontSize: { xs: "2vw", md: "3vw", lg: "1.7vw" },
              }}
            >
              Add Address
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeAddressBox;
