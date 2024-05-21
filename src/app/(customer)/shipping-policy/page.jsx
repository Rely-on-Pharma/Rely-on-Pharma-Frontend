"use client";
import { colors } from "@/constants/colors.js";
import { Box, Typography, styled } from "@mui/material";
import React from "react";

const CustomShippingPolicy = styled(Box)(({ theme }) => ({
  ".heading": {
    padding: "4vh 0vh",
    fontSize: "10vh",
    color: colors?.primaryDark,
    [theme.breakpoints.down("xs")]: {
      fontSize: "6vh",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "6vh",
    },
  },
  ".date": {
    padding: "2vh 15vw",
    fontSize: "2.5vh",
    olor: colors?.primaryLight,
  },
  ".subheading": {
    padding: "2vh 15vw",
    fontSize: "2.5vh",
    fontWeight: "bold",
    color: colors?.secondaryDark,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5vh",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5vh",
    },
  },
  ".body": {
    padding: "2vh 15vw",
    whiteSpace: "pre-line",
    fontSize: "2.5vh",
    fontWeight: "500",
    color: colors?.secondaryDark,
    textAlign: "justify",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5vh",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5vh",
    },
    ".list-items": {
      listStyleType: "disc",
      padding: "0vh 4vw",
      ".item": {
        margin: "1vh 0vw",
      },
    },
  },
  ".bheading": {
    padding: "0.5vh 15vw",
    fontSize: "2.8vh",
    fontWeight: "bold",
    color: colors?.secondaryDark,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5vh",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5vh",
    },
  },
}));

const ShippingPolicy = () => {
  return (
    <CustomShippingPolicy>
      <Typography className="heading" textAlign={"center"}>
        Shipping Policy
      </Typography>
      <Typography className="date">Revised Date: 9th May 2024</Typography>
      <div className="body">
        Thank you for shopping with Cutiskart. We strive to provide the best
        shipping experience for our customers. Please review our shipping policy
        below:
        <ul className="list-items">
          <li className="item">
            Processing Time - Orders are typically processed and shipped within
            1-3 business days of receiving payment.
          </li>
          <li className="item">
            Shipping Rates - Shipping rates are calculated based on the weight
            of the items, destination, and shipping method selected during
            checkout. Customers can view shipping rates before confirming their
            order.
          </li>
          <li className="item">
            Delivery Time - Delivery times vary depending on the shipping method
            selected and the destination.
          </li>
          <li className="item">
            Order Tracking - Once your order has shipped, your order&apos;s tracking
            id will be updated on the website which can then be used to track
            your order on https://www.shreemaruti.com/track-your-shipment/
          </li>
          <li className="item">
            Shipping Restrictions - Some items may be restricted from shipping
            to certain locations due to legal or logistical reasons. Customers
            will be notified during checkout if any restrictions apply to their
            orders.
          </li>
          <li className="item">
            Shipping Address - Customers are responsible for providing accurate
            shipping information. We are not responsible for orders shipped to
            incorrect or incomplete addresses provided by the customer
          </li>
          <li className="item">
            Shipping Delays - While we strive to deliver orders on time,
            unforeseen circumstances such as weather delays or carrier
            disruptions may occur. We appreciate your patience and understanding
            in such situations.
          </li>
          <li className="item">
            Lost or Stolen Packages – Cutiskart is not responsible for lost or
            stolen packages once they have been successfully delivered to the
            shipping address provided by the customer. Please ensure that
            someone is available to receive the package or consider using a
            secure delivery location.
          </li>
          <li className="item">
            Shipping Policy Updates - We reserve the right to update our
            shipping policy at any time without prior notice. Any changes to our
            shipping policy will be posted on this page.
          </li>
        </ul>
        <br />
        If you have any questions or concerns about our shipping policy, please
        do not hesitate to contact us at care@theskinluxury.in
      </div>
    </CustomShippingPolicy>
  );
};

export default ShippingPolicy;
