"use client";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Box, Grid, styled, Typography } from "@mui/material";
import "chart.js/auto";

const CustomDashboard = styled(Box)(({ theme }) => ({
  ".chart": {
    padding: "2rem",
  },
  // Add custom styles here if needed
}));

const Dashboard = () => {
  // Sample chart data
  const [chartData, setChartData] = useState({
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
    datasets: [
      {
        data: [85, 114, 106, 106, 107, 111, 133],
        label: "January",
        borderColor: "#3e95cd",
        backgroundColor: "#7bb6dd",
        fill: false,
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

  return (
    <CustomDashboard>
      <Grid
        display="flex"
        flexDirection="column"
        container
        justifyContent="center"
      >
        <Grid item xs={12} md={6}>
          {/* Line Chart */}
          <Typography variant="h3" marginY={2} marginX={4}>
            Dashboard
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Line className="chart" data={chartData} options={chartOptions} />
        </Grid>
      </Grid>
    </CustomDashboard>
  );
};

export default Dashboard;
