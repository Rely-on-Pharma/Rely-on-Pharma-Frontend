import { MemoizedButton } from "@/constants/SDK/CustomButton";
import { MemoizedIconButton } from "@/constants/SDK/CustomIconButton";
import { MemoizedInputField } from "@/constants/SDK/customInput";
import { MemoizedSelectDropDown } from "@/constants/SDK/selectDropdown";
import { colors } from "@/constants/colors";
import AppContext from "@/constants/context/context";
import { countryOptions, pincodeOptions } from "@/constants/data/adminFormData";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const UpdatePincodeDialog = ({ open, handleClose }) => {
  const [pincodes,setPincodes] = useState([])
  const [country, setCountry] = useState("none");
  const [selectedOption, setSelectedOption] = useState("none");
  const [pincode, setPincode] = useState("");
  const [chipData, setChipData] = useState([]);
  const { showSnackbar } = useContext(AppContext);
  const router = useRouter()
  const isFormVisible = country !== "none" && selectedOption !== "none";

  useEffect(() => {
    if (!open) return;
    const fetchPincodes = async () => {
        const token = localStorage.getItem('token').slice(1, -1) // the token string is "token". Hence stripping the 

    if (!token || token === undefined || token === null) {
      showSnackbar("You need to login/signup to process the order", "info")
      router.push("/login")
    }
    const headers = {
      "Content-Type": "application/json", 
      Authorization: `Bearer ${token}`, 
    };
      try {
        const response = await fetch("http://localhost:8000/vendors/1/pincode/", {
            method:"GET",
            headers:headers
        });
        if (!response.ok) {
          throw new Error("Failed to fetch pincodes");
        }
        const data = await response.json();
        setPincodes(data);
        console.log("yash", data)
      } catch (error) {
        showSnackbar("Failed to fetch pincodes", "error");
      }
    };

    fetchPincodes();
  }, [open]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip !== chipToDelete));
  };
  
  const handleAddPincode = () => {
    const newPincode = pincode?.trim();
    if (!newPincode) {
      showSnackbar("Pincode cannot be empty", "error");
      return;
    }
    if(newPincode?.length<6){
        showSnackbar("Invalid Pincode", "error");
      return;
    }
    if (selectedOption === "Delete") {
      if (!pincodes.includes(parseInt(newPincode))) {
        showSnackbar("Pincode does not exist", "error");
        setPincode("");
        return;
      }
    } else {
      if (pincodes.includes(parseInt(newPincode))) {
        showSnackbar("Pincode already exists", "error");
        setPincode("");
        return;
      }
    }
    if (chipData?.includes(newPincode)) {
      showSnackbar("Pincode already exists in update list", "error");
      setPincode("");
      return;
    } else {
      setChipData([...chipData, newPincode]);
      setPincode("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token').slice(1, -1) // the token string is "token". Hence stripping the 

    if (!token || token === undefined || token === null) {
      showSnackbar("You need to login/signup to process the order", "info")
      router.push("/login")
    }
    const headers = {
      "Content-Type": "application/json", 
      Authorization: `Bearer ${token}`, 
    };
    try {
      const response = await fetch("http://localhost:8000/vendors/1/pincode", {
        method: selectedOption === "Delete" ?"DELETE" : "POST",
        headers:headers,
        body: JSON.stringify(chipData)
      });
      if(!response?.ok){
        throw new Error("Unable to add pincodes")
      }
      showSnackbar("Pincodes updated successfully", "success");
      handleClose();
    } catch (error) {
      showSnackbar("Failed to update pincodes", "error");
    }
    setChipData([])
    setCountry("none")
    setSelectedOption("none")
  };

  return (
    <Dialog open={open} onClose={handleClose} style={{ padding: "1rem" }}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>{"PINCODES"}</DialogTitle>
        <DialogContent>
          <Box style={{ minWidth: "30rem" }}>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <MemoizedSelectDropDown
                className="input-dropdown"
                id={"country"}
                name="country"
                required={true}
                value={country}
                title={"Select country"}
                optionsData={countryOptions}
                onChange={(e) => {
                  const val = e?.target?.value;
                  setCountry(val);
                }}
              />
              <MemoizedSelectDropDown
                className="input-dropdown"
                id={"selectedOption"}
                name="selectedOption"
                required={true}
                value={selectedOption}
                title={"Select Action"}
                optionsData={pincodeOptions}
                onChange={(e) => {
                  const val = e?.target?.value;
                  setSelectedOption(val);
                  setChipData([]);
                  setPincode("");
                }}
              />
            </Box>
            {isFormVisible && (
              <>
                <Box style={{ marginBlock: "1rem" }}>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <MemoizedInputField
                      type={"text"}
                      className="input-field"
                      label="Enter Pincode"
                      value={pincode}
                      onChange={(e) => setPincode(e?.target?.value)}
                    />
                    <MemoizedIconButton
                      icon={AddIcon}
                      className="btn"
                      onClick={handleAddPincode}
                    />
                  </Box>
                  <Paper
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      flexWrap: "wrap",
                      listStyle: "none",
                      p: 0.5,
                      m: 0,
                    }}
                    component="ul"
                    className="input-field"
                  >
                    {chipData?.length > 0 ? (
                      chipData.map((data, ind) => {
                        return (
                          <ListItem
                            key={ind}
                            style={{
                              display: "inline-flex",
                              margin: "0.2rem",
                              maxWidth: "fit-content",
                            }}
                          >
                            <Chip
                              label={data}
                              style={{ background: colors?.MonochromeLight }}
                              onDelete={handleDelete(data)}
                            />
                          </ListItem>
                        );
                      })
                    ) : (
                      <Typography>No Pincodes added</Typography>
                    )}
                  </Paper>
                </Box>
              </>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <MemoizedButton
            type="submit"
            content={selectedOption === "Delete" ? "Delete" : "Save"}
            style={{
              width: "100%",
              background: colors?.seaShellDark,
              borderRadius: "4px",
              boxShadow: "none",
            }}
          />
          <MemoizedButton
            content={"Cancel"}
            handleClick={handleClose}
            style={{
              width: "100%",
              background: colors?.seaShellDark,
              borderRadius: "4px",
              boxShadow: "none",
            }}
          />
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default UpdatePincodeDialog;
