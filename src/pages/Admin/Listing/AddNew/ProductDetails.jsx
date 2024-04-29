import { MemoizedInputField } from "@/constants/SDK/customInput";
import { colors } from "@/constants/colors";
import { Box, styled } from "@mui/material";
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
const ProductDetails = ({ form }) => {
  // const [quantity, setQuantity] = useState(0);
  // const [discount, setDiscount] = useState(0);
  // const [chipData, setChipData] = React.useState([])
  // const handleDelete = (chipToDelete) => () => {
  //   setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  // };
  return (
    <CustomProductDetails>
      <MemoizedInputField
          type={"number"}
          label={"Enter quantity"}
          name="quantity"
          value={form?.values?.quantity}
          onChange={(e) => form?.setFieldValue("quantity", e?.target?.value)}
        />
      <MemoizedInputField
        multiline={true}
        type={"text"}
        rows={4}
        label="Description"
        value={form?.values?.description}
        name={"description"}
        onChange={(e)=> form?.setFieldValue("description", e?.target?.value)}
      />
      <MemoizedInputField
        multiline={true}
        type={"text"}
        rows={4}
        label="Ingredients"
        value={form?.values?.ingredients}
        name={"ingredients"}
        onChange={(e)=> form?.setFieldValue("ingredients", e?.target?.value)}
      />
      <MemoizedInputField
        multiline={true}
        type={"text"}
        rows={4}
        label="How To Use"
        value={form?.values?.how_to_use}
        name={"how_to_use"}
        onChange={(e)=> form?.setFieldValue("how_to_use", e?.target?.value)}
      />

      {/* Manage variants moved to seperate page */}
      {/* <Box>
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
      </Box> */}
    </CustomProductDetails>
  );
};

export default ProductDetails;
