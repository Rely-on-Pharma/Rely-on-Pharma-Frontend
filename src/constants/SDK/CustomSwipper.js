"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import { Box,  styled } from '@mui/material';
import Image from 'next/image';
const CustomSwiper = styled(Box)(({theme})=>({
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

const CustomSwiperComponent = ({slidesPerView=1, spaceBetween=30, loop=true, delay=2500, className, style, id, data=[], navigation=false}) => {
    return (
      <CustomSwiper>
        <Swiper
          // slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          loop={loop}
          centeredSlides={true}
          autoplay={{
            delay: delay,
            disableOnInteraction: false,
          }}
          effect={'coverflow'}
          grabCursor={true}
          slidesPerView={'auto'}
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
          modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
          className={className}
        >
            {
                data?.length>0 && data?.map((item, ind)=>(
                    <SwiperSlide key={item?.id} style={{width:"60%", height:"60vh"}}>
                        <Image src={item?.image} alt='ok' width={250} height={250} style={{width:"100%", height:"100%", objectFit:"contain"}}/>
                    </SwiperSlide>
                ))
            }

        </Swiper> 
      </CustomSwiper>
    )
}

export const MemoizedSwiper = React.memo(CustomSwiperComponent);