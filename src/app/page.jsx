"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SwipeElem from '@/components/SwipeElem';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='bgImg h-fit md:h-[100vh] mb-[50px] md:mb-[0px] xl:flex items-center'>
      <div className="hidden md:block">
        <Image
          quality={100}
          fill
          style={{
            objectFit: 'cover',
          }}
          sizes="(max-height: 808px) 50vw, 100vw"
          src={'/img/blurred-cardio-machines.jpg'}
        />
      </div>
      <div className='forSwiper'>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide><SwipeElem /></SwiperSlide>
          <SwiperSlide><SwipeElem /></SwiperSlide>
          <SwiperSlide><SwipeElem /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
