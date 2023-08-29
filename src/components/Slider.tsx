"use client";
import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function Slider() {
    return (
      <div>
      <Splide
      options={{
        type: 'loop',
        autoplay: true,
        interval: 2000, 
        arrows: true,
      
        lazyLoad:true,
        
      }}
      >
        <SplideSlide>
          <img src="/carousal (1).png" alt="Image 1"  className='w-full h-[100%]  object-contain overflow-hidden'/ >
        </SplideSlide>
        <SplideSlide>
          <img src="/carousal (2).png" alt="Image 2"  className='w-full h-[100%]  object-contain overflow-hidden' />
        </SplideSlide>
        <SplideSlide>
          <img src="/carousal (1).png" alt="Image 2"  className='w-full  h-[100%] object-contain overflow-hidden' />
        </SplideSlide>
      
      </Splide>
      </div>
    );
  }

export default Slider