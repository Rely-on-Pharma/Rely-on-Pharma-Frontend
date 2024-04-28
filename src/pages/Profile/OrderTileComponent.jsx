import { useState } from "react";
import { Box, Typography, Button, styled, Grid } from "@mui/material";
import { colors } from "@/constants/colors";
import Image from "next/image";
import { MemoizedButton } from "@/constants/SDK/CustomButton";

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
      borderRadius: "14px",
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
      borderRadius: "14px",
    },
  },
}));

const OrderBox = ({ order }) => {
  return (
    <CustomOrderBox>
      <Grid container className="orderDetailBox">
        <Grid item xs={12} sm={6} md={2} display="flex" flexDirection="column">
          <Typography className="orderDetailHead">Order Date:</Typography>
          <Typography className="orderDetailSub">{order.orderDate}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={2} display="flex" flexDirection="column">
          <Typography className="orderDetailHead">Status:</Typography>
          <Typography className="orderDetailSub">{order.status}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={2} display="flex" flexDirection="column">
          <Typography className="orderDetailHead">Total Amount:</Typography>
          <Typography className="orderDetailSub">{order.total}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={2} display="flex" flexDirection="column">
          <Typography className="orderDetailHead">Order #:</Typography>
          <Typography className="orderDetailSub">{order.orderId}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={2} display="flex" flexDirection="column">
          <Typography className="orderDetailHead">Tracking Id:</Typography>
          <Typography className="orderDetailSub">{order.trackId}</Typography>
        </Grid>
      </Grid>
      <Grid container padding={"2rem"}>
        <Grid item md={3}>
          <Image
            width={200}
            height={300}
            className="img-box"
            src={order.titleImg}
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
          <Typography className="orderId">ORDER : # {order.orderId}</Typography>
          <Typography className="qty">QUANTITY :{order.qty}</Typography>
          {order.products?.map((product) => (
            <Typography className="qty-break">
              {product[1]} X {product[0]}
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
          <Button className={"view-btn"}>View Order </Button>
          <Button className={"track-btn"}>Track Order</Button>
        </Grid>
      </Grid>
    </CustomOrderBox>
  );
};

export default OrderBox;
