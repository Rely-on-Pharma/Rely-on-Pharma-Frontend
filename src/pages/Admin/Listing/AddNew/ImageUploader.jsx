import React, { useContext, useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  Dialog,
  DialogActions,
} from "@mui/material";
import { MemoizedIconButton } from "@/constants/SDK/CustomIconButton";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { colors } from "@/constants/colors";
import { MemoizedButton } from "@/constants/SDK/CustomButton";
import AppContext from "@/constants/context/context";
import { useRouter } from "next/navigation";
const FileUploadComponent = ({
  open,
  handleClose,
  productId,
  productImgs = [],
}) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { showSnackbar} = useContext(AppContext)
  const router = useRouter()
  // Function to handle file selection
  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  // Function to remove an uploaded image
  const handleRemoveImage = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((file, i) => i !== index));
  };

  const hadnleSave = async (e) => {
    e.preventDefault();
  
    try {

      if(selectedFiles?.length==0){
        showSnackbar("Images are mandatory to update", "success");
      }
      const token = localStorage.getItem("token").slice(1, -1);
  
      if (!token || token === undefined || token === null) {
        showSnackbar("You need to login/signup to process the order", "info");
        router.push("/login");
        return; // added return to exit the function if token is missing
      }
  
      const formData = new FormData();
  
      // Append each file to the formData with the key "images"
      selectedFiles.forEach((file, index) => {
        formData.append(`images`, file);
      });

    const headers = {
      Authorization: `Bearer ${token}`,
    };
    //need to solve this anyhow
      const resp = await fetch(`http://localhost:8000/images/${parseInt(productId, 10)}`, {
        method: "POST",
        headers: headers,
        body: formData,
      });
  
      // Handle response
      // For example:
      if (resp.ok) {
        // Handle success
        showSnackbar("success", "success")
        handleClose();
      } else {
        // Handle failure
        const data = await resp.json();
        showSnackbar(data, "error")
      }
    } catch (error) {
      showSnackbar( error?.message||"errror","error")
    }
  };
  
  // Function to render uploaded images with delete option
  const renderUploadedImages = () => {
    return selectedFiles.map((file, index) => (
      <Grid item key={index}>
        <div style={{ position: "relative" }}>
          <Image
            style={{
              maxWidth: "100px",
              maxHeight: "100px",
            }}
            width={360}
            height={360}
            src={URL.createObjectURL(file)}
            alt={`Uploaded ${index}`}
          />
          <MemoizedIconButton
            variant="contained"
            ariaLabel={"close"}
            size="small"
            icon={CloseIcon}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              color: colors?.warning,
              background: colors?.MonochromeLight,
            }}
            handleClick={() => handleRemoveImage(index)}
          />
        </div>
      </Grid>
    ));
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      style={{ padding: "1rem", minWidth: "80rem" }}
    >
      <form>
        <Grid container spacing={2} style={{ padding: "1rem" }}>
          <Grid item xs={12}>
            <Box
              border="2px dashed #aaa"
              borderRadius="4px"
              width="100%"
              height="200px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              overflow="hidden"
              position="relative"
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                  cursor: "pointer",
                }}
                multiple
              />
              <Typography variant="body1" color="textSecondary">
                Click or drag & drop files here
              </Typography>
            </Box>
          </Grid>
          {/* Right side: Uploaded images */}
          <Grid item xs={12}>
            <Typography variant="body" style={{ margin: "auto" }}>
              Uploaded Images:
            </Typography>
            <Grid container spacing={1}>
              {selectedFiles?.length > 0 ? (
                renderUploadedImages()
              ) : (
                <Typography style={{ margin: "auto" }}>
                  No images uploaded yet
                </Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
        <DialogActions>
          <MemoizedButton
            content={"Save"}
            style={{
              width: "50%",
              margin: "auto",
              borderRadius: "8px",
              background: colors?.MonochromeDark,
              marginTop: "1rem",
            }}
            type={"submit"}
            handleClick={(e)=> hadnleSave(e)}
          />
          <MemoizedButton
            content={"Close"}
            style={{
              width: "50%",
              margin: "auto",
              borderRadius: "8px",
              background: colors?.MonochromeDark,
              marginTop: "1rem",
            }}
            type={"submit"}
            handleClick={handleClose}
          />
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default FileUploadComponent;
