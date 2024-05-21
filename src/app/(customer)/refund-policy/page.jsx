"use client";
import { colors } from "@/constants/colors.js";
import { Box, Typography, styled } from "@mui/material";
import React from "react";

const CustomRefundPolicy = styled(Box)(({ theme }) => ({
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

const RefundPolicy = () => {
  return (
    <CustomRefundPolicy>
      <Typography className="heading" textAlign={"center"}>
        Refund Policy
      </Typography>
      <Typography className="date">Revised Date: 9th May 2024</Typography>
      <div className="body">
        Please note that our return policy is currently a sensitive matter and
        may be subject to change in the future. We kindly ask for your
        understanding and patience during this time. If your product is not
        replaced or returned, please rest assured that you will receive a refund
        if the product is expired.
        <ul className="list-items">
          <li className="item">
            Raise a return/replacement request within 2 days from the date of
            delivery, if you’ve received wrong or expired product(s). Please
            raise a request here with order and contact details. You can also
            raise a request with us using the Chat option. In case of damaged/
            missing product(s), raise a return/ replacement request within 2
            days from the date of delivery.
          </li>
          <li className="item">
            After reviewing your return request, we will send our courier
            partner to pick up the products delivered to you.
          </li>
          <li className="item">
            In case our reverse pick up service is not available at your
            location, you will need to self-ship the product via any reliable
            courier partner. We will reimburse the courier charges.
          </li>
          <li className="item">
            After your product(s) is received, we will verify it against the
            claim and initiate the replacement or refund accordingly. Please
            note that replacement will depend upon the stock availability.
          </li>
        </ul>
        <br />
        Under what conditions return/ replacement requests will not be accepted?
        <ul className="list-items">
          <li className="item">Opened/used/altered products.</li>
          <li className="item">
            The return/replacement request is generated after 2 days from the
            date of delivery.
          </li>
          <li className="item">
            The damaged/ missing product is reported after 2 days from the date
            of delivery.
          </li>
        </ul>
        <br />
        <b>How are returns processed?</b>
        <br />
        <br />
        In case of prepaid orders, money will be returned to the bank
        account/credit/debit card or where the payment was made from within 7
        business working days
        <br />
        <br />
        <b>
          How long does it take to receive a refund for a cancelled order or
          returned product?
        </b>
        <br />
        <br />
        We will process your refund within 7 business days in case of
        cancellation of an order. In case of returns, we will refund the money
        after the product has been received by our warehouse and post completion
        of quality check. Please note, this entire process takes 2 weeks after
        the return has been picked up
        <br />
        <br />
        <ul className="list-items">
          <li className="item">
            <u>Return Pickup</u>: Wherever possible we will facilitate the
            pick-up of the item. In case, the pick-up cannot be arranged by us,
            you can return the item through SpeedPost courier service and share
            tracking details and we will return the courier costs.
          </li>
          <li className="item">
            <u>Refund Policy</u>: In order to confirm cancellation/return of
            item(s) in your order, you need to indicate your refund preference.
            There are two modes of refund:
          </li>
          <li className="item">
            <u>Shipment Policy</u>: An extra facilitating charge of INR 50
            (Indian Rupees 50 Only) for orders placed using Cash on Delivery as
            payment method.
          </li>
        </ul>
        <br />
        Bank Account - In this case, the money will be refunded back to the
        account that you add as your preferred refund destination while
        cancelling/returning item(s) in your order. Once you have requested the
        cancellation/return of item(s) in your order, VayorTricks Pvt Ltd. will
        complete the cancellation/return and initiate the refund, depending on
        your preference.
      </div>
    </CustomRefundPolicy>
  );
};

export default RefundPolicy;
