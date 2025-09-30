'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, Settings } from '@/types';

interface HomeHeroProps {
  swiper?: Swiper[];
  settings?: Settings;
}

export default function HomeHero({ swiper = [], settings }: HomeHeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (swiper.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % swiper.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [swiper.length]);

  const defaultSlide = {
    banner: '/smart-image/sec1-home.jpg',
    link: '#'
  };

  const slides = swiper.length > 0 ? swiper : [defaultSlide];

  return (
    <>
      <div className="home">
        <div className="swiper-container cat-swiper">
          <div className="swiper-wrapper">
            {/* First slide with content */}
            <div 
              className="swiper-slide"
              style={{ 
                backgroundImage: `url(${slides[0]?.banner || defaultSlide.banner})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                    <div className="text-head">
                      <h1>
                        Create The
                        <br />
                        Best Smart Home
                      </h1>
                      <p>
                        The Future of Smart,
                        <br />
                        Simple,
                        <br />
                        Automated Life
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 butt-head">
                    <div className="st-but-head">
                      <Link href="/products">
                        <button className="btn btn-info" type="button">
                          Shop Now
                          <Image src="/smart-image/arrow.svg" width={30} height={30} alt="Arrow" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="scroll">
                <Image src="/smart-image/scroll.svg" width={40} height={40} alt="Scroll" />
              </div>
              <ul>
                <li><a href={settings?.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href={settings?.twitter} target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href={settings?.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>

            {/* Additional slides from swiper data */}
            {swiper.slice(1).map((slide, index) => (
              <div 
                key={index + 1}
                className="swiper-slide"
                style={{ 
                  backgroundImage: `url(${slide.banner})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              >
                <a 
                  className="swiper-link" 
                  href={slide.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                ></a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .cat-swiper {
          width: 100%;
          height: 100%;
        }
        
        .cat-swiper .swiper-link {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          right: 0;
          left: 0;
        }
        
        .cat-swiper .swiper-slide {
          background-position: center;
          background-size: cover;
          padding-top: 100px;
          height: auto;
          padding-left: 50px;
        }
        
        .home {
          width: 100%;
          margin-top: 45px;
        }
        
        .text-head {
          margin-right: auto;
          margin-left: auto;
          color: #fff;
        }
        
        .text-head h1 {
          font-family: Raleway-SemiBold;
          font-size: 63px;
        }
        
        .text-head p {
          font-family: Raleway-Light;
          font-size: 35px;
          width: 342px;
        }
        
        .st-but-head {
          position: absolute;
          top: 0;
          bottom: 0;
          height: 46px;
          margin: auto;
          left: 0;
          right: 0;
          text-align: center;
        }
        
        .st-but-head button img {
          width: 30px;
          margin-left: 8px;
        }
        
        .home ul {
          position: relative;
          bottom: 7px;
          left: 0;
          width: 100%;
          z-index: 332;
          padding: 0;
        }
        
        .scroll {
          z-index: 33;
          position: relative;
          bottom: -26px;
          left: 0;
          right: 0;
          margin: auto;
          color: #fff;
          text-align: center;
        }
        
        .scroll img {
          cursor: pointer;
          width: 40px;
        }
        
        .home ul li {
          display: inline-block;
          margin-right: 10px;
        }
        
        .home ul li a {
          text-decoration: none;
          color: #fff;
        }
        
        .btn-info {
          background-color: #01B0FF;
          padding: 10px 15px;
          border: none;
          font-family: Raleway-Regular;
          border-radius: 10px;
        }
        
        @media (max-width: 691px) {
          .scroll img {
            visibility: hidden;
          }
        }
        
        @media (max-width: 767px) {
          .butt-head {
            margin-right: auto;
            margin-left: auto;
            width: 97%;
            display: -webkit-box;
            margin-top: 22px;
          }
          
          .text-head h1 {
            font-size: 30px;
          }
          
          .text-head p {
            font-size: 25px;
          }
          
          .cat-swiper .swiper-slide {
            padding-top: 40px;
            padding-left: 15px;
            padding-right: 15px;
          }
        }
      `}</style>
    </>
  );
}