"use client";
import { useState, useContext, useEffect } from "react";
import AppContext from "@/constants/context/context";
import { Line } from "react-chartjs-2";
import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
  styled,
  InputLabel,
  Backdrop,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import "chart.js/auto";
import LowStockCard from "./LowStockCard";
import PendingOrderCard from "./PendingOrders";

const CustomDashboard = styled(Box)(({ theme }) => ({
  ".chart": {
    padding: "1rem",
  },
  // Add custom styles here if needed
}));

const Dashboard = () => {
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  // const [loading, setLoading] = useState(false);
  const { showSnackbar } = useContext(AppContext);
  useEffect(() => {
    const fetchYears = async () => {
      //setLoading(true);
      try {
        const response = await fetch("http://localhost:8000/analytics", {
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
        console.log;
        setYears(jsonResponse);
        if (years.length > 0) {
          setSelectedYear(years[0]);
        } else {
          const currentYear = new Date().getFullYear().toString();
          setYears([currentYear]);
          setSelectedYear(currentYear);
        }
        //setLoading(false);
      } catch (error) {
        //setLoading(false);
        showSnackbar(error.message || "Something went wrong!", "error");
      }
    };

    fetchYears();
  }, []);
  // Sample chart data
  // if (loading) {
  //   return (
  //     <Backdrop
  //       sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
  //       open={loading}
  //     >
  //       <CircularProgress color="inherit" />
  //     </Backdrop>
  //   );
  // }
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
        data: [],
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
        data: [],
        label: "Unit",
        borderColor: "#2ca02c",
        backgroundColor: "rgba(44, 160, 44, 0.2)",
        fill: true,
      },
    ],
  });
  useEffect(() => {
    if (selectedYear) {
      const fetchSalesData = async () => {
        try {
          const response = await fetch(
            `http://localhost:8000/analytics/${selectedYear}/sales`
          );
          const data = await response.json();
          const salesData = Object.keys(data).map((key) => data[key]);
          setSalesChartData((prevData) => ({
            ...prevData,
            datasets: [
              {
                ...prevData.datasets[0],
                data: salesData,
              },
            ],
          }));
        } catch (error) {
          showSnackbar(error.message || "Something went wrong!", "error");
        }
      };

      const fetchUnitData = async () => {
        try {
          const response = await fetch(
            `http://localhost:8000/analytics/${selectedYear}/units`
          );
          const data = await response.json();
          const unitData = Object.keys(data).map((key) => data[key]);
          setUnitChartData((prevData) => ({
            ...prevData,
            datasets: [
              {
                ...prevData.datasets[0],
                data: unitData,
              },
            ],
          }));
        } catch (error) {
          showSnackbar(error.message || "Something went wrong!", "error");
        }
      };

      fetchSalesData();
      fetchUnitData();
    }
  }, [selectedYear]);

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
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
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
