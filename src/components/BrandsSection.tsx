'use client';

import Link from 'next/link';
import { Brand } from '@/types';

interface BrandsSectionProps {
  brands?: Brand[];
}

export default function BrandsSection({ brands = [] }: BrandsSectionProps) {
  return (
    <>
      <section>
        <h1 className="brands-heading">Our Partners</h1>
        <div className="swiper-container swiper-con">
          <div className="swiper-wrapper">
            {brands.map((partnerBrand, index) => (
              <Link 
                key={partnerBrand.id}
                href={`/products/${partnerBrand.id}-${partnerBrand.name}`}
              >
                <div 
                  className="swiper-slide swiper-brand-slide"
                  style={{ backgroundImage: `url(${partnerBrand.logo})` }}
                ></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .brands-heading {
          font-family: Raleway-SemiBold;
          color: #000000;
          text-align: center;
          margin-bottom: 50px;
        }
        
        .swiper-con {
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          list-style: none;
          padding: 0;
          z-index: 1;
        }
        
        .swiper-brand-slide {
          height: 300px;
          background-position: center;
          background-repeat: no-repeat;
          margin-right: 0;
          background-size: 150px;
          cursor: pointer;
        }
        
        .swiper-wrapper {
          display: flex;
          gap: 30px;
          overflow-x: auto;
          padding: 20px 0;
        }
        
        .swiper-slide {
          flex: 0 0 200px;
        }
      `}</style>
    </>
  );
}