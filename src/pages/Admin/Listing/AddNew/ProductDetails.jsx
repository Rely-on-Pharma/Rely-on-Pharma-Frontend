import useAddNewProductForm from "@/common/Hooks/addnewForm";
import { MemoizedButton } from "@/constants/SDK/CustomButton";
import { MemoizedInputField } from "@/constants/SDK/customInput";
import { MemoizedSelectDropDown } from "@/constants/SDK/selectDropdown";
import { colors } from "@/constants/colors";
import AddIcon from '@mui/icons-material/Add';
import { quantityOptions } from "@/constants/data/adminFormData";
import { Box, Typography, styled, ListItem } from "@mui/material";
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import React, { useState } from "react";
import { MemoizedIconButton } from "@/constants/SDK/CustomIconButton";
import { Height, Padding } from "@mui/icons-material";
const CustomProductDetails = styled(Box)(({theme})=>({
  ".input-field":{
    width:"30%",

  },
  ".btn":{
    width:"2.3rem",
    height:"2rem",
    background:colors?.MonochromeDark,
    color:colors?.MonochromeLight,
    Padding:"1rem"
  }
}))
const ProductDetails = () => {
  const { form } = useAddNewProductForm();
  const [quantity, setQuantity] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [chipData, setChipData] = React.useState([])
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };
  return (
    <CustomProductDetails>
      <MemoizedInputField
        multiline={true}
        type={"text"}
        rows={4}
        label="Description"
      />
      <MemoizedInputField
        multiline={true}
        type={"text"}
        rows={4}
        label="Ingredients"
      />
      <MemoizedInputField
        multiline={true}
        type={"text"}
        rows={4}
        label="How To Use"
      />
      <Box>
        <Typography>Manage Variants</Typography>

        <Box  style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <MemoizedSelectDropDown
            form={form}
            optionsData={quantityOptions}
            id={"quantity"}
            name="quantity"
             className="input-field" 
            required={true}
            value={quantity}
            title={"Select Quantity"}
            onChange={(e) => {
              const val = e?.target?.value;
              setQuantity(val);
            }}
          />
          <MemoizedInputField type={"number"} className="input-field"  label="Discount %"  value={discount} onChange={(e)=> setDiscount(e?.target?.value)}/>
          <MemoizedIconButton icon={AddIcon}  className="btn" handleClick={(e)=>{
            const obj = {key: chipData?.length, label: quantity + " "+ discount + "%"}
            setDiscount(0);
            setQuantity(0);
            setChipData([...chipData, obj])
          }} />

          <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
      className="input-field"
    >
      {chipData?.length > 0 ? chipData.map((data) => {
        return (
          <ListItem key={data.key}>
            <Chip
              label={data.label}
              onDelete={ handleDelete(data)}
            />
          </ListItem>
        );
      }) : (<Typography>No variants added</Typography>)}
    </Paper>
        </Box>
      </Box>
    </CustomProductDetails>
  );
};

export default ProductDetails;
