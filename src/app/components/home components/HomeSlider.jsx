'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';


const HomeSlider = () => {
    const images=['https://img.freepik.com/free-vector/illustration-vector-30-technology-objects_53876-8511.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=ais','https://img.freepik.com/free-photo/futuristic-smart-city-with-5g-global-network-technology_53876-98438.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=sph','https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309649.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=ais','https://img.freepik.com/free-photo/cloud-networking-with-people-files-dropping-through-mobile-phones_53876-98444.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=sph','https://img.freepik.com/free-vector/wireless-technology-isometric-composition-poster_1284-15266.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=ais','https://img.freepik.com/free-photo/technician-repairing-computer-computer-hardware-repairing-upgrade-technology_1150-8861.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=ais']
    return (
        <div>
              <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       {
        images.map((image,i)=>
        <SwiperSlide key={i}>
            <Image src={image} alt='slider' width={600} height={600} className='w-full h-[500px]'></Image>
        </SwiperSlide>
        )
       }
      </Swiper>
        </div>
    );
};

export default HomeSlider;