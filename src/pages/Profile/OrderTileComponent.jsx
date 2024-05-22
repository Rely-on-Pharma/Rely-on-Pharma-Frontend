import { colors } from "@/constants/colors";
import { Box, Button, Grid, Typography, styled } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

const CustomOrderBox = styled(Box)(({ theme }) => ({
  borderRadius: 10,
  backgroundColor: colors?.white,
  outline: `1px solid ${colors?.primaryDark}`,
  margin: "1.5rem 0rem",
  ".orderDetailHead": {
    fontSize: "1.5vw",
    letterSpacing: "1px",
    textAlign: "left",
    textTransform: "capitalize",
    color: colors?.MonochromeMedium,
    [theme.breakpoints.down("xs")]: {
      fontSize: "3vw",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3vw",
    },
  },
  ".img-box": {
    width: "9rem",
    height: "100%",
    borderRadius: 10,
    objectFit: "contain",
    [theme.breakpoints.down("md")]: {
      marginRight: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "8rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "8rem",
    },
  },
  ".orderDetailSub": {
    fontSize: "1.5vw",
    textAlign: "left",
    textTransform: "capitalize",
    color: colors?.primaryDark,
    [theme.breakpoints.down("xs")]: {
      fontSize: "3vw",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3vw",
    },
  },
  ".orderDetailBox": {
    display: "flex",
    flexDirection: "row",
    padding: "1rem",
    backgroundColor: colors?.champagneBase,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  ".orderId": {
    fontSize: "2vw",
    color: colors?.MonochromeDark,
    [theme.breakpoints.down("xs")]: {
      fontSize: "3vw",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3vw",
    },
  },
  ".qty": {
    fontSize: "1vw",
    color: colors?.MonochromeBase,
    [theme.breakpoints.down("xs")]: {
      fontSize: "2vw",
      marginTop: "0.5rem",
      marginBottom: "0.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2vw",
      marginTop: "0.5rem",
      marginBottom: "0.5rem",
    },
  },
  ".qty-break": {
    fontSize: "1vw",
    color: colors?.MonochromeMedium,
    [theme.breakpoints.down("xs")]: {
      fontSize: "2vw",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2vw",
    },
  },
  ".view-btn": {
    //display: "inline",
    width: "max-content",
    borderRadius: "14px",
    boxShadow: "none",
    backgroundColor: colors.secondaryDark,
    color: colors.primaryLight,
    fontSize: "1vw",
    //marginBottom: "1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2vw",
      marginTop: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2vw",
      marginTop: "1rem",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "1rem",
    },
    [theme.breakpoints.down("lg")]: {
      marginBottom: "1rem",
    },
    "&:hover": {
      backgroundColor: "transparent",
      boxShadow: "none",
      borderRadius: "8px",
      borderColor: colors?.MonochromeDark,
      color: colors?.primaryDark,
    },
  },
  ".track-btn": {
    //display: "inline",
    width: "max-content",
    borderRadius: "14px",
    boxShadow: "none",
    backgroundColor: "transparent",
    color: colors.MonochromeDark,
    borderColor: colors?.primaryDark,
    fontSize: "1vw",
    [theme.breakpoints.down("md")]: {
      marginTop: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2vw",
      marginTop: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2vw",
      marginTop: "1.5rem",
    },
    [theme.breakpoints.down("lg")]: {
      marginTop: "1rem",
    },
    "&:hover": {
      backgroundColor: colors?.secondaryDark,
      boxShadow: "none",
      borderRadius: "8px",
      borderColor: colors?.MonochromeDark,
      color: colors?.white,
    },
  },
}));

const OrderBox = ({ order }) => {
  const router = useRouter()
  return (
    <CustomOrderBox>
      <Grid container className="orderDetailBox">
        <Grid item xs={12} sm={6} md={2} display="flex" flexDirection="column">
          <Typography className="orderDetailHead">Order Date:</Typography>
          <Typography className="orderDetailSub">
            {new Date(order.date).toLocaleDateString()}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={2} display="flex" flexDirection="column">
          <Typography className="orderDetailHead">Status:</Typography>
          <Typography className="orderDetailSub">{order.status}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={2} display="flex" flexDirection="column">
          <Typography className="orderDetailHead">Total Amount:</Typography>
          <Typography className="orderDetailSub">
            {order.final_amount.toFixed(2)}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={2} display="flex" flexDirection="column">
          <Typography className="orderDetailHead">Order #:</Typography>
          <Typography className="orderDetailSub">{order.id}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={2} display="flex" flexDirection="column">
          <Typography className="orderDetailHead">Tracking Id:</Typography>
          <Typography className="orderDetailSub">
            {order.tracking_id===0 ? "--": order?.tracking_id}
          </Typography>
        </Grid>
      </Grid>
      <Grid container padding={"2rem"}>
        <Grid item md={3}>
          <Image
            width={200}
            height={300}
            className="img-box"
            src={order.products[0].image_url[0]}
            alt={"Image"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          display="flex"
          flexDirection="column"
          justifyContent={"left"}
          alignItems={"left"}
          padding={"10px 0px"}
        >
          <Typography className="orderId">ORDER : # {order.id}</Typography>
          <Typography className="qty">
            QUANTITY :{order.quantities.reduce((acc, qty) => acc + qty, 0)}
          </Typography>
          {order.products?.map((product, index) => (
            <Typography key={index} className="qty-break">
              {product.name} X {order.quantities[index]}
            </Typography>
          ))}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={2}
          display="flex"
          flexDirection="column"
          justifyContent={"space-between"}
          alignItems={"left"}
        >
          {/* <Button className={"view-btn"}>View Order </Button> */}
          <Button className={"track-btn"} onClick={()=> order?.tracking_id!==0 && router.push("https://www.shreemaruti.com/track-your-shipment/")}>Track Order</Button>
        </Grid>
      </Grid>
    </CustomOrderBox>
  );
};

export default OrderBox;
