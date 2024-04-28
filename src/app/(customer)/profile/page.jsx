"use client";
import { styled, Box, Avatar, Grid, Typography, Button } from "@mui/material";
import { colors } from "@/constants/colors";
import Logout from "@mui/icons-material/LogoutOutlined";
import CustomDropSection from "../../../constants/SDK/CustomDropSection";
import AddressBox from "../../../pages/Profile/AddressComponent";
import OrderBox from "../../../pages/Profile/OrderTileComponent";
import { useEffect, useContext, useState } from "react";
import AppContext from "@/constants/context/context";
import { useRouter } from "next/navigation";

const CustomProfile = styled(Box)(({ theme }) => ({
  ".user-avatar": {
    height: { xs: "5rem", sm: "6rem", md: "7rem", lg: "8rem" }, // Adjust the height for different screen sizes
    width: { xs: "5rem", sm: "6rem", md: "7rem", lg: "8rem" },
    border: `4px solid ${colors.primaryLight}`,
    backgroundColor: colors.primaryDark,
  },

  ".logout-btn": {
    display: "flex",
    borderRadius: "8px",
    boxShadow: "none",
    fontSize: { xs: "2rem", sm: "3rem", md: "4rem", lg: "5rem" },
    backgroundColor: colors.primaryDark,
    colors: colors?.white,
    margin: "1.5rem",
    "&:hover": {
      background: colors.secondaryDark,
    },
  },

  ".change-pass-btn": {
    borderRadius: "8px",
    boxShadow: "none",
    backgroundColor: colors.primaryMedium,
    //colors: colors?.black,
  },

  ".info-type-head": {
    [theme.breakpoints.down("xs")]: {
      fontSize: "6vw",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "6vw",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "6vw",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "6vw",
    },
    color: "rgba(77, 32, 38, 0.4)",
  },

  ".info-type-body": {
    fontSize: "2vw",
    color: colors?.primaryDark,
  },
}));

