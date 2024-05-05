"use client";
import { data } from "@/constants/CarousalData";
//import { trendingProducts } from "@/constants/data/trendingData";
import { MemoizedSwiper } from "@/constants/SDK/CustomSwipper";
import {
  Box,
  Grid,
  Typography,
  styled,
  Avatar,
  Divider,
  Rating,
} from "@mui/material";
import heroBg from "../../../public/hero-bg.png";
import shopNowBg from "../../../public/shop-now-bg.png";
import aboutBg from "../../../public/mission-vision-bg.png";
import { FavoriteOutlined, Star } from "@mui/icons-material";
import { React, useState, useEffect } from "react";
import Image from "next/image";
import { colors } from "@/constants/colors";
import { MemoizedButton } from "@/constants/SDK/CustomButton";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
const CustomHero = styled(Box)(({ theme }) => ({
  ".grid-container": {
    background: `url(${heroBg.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "24px 30px 24px 40px",
  },
  ".grid_item-text": {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  ".btn": {
    display: "inline",
    width: "max-content",
    borderRadius: "8px",
    boxShadow: "none",
    background: colors.secondaryBase,
    fontSize: "18px",
    "&:hover": {
      background: colors.secondaryDark,
    },
  },
  ".explore-more": {
    display: "inline",
    width: "max-content",
    borderRadius: "8px",
    boxShadow: "none",
    background: colors.champagneDark,
    "&:hover": {
      background: colors.secondaryDark,
      color: colors?.white,
    },
    fontSize: "2.7vw",
  },
  ".text": {
    textAlign: "left",
    fontSize: "42px",
    fontWeight: "700",
    letterSpacing: "1px",
    span: {
      color: colors?.primaryBase,
    },
  },
  ".card": {
    //boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    maxWidth: "320px",
    margin: "auto 1rem",
    textAlign: "center",
    fontFamily: "arial",
  },
  ".carousel": {
    padding: "20px",
    margin: "10px",
  },
  ".product--image": {
    width: "100%",
    height: "16em",
    objectFit: "cover",
  },
  ".mobileSwiper": {
    display: "none",
  },
  ".shop-now-box": {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "center",
    backgroundImage: `url(${shopNowBg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "300px", // Adjust height as needed
    padding: "40px",
    marginTop: "20px",
    // Add margin top for spacing
  },
  ".about-us": {
    justifyContent: "top",
    display: "flex",
    flexDirection: "column",
    //alignItems: "center",
    backgroundImage: `url(${aboutBg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "auto",
    ".mission-text": {
      color: "white",
      fontSize: "6vw",
      fontWeight: "bold",
    },
    ".vission-text": {
      textAlign: "right",
      color: "white",
      fontSize: "6vw",
      fontWeight: "bold",
    },
  },
  ".avatar": {
    width: "12vw",
    height: "12vw",
    [theme.breakpoints.down("sm")]: {
      width: "80px",
      height: "80px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "60px",
      height: "60px",
    },
  },
  ".cust-avatar": {
    width: "18vw",
    height: "18vw",
    [theme.breakpoints.down("sm")]: {
      width: "120px",
      height: "120px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "120px",
      height: "120px",
    },
  },
  [theme.breakpoints.down("md")]: {
    ".mobileSwiper": {
      display: "block",
    },
    ".grid-container": {
      display: "none",
    },
  },
  ".shop-now-text": {
    fontSize: "36px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
  },
  ".about-us-text": {
    justifyContent: "top",
    textAlign: "center",
    whiteSpace: "nowrap",
    color: "rgba(256, 256, 256, 0.6)",
    fontSize: "20em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "7vw",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "9vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "7vw",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "15vw",
    },
  },
  ".cust-review-text": {
    fontWeight: "bold",
    fontSize: "8vh",
  },
  ".rating": {
    marginY: 4,
    fontSize: "9vh",
  },
}));
const Hero = () => {
  const router = useRouter();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [trendingProducts, setTrendingProducts] = useState([]);
  useEffect(() => {
    const fetchSimilarProducts = async () => {
      try {
        const response = await fetch(`http://localhost:8000/reccomendation`);
        if (!response.ok) {
          throw new Error("Failed to fetch similar products");
        }
        const jsonData = await response.json();
        const products = jsonData.map((item) => item[1]);
        // Flatten the array of arrays into a single array of products
        const flattenedProducts = products.flat();
        setTrendingProducts(flattenedProducts);
      } catch (error) {
        console.error("Error fetching similar products:", error);
      }
    };

    fetchSimilarProducts();
  }, []);
  const imageUrl = "https://loremflickr.com/640/480?lock=2391645746102272";
  return (
    <CustomHero>
      <Grid container className="grid-container">
        <Grid item md={6} className="grid_item-text">
          <Typography variant="caption" className="text">
            <Typography variant="span">F</Typography>EEL
            <Typography variant="span"> B</Typography>ETTER <br />
            <Typography variant="span">R</Typography>EJUVANATE <br />
            <Typography variant="span">R</Typography>ECOVER
          </Typography>
          <MemoizedButton
            className={"btn"}
            content="Shop Now"
            handleClick={() => router.push("/shop")}
          />
        </Grid>
        <Grid item md={6} className="grid_item">
          <MemoizedSwiper
            data={data}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            delay={2500}
            id="hero-carousal"
          />
        </Grid>
      </Grid>
      <MemoizedSwiper
        className="mobileSwiper"
        data={data}
        slidesPerView={1}
        spaceBetween={30}
        navigation={false}
        loop={true}
        delay={2500}
        id="hero-carousal"
      />
      <Typography variant="h2" mt={5} ml={5} color={colors?.secondaryDark}>
        Best Sellers
      </Typography>

      <Carousel className="caraousel" responsive={responsive}>
        {trendingProducts?.length > 0 &&
          trendingProducts.map((product, ind) => (
            <Box key={product?.id} textAlign="center" p={2} className="card">
              <Image
                width={300}
                height={300}
                src={imageUrl}
                alt={product?.name}
                className="product--image"
              />
              <Typography variant="body1" mt={1}>
                {product?.name}
              </Typography>
              <Typography variant="body2" mt={1} mb={1}>
                {product?.selling_price}
              </Typography>
              <Box display="flex" justifyContent="space-around">
                <MemoizedButton className={"btn"} content="+" />
                <MemoizedButton
                  className={"btn"}
                  content={<FavoriteOutlined style={{ fontSize: "14px" }} />}
                />
              </Box>
            </Box>
          ))}
      </Carousel>
      <Box className="shop-now-box">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{
            backgroundColor: colors?.secondaryBase,
            borderRadius: "10px",
            padding: "20px 40px",
          }}
        >
          <Grid item md={6}>
            <Typography className="shop-now-text" mt={1} mb={1}>
              SIGN UP & REQUEST FOR A PRODUCT SAMPLE NOW !!
            </Typography>
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Avatar
              alt="User Avatar"
              src="https://loremflickr.com/640/480?lock=2391645746102272"
              className="avatar"
            />
          </Grid>
          <Grid item md={12} justifyContent={"flex-start"}>
            <MemoizedButton
              className="btn"
              content="SIGN UP NOW"
              handleClick={() => router.push("/signup")}
              style={{
                marginTop: "10px",
                backgroundColor: colors?.secondaryDark,
                outline: "none",
                color: colors?.white,
                "&:hover": {
                  background: colors.secondaryDark,
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box className="about-us">
        <Typography variant="h1" className="about-us-text" mt={2} mb={2}>
          ABOUT US
        </Typography>
        <Typography mt={2} mb={2} className="mission-text" ml={3}>
          OUR MISSION
        </Typography>
        <Typography ml={3} fontSize={"2.7vw"} color={colors?.white} mb={2}>
          To offer integrated, best quality pharmaceutical & cosmeceutical
          products, enabling us to seat among Top rank companies, and to be a
          reliable partner in our sphere of work through valued, compelling
          relationships.
        </Typography>
        <Typography mt={2} mb={2} className="vission-text" mr={2}>
          OUR VISION
        </Typography>
        <Typography
          mr={3}
          fontSize={"2.7vw"}
          color={colors?.white}
          mb={2}
          textAlign={"right"}
        >
          We believe to grow beyond its horizon of goals and put our dedicated
          efforts continuously, in order to become a hallmark of a dynamic
          organization, responding to its market needs.
        </Typography>
        <Grid
          item
          xs={12}
          md={12}
          justifyContent={"center"}
          sx={{ margin: "7vh" }}
        >
          <Link href="/aboutus">
            <MemoizedButton className="explore-more" content="EXPLORE MORE" />
          </Link>
        </Grid>
      </Box>
      <Typography className="cust-review-text" m={3}>
        CUSTOMER REVIEWS
      </Typography>
      <Grid
        spacing={1}
        container
        style={{
          padding: "20px 40px",
        }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={5}
          display="flex"
          flexDirection={"column"}
          justifyContent={{ xs: "center", sm: "center", md: "flex-start" }} // Adjust as needed
          alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
        >
          <Avatar
            alt="User Avatar"
            src="https://loremflickr.com/640/480?lock=2391645746102272"
            className="cust-avatar"
          />
          <Rating
            size="large"
            name="rating"
            value={4.5}
            readOnly
            precision={0.5} // Adjust as needed
            className="rating"
            sx={{
              marginY: 6,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Divider
              sx={{
                my: 6,
                borderColor: colors?.MonochromeDark,
                borderWidth: 2,
                width: "60%",
              }}
            ></Divider>
            <Typography fontSize={"5vh"} textAlign={"center"} mt={2} mb={2}>
              I used the E-ACNE Soap. It showed results in just 2 weeks. Really
              effective products !!
            </Typography>
            <Typography fontSize={"3vh"} textAlign={"center"} mt={2} mb={2}>
              - Riya Shah
            </Typography>
            <Divider
              sx={{
                my: 6,
                borderColor: colors?.MonochromeDark,
                borderWidth: 2,
                width: "60%",
              }}
            ></Divider>
          </Box>
        </Grid>
      </Grid>
    </CustomHero>
  );
};

export default Hero;
