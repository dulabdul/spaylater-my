'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { TESTIMONIALS } from '@/constants';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from 'swiper/modules';

// Import Swiper Styles
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';
// @ts-ignore
import 'swiper/css/effect-coverflow';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Testimonials = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = TESTIMONIALS.map((item) => ({ src: item.image }));

  return (
    <section
      id='testimonials'
      className='py-24 bg-[#F8FAFC]'>
      <div className='container mx-auto px-4'>
        {/* Header Section */}
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6'>
            Dipercaya Ratusan Pelanggan
          </h2>
          <div className='h-1.5 w-20 bg-blue-600 mx-auto rounded-full mb-6'></div>
          <p className='text-lg text-slate-600 leading-relaxed'>
            Kami menjaga transparansi. Klik pada gambar untuk melihat bukti chat
            asli proses pencairan limit pelanggan kami.
          </p>
        </div>

        {/* Slider Container */}
        <div className='relative px-4 md:px-12'>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true} // Membuat gambar di tengah jika tidak full
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            breakpoints={{
              320: { slidesPerView: 1.2, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className='testimonial-swiper !pb-20'>
            {TESTIMONIALS.map((item, idx) => (
              <SwiperSlide
                key={item.id}
                className='max-w-[320px]'>
                <div
                  className='group relative bg-white p-2 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100'
                  onClick={() => {
                    setIndex(idx);
                    setOpen(true);
                  }}>
                  {/* Image Phone Frame Look */}
                  <div className='relative aspect-[9/19] w-full overflow-hidden rounded-[2rem] bg-slate-200 border-4 border-slate-50'>
                    <Image
                      src={item.image}
                      alt={`Testimoni ${item.id}`}
                      fill
                      className='object-cover transition-transform duration-700 group-hover:scale-105'
                      sizes='(max-width: 768px) 100vw, 33vw'
                    />
                    {/* Overlay Glassmorphism */}
                    <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center backdrop-blur-[2px]'>
                      <div className='bg-white/20 p-4 rounded-full backdrop-blur-md border border-white/30 mb-3'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-8 w-8 text-white'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7'
                          />
                        </svg>
                      </div>
                      <span className='text-white font-semibold tracking-wide'>
                        PERBESAR GAMBAR
                      </span>
                    </div>
                  </div>

                  {item.caption && (
                    <div className='mt-4 px-4 pb-4 text-center'>
                      <p className='text-sm font-semibold text-slate-700 italic'>
                        "{item.caption}"
                      </p>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Lightbox */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
        />
      </div>

      <style
        jsx
        global>{`
        .testimonial-swiper .swiper-button-next,
        .testimonial-swiper .swiper-button-prev {
          background-color: white;
          width: 50px !important;
          height: 50px !important;
          border-radius: 50%;
          color: #0f172a !important;
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
          transition: all 0.3s;
        }
        .testimonial-swiper .swiper-button-next:hover,
        .testimonial-swiper .swiper-button-prev:hover {
          background-color: #2563eb;
          color: white !important;
        }
        .testimonial-swiper .swiper-button-next:after,
        .testimonial-swiper .swiper-button-prev:after {
          font-size: 20px !important;
          font-weight: 800;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #2563eb !important;
          width: 25px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