const Profile = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const { logOutUser } = useContext(AppContext);

  useEffect(() => {
    // Function to fetch data from the API
    const token = localStorage.getItem('token').slice(1,-1) // the token string is "token". Hence stripping the 
    const headers = {
      "Content-Type": "application/json", // Example content type
      Authorization: `Bearer ${token}`, // Example authorization header
    };

    // Define the options for the fetch request
    const requestOptions = {
      method: "GET", // Specify the request type (GET, POST, etc.)
      headers: headers, // Pass the headers object
    };
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/users",
          requestOptions
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setUser(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();

    // Cleanup function (optional)
    return () => {
      // Cleanup code, if needed
    };
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // const [products, setProducts] = useState([
  //   {
  //     imageUrl: "https://via.placeholder.com/150",
  //     productName: "Product 1",
  //     productPrice: "100",
  //   },
  //   {
  //     imageUrl: "https://via.placeholder.com/150",
  //     productName: "Product 2",
  //     productPrice: "200",
  //   },
  //   {
  //     imageUrl: "https://via.placeholder.com/150",
  //     productName: "Product 3",
  //     productPrice: "300",
  //   },
  // ]);

  const handleLogout = () => {
    // Handle logout functionality here
    logOutUser();
    router.push("/");
  };

  const order = [
    {
      orderId: "27245875",
      trackId: "-",
      status: "Placed",
      orderDate: "March 23, 2023",
      total: "₹4799",
      titleImg: "https://loremflickr.com/640/480?lock=455919850749952",
      qty: 3,
      products: [
        ["E-Dew Baby Soap", 1],
        ["B-Glow vitamin C-Serum", 2],
      ],
    },
    {
      orderId: "27245875",
      trackId: "-",
      status: "Placed",
      orderDate: "March 23, 2023",
      total: "₹4799",
      titleImg: "https://loremflickr.com/640/480?lock=455919850749952",
      qty: 3,
      products: [
        ["E-Dew Baby Soap", 1],
        ["B-Glow vitamin C-Serum", 2],
      ],
    },
  ];

  return (
    <CustomProfile>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginX: "3rem",
          paddingTop: { xs: "0.5rem", sm: "1rem", md: "2rem" },
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Avatar
            sx={{
              height: { xs: "3.5rem", sm: "6rem", md: "7rem", lg: "8rem" }, // Adjust the height for different screen sizes
              width: { xs: "3.5rem", sm: "6rem", md: "7rem", lg: "8rem" },
              border: `4px solid ${colors.primaryLight}`,
              backgroundColor: colors.primaryDark,
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem", lg: "5rem" },
            }}
          ></Avatar>

          <Typography
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "3rem",
                md: "4rem",
                lg: "5rem",
              },
              marginLeft: {
                xs: "1vw",
                sm: "2vw",
                md: "4vw",
                lg: "2vw",
              },
              textAlign: "left",
            }}
          >
            {user.first_name + " " + user.last_name}
          </Typography>
        </Box>
        <Box>
          <Button
            className={"logout-btn"}
            variant="outlined"
            startIcon={<Logout height="0.5rem" width="0.5rem" />}
            sx={{
              margin: "1rem",
              height: "fit-content",
              ".MuiTypography-root": {
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                },
              },
            }}
            onClick={handleLogout}
          >
            <Typography variant="h4">Logout</Typography>
          </Button>
        </Box>
      </Box>
      <Box
        marginX={"3rem"}
        marginY={{ xs: "0.2rem", sm: "0.2rem", md: "2rem", lg: "1rem" }}
      >
        <CustomDropSection
          heading="Personal Information"
          custPadding={"1rem"}
          childMargin={{ xs: "1rem", sm: "1rem", md: "2rem", lg: "2rem" }}
          backgroundColor="#EEE2DF"
          childPadding={{ xs: "0.5rem", sm: "0.5rem", md: "2rem", lg: "2rem" }}
        >
          <Box display="flex" flexDirection="row">
            <Typography
              color="rgba(77,32,38,0.4)"
              mr={1}
              fontSize={{ xs: "4vw", sm: "4vw", md: "1.5vw", lg: "1.5vw" }}
            >
              Email:
            </Typography>
            <Typography
              fontSize={{ xs: "4vw", sm: "4vw", md: "1.5vw", lg: "1.5vw" }}
              color={colors?.primaryDark}
              ml={1}
            >
              {user.email}
            </Typography>
          </Box>
          {
            // <Box display="flex" flexDirection="row">
            //   <Typography
            //     color="rgba(77,32,38,0.4)"
            //     mr={1}
            //     fontSize={{ xs: "4vw", sm: "4vw", md: "1.5vw", lg: "1.5vw" }}
            //   >
            //     Phone:
            //   </Typography>
            //   <Typography
            //     fontSize={{ xs: "4vw", sm: "4vw", md: "1.5vw", lg: "1.5vw" }}
            //     color={colors?.primaryDark}
            //     ml={1}
            //   >
            //     {user.phone}
            //   </Typography>
            // </Box>
            // <Box display="flex" flexDirection="row" mb={2}>
            //   <Typography
            //     color="rgba(77,32,38,0.4)"
            //     mr={1}
            //     fontSize={{ xs: "4vw", sm: "4vw", md: "1.5vw", lg: "1.5vw" }}
            //   >
            //     Date of Birth:
            //   </Typography>
            //   <Typography
            //     fontSize={{ xs: "4vw", sm: "4vw", md: "1.5vw", lg: "1.5vw" }}
            //     color={colors?.primaryDark}
            //     ml={1}
            //   >
            //     {user.dob}
            //   </Typography>
            // </Box>
          }
          <Box display="flex" flexDirection="row" gap={2}>
            <Button
              className={"change-pass-btn"}
              variant="outlined"
              sx={{
                display: "inline-block",
                height: "fit-content",
                width: "fit-content",
              }}
            >
              <Typography
                color={colors?.black}
                fontWeight="bold"
                fontSize={{ xs: "2vw", sm: "2vw", md: "4vw", lg: "1vw" }}
              >
                Change Password
              </Typography>
            </Button>
            <Button
              className={"change-pass-btn"}
              variant="outlined"
              sx={{
                height: "fit-content",
                width: "fit-content",
              }}
            >
              <Typography
                color={colors?.black}
                fontWeight="bold"
                fontSize={{ xs: "2vw", sm: "2vw", md: "4vw", lg: "1vw" }}
              >
                Edit
              </Typography>
            </Button>
          </Box>
        </CustomDropSection>
      </Box>
      <Box
        marginX={"3rem"}
        marginY={{ xs: "0.2rem", sm: "0.2rem", md: "2rem", lg: "1rem" }}
      >
        <CustomDropSection
          heading="Address"
          custPadding={"1rem"}
          childMargin={{ xs: "1rem", sm: "1rem", md: "2rem", lg: "2rem" }}
          backgroundColor="#EEE2DF"
          childPadding={{ xs: "0.5rem", sm: "0.5rem", md: "2rem", lg: "2rem" }}
        >
          <AddressBox></AddressBox>
        </CustomDropSection>
        <CustomDropSection
          heading="Favourites"
          custPadding={"1rem"}
          childMargin={{ xs: "1rem", sm: "1rem", md: "2rem", lg: "2rem" }}
          backgroundColor="#EEE2DF"
          childPadding={{ xs: "0.5rem", sm: "0.5rem", md: "2rem", lg: "2rem" }}
        >
          {
            // <Grid container>
            //   {products.map((product, index) => (
            //     <Grid item xs={12} sm={6} md={2} lg={2} key={index}>
            //       <Box
            //         sx={{
            //           marginY: "1rem",
            //           borderRadius: 5,
            //           border: 1,
            //           borderColor: "black",
            //           padding: 2,
            //           display: "flex",
            //           flexDirection: "column",
            //           height: "fit-content",
            //         }}
            //       >
            //         <Box
            //           display="flex"
            //           justifyContent="space-between"
            //           alignItems="center"
            //         >
            //           <Box
            //             component="img"
            //             src={product.imageUrl}
            //             width="100%"
            //             height="auto"
            //           />
            //         </Box>
            //         <Typography variant="body1" mt={2}>
            //           {product.productName}
            //         </Typography>
            //         <Typography variant="body1" mt={2}>
            //           ${product.productPrice}
            //         </Typography>
            //         <Box
            //           display="flex"
            //           justifyContent="flex-end"
            //           alignItems="center"
            //         >
            //           <Button
            //             variant="outlined"
            //             sx={{
            //               width: "100%",
            //             }}
            //           >
            //             Remove
            //           </Button>
            //         </Box>
            //       </Box>
            //     </Grid>
            //   ))}
            // </Grid>
          }
        </CustomDropSection>
      </Box>
      <Box
        marginX={"3rem"}
        marginY={{ xs: "0.2rem", sm: "0.2rem", md: "2rem", lg: "1rem" }}
      >
        <CustomDropSection
          heading="Orders"
          custPadding={"1rem"}
          childMargin={{ xs: "1rem", sm: "1rem", md: "2rem", lg: "2rem" }}
          backgroundColor="#EEE2DF"
          childPadding={{ xs: "0.5rem", sm: "0.5rem", md: "2rem", lg: "2rem" }}
        >
          {order?.map((item) => (
            <OrderBox key={item.id} order={item} />
          ))}
        </CustomDropSection>
      </Box>
    </CustomProfile>
  );
};

export default Profile;
