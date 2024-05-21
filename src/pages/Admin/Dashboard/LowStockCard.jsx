"use client";
import { useEffect, useState } from "react";
import { colors } from "@/constants/colors";
import { Box, Grid, styled, Typography } from "@mui/material";
import AppContext from "@/constants/context/context";

const CustomStockCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#888888",
  padding: "2rem",
  margin: "2rem",
  borderRadius: 12,
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
}));

const LowStockCard = () => {
  const [lowStockItems, setLowStock] = useState([]);
  useEffect(() => {
    const fetchLowStock = async () => {
      //setLoading(true);
      try {
        const response = await fetch("http://localhost:8000/lowstock", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(errorMessage);
        }

        const jsonResponse = await response.json();
        // Convert the array of tuples to an array of objects
        const formattedResponse = jsonResponse.map(([name, quantity]) => ({
          name,
          quantity,
        }));
        setLowStock(formattedResponse);
      } catch (error) {
        showSnackbar(error.message || "Something went wrong!", "error");
      }
    };

    fetchLowStock();
  }, []);

  return (
    <CustomStockCard>
      <Typography
        variant="h4"
        sx={{ color: colors?.white, textDecoration: "underline" }}
      >
        Low Stock
      </Typography>
      {lowStockItems.length === 0 ? (
        <Typography
          variant="h6"
          sx={{ color: "rgba(255, 255, 255, 0.6)", paddingY: "1rem" }}
        >
          Everything is Stocked Up!
        </Typography>
      ) : (
        lowStockItems.map((item, index) => (
          <Box
            key={index}
            display={"flex"}
            flexDirection={"row"}
            sx={{ paddingY: "1rem" }}
            justifyContent={"space-between"}
          >
            <Typography variant="h6" sx={{ color: "rgba(255, 255, 255, 0.6)" }}>
              {item.name}
            </Typography>
            <Typography
              ml={4}
              variant="h6"
              sx={{ color: "rgb(255, 255, 255)" }}
            >
              {item.quantity}
            </Typography>
          </Box>
        ))
      )}
    </CustomStockCard>
  );
};

export default LowStockCard;
