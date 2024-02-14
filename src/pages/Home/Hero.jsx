"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Box, styled } from '@mui/material';
import Image from 'next/image';
const CustomHeroSwiper = styled(Box)(({theme})=>({
    ".swiper" :{
        width: "100%",
        height: "100%",
      },
      
      ".swiper-slide" :{
        textAlign: "center",
        fontSize: "18px",
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      
      ".swiper-slide img" :{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
}));

const Hero = ({slidesPerView=1, spaceBetween=30, loop=true, delay=2500, className, style, id, data=[]}) => {
    return (
      <CustomHeroSwiper>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          loop={loop}
          centeredSlides={true}
          autoplay={{
            delay: delay,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          id={id}
          style={style}
          modules={[Autoplay, Pagination, Navigation]}
          className={className}
        >
            {
                data?.length>0 && data?.map((item)=>(
                    <SwiperSlide key={item?.id} style={{width:"100%", height:"60vh"}}>
                        <Image src={item?.image} alt='ok' width={80} height={60} style={{width:"100%", height:"100%", objectFit:"contain"}}/>
                    </SwiperSlide>
                ))
            }

        </Swiper>
      </CustomHeroSwiper>
    )
}

export const MemoizedSwiper = React.memo(Hero);