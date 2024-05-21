import { MemoizedButton } from "@/constants/SDK/CustomButton";
import { MemoizedInputField } from "@/constants/SDK/customInput";
import { colors } from "@/constants/colors";
import AppContext from "@/constants/context/context";
import { Box, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useContext, useState } from 'react';


const AddNewVariantAdmin = ({ open, handleClose, productId, variantId=null,onVariantUpdate  }) => {
    const [quantity, setQuantity] = useState(0 );
    const [discount, setDiscount] = useState(0 );
    const {token, showSnackbar } = useContext(AppContext)
    const handleSaveVariant = async(e) => {
        e.preventDefault(); 
        let data = {
            product_id : productId,
            variant_id : variantId,
            discount_percentage : discount,
            quantity: quantity
        }
        try {
            let endPoint = "http://localhost:8000/variants"
            let meth = variantId ? 'PUT' : 'POST';
            const res = await fetch(endPoint , {
                method: meth,
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
              })
            
            if(!res?.ok){
                throw new Error("Something went wrong!");
            }
            showSnackbar("Variant added successfully", "success")
            handleClose()
            onVariantUpdate();
        } catch (error) {
            showSnackbar(error?.message || "error", "error")
        }
    };
  return (
    <Dialog open={open} onClose={handleClose} style={{padding:"1rem"}}>
      <form onSubmit={handleSaveVariant}>
        <DialogTitle>{variantId ? "Update Variant" : "Add New Variant"}</DialogTitle>
        <DialogContent>
          <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
           
            <MemoizedInputField type={"number"} className="input-field" label="Quantity" value={quantity} onChange={(e) => setQuantity(e?.target?.value)} />
            <MemoizedInputField type={"number"} className="input-field" label="Discount %" value={discount} onChange={(e) => setDiscount(e?.target?.value)} />
          </Box>
        </DialogContent>
        <DialogActions>
          
        <MemoizedButton type="submit" content={"Save"} style={{width:"100%", background:colors?.seaShellDark, borderRadius:"4px", boxShadow:"none"}}/>
          <MemoizedButton content={"Cancel"} handleClick={handleClose} style={{width:"100%", background:colors?.seaShellDark, borderRadius:"4px", boxShadow:"none"}}/>
        
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default AddNewVariantAdmin