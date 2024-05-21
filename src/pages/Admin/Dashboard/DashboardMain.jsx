"use client";
import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
  styled
} from "@mui/material";
import "chart.js/auto";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import LowStockCard from "./LowStockCard";
import PendingOrderCard from "./PendingOrders";

const CustomDashboard = styled(Box)(({ theme }) => ({
  ".chart": {
    padding: "1rem",
  },
  // Add custom styles here if needed
}));

const Dashboard = () => {
  // Sample chart data

  const [salesChartData, setSalesChartData] = useState({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [85, 114, 106, 106, 107, 111, 133, 12, 112, 59, 90, 18],
        label: "Sales",
        borderColor: "#1f77b4",
        backgroundColor: "rgba(31, 119, 180, 0.2)",
        fill: true,
      },
    ],
  });

  const [unitChartData, setUnitChartData] = useState({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [43, 21, 140, 123, 12, 29, 82, 90, 11, 111, 124, 67],
        label: "Unit",
        borderColor: "#2ca02c",
        backgroundColor: "rgba(44, 160, 44, 0.2)",
        fill: true,
      },
    ],
  });

  // Sample chart options
  const chartOptions = {
    scales: {
      x: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  const [selectedYear, setSelectedYear] = useState();
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <CustomDashboard>
      <Typography variant="h3" mt={10} mb={4} marginX={4}>
        Dashboard
      </Typography>
      <Box
        marginX={4}
        marginY={2}
        display="flex"
        flexDirection="row"
        alignItems={"center"}
      >
        <Typography variant="h5">Select a Year</Typography>
        <FormControl variant="outlined" sx={{ marginLeft: 4, minWidth: 120 }}>
          <Select
            labelId="select-year-label"
            id="select-year"
            value={selectedYear}
            onChange={handleYearChange}
            label="Year"
          >
            <MenuItem value={"2023"}>2023</MenuItem>
            <MenuItem value={"2024"}>2024</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={2} display="flex" flexDirection="row">
        {/* First Column */}
        <Grid item xs={12} md={6} display="flex" flexDirection="column">
          <Typography variant="h5" marginY={2} marginX={4}>
            Sales Chart
          </Typography>
          <Line
            className="chart"
            data={salesChartData}
            options={chartOptions}
          />
        </Grid>
        {/* Second Column */}
        <Grid item xs={12} md={6} display="flex" flexDirection="column">
          <Typography variant="h5" marginY={2} marginX={4}>
            Unit Chart
          </Typography>
          <Line className="chart" data={unitChartData} options={chartOptions} />
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent={"space-around"}>
        <Grid
          item
          xs={12}
          md={5}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <LowStockCard />
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <PendingOrderCard />
        </Grid>
      </Grid>
    </CustomDashboard>
  );
};

export default Dashboard;
