"use client";
import React, { useEffect, useState, useContext } from "react";
import { Box, styled } from "@mui/material";
import Heading from "../Listing/Heading";
import FeedbackTable from "./FeedBackTable";
import { feedbackPageColumns } from "@/constants/data/AdminColumnData";
import AppContext from "@/constants/context/context";
const CustomFeedbackMain = styled(Box)(({ theme }) => ({
  padding: "4rem",
}));

const FeedBackMain = () => {
  const [rowsData, setRowsData] = useState([]);
  const { showSnackbar } = useContext(AppContext);
  const token =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("token")?.slice(1, -1)
      : null;
  useEffect(() => {
    const fetchFeedbackData = async () => {
      try {
        const response = await fetch("http://localhost:8000/feedback", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(errorMessage);
        }
        const textResponse = await response.text();
        const jsonResponse = JSON.parse(textResponse);
        setRowsData(jsonResponse);
      } catch (error) {
        showSnackbar(error.message || "Something went wrong!", "error");
      }
    };

    fetchFeedbackData();
  }, []);

  return (
    <CustomFeedbackMain>
      <Heading title="FEEDBACK" />
      <FeedbackTable
        columns={feedbackPageColumns}
        rows={rowsData}
      ></FeedbackTable>
    </CustomFeedbackMain>
  );
};
export default FeedBackMain;
