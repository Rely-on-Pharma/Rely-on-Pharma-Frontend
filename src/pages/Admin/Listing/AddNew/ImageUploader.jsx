import React, { useState } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { MemoizedIconButton } from '@/constants/SDK/CustomIconButton';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image'
import { colors } from '@/constants/colors';
const FileUploadComponent = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Function to handle file selection
  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  // Function to remove an uploaded image
  const handleRemoveImage = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((file, i) => i !== index));
  };

  // Function to render uploaded images with delete option
  const renderUploadedImages = () => {
    return selectedFiles.map((file, index) => (
      <Grid item key={index}>
        <div style={{ position: 'relative' }}>
        <Image
              style={{
                maxWidth: '100px', maxHeight: '100px' 
              }}
              width={360}
              height={360}
              src={URL.createObjectURL(file)}
              alt={`Uploaded ${index}`}
            />
          <MemoizedIconButton
            variant="contained"
            size="small"
            icon={CloseIcon}
            style={{ position: 'absolute', top: 0, right: 0 ,color:colors?.warning, background:colors?.MonochromeLight}}
            handleClick={() => handleRemoveImage(index)}
          />
        </div>
      </Grid>
    ));
  };

  return (
    <Grid container spacing={2}>
      {/* Left side: File upload input */}
      <Grid item xs={12} md={6}>
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
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: 0,
              cursor: 'pointer',
            }}
            multiple
          />
          <Typography variant="body1" color="textSecondary">
            Click or drag & drop files here
          </Typography>
        </Box>
      </Grid>
      {/* Right side: Uploaded images */}
      <Grid item xs={12} md={6}>
        <Typography variant="h6">Uploaded Images:</Typography>
        <Grid container spacing={1}>
          { selectedFiles?.length > 0?  renderUploadedImages() : (<Typography>No images uploaded yet</Typography>)}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FileUploadComponent;
