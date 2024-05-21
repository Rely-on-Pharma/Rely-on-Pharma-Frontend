export const getOrderPayload= (address, cart, cartAmount, totalAmt)=>{
    return {
        date: new Date().toISOString(),
        tracking_id: 0,
        address: {
            pincode: parseInt(address?.pincode),  
            address_line: address?.address_line,
            user_tag: address?.user_tag,
            id:address?.id
        },
        status: "pending", 
        cart_amount: parseFloat(cartAmount), 
        final_amount: parseFloat(totalAmt), 
        products: cart?.map(item => ({
            name: item.name,
            brand: item.brand,
            category: item.category,
            image_url: [...item.image_url],
            vendor_id: parseInt(item.vendor_id), 
            description: item.description,
            selling_price: parseFloat(item.selling_price), 
            how_to_use: item.how_to_use,
            vertical: item.vertical,
            id: parseInt(item?.product_id) 
        })),
        quantities: cart?.map(item => parseInt(item.qty)) 
    };
}