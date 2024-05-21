"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Box, Grid, styled } from "@mui/material";
import { Navigation, Pagination } from "swiper/modules";
import SimilarProductCard from "./SimilarProductCard";
const CustomSwiper = styled(Box)(() => ({
  ".swiper": {
    width: "100%",
    height: "100%",
  },

  ".swiper-slide": {
    textAlign: "center",
    fontSize: "18px",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const SimilarComponents = ({
  slidesPerView = 1,
  spaceBetween = 30,
  loop = true,
  delay = 2500,
  className,
  style,
  id,
  data = [],
  navigation = false,
}) => {
  return (
    <CustomSwiper>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={false}
        centeredSlides={true}
        autoplay={{
          delay: delay,
          disableOnInteraction: false,
        }}
        effect={"coverflow"}
        grabCursor={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={navigation}
        id={id}
        style={style}
        modules={[Pagination, Navigation]}
        className={className}
        dir="rtl"
      >
        {data?.length > 0 &&
          data?.map((item, ind) => (
            <SwiperSlide
              key={item?.id}
              style={{
                width: "60%",
                height: "60vh",
                backgroundColor: "transparent",
              }}
            >
              <Grid item xs={12} sm={6} md={4} lg={3} key={ind}>
                <SimilarProductCard productData={item} />
              </Grid>
            </SwiperSlide>
          ))}
      </Swiper>
    </CustomSwiper>
  );
};

export default SimilarComponents;
