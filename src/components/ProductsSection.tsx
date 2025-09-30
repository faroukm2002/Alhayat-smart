'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';

interface ProductsSectionProps {
  products?: Product[];
}

export default function ProductsSection({ products = [] }: ProductsSectionProps) {
  return (
    <>
      <div className="sec-four">
        <div className="container" style={{ position: 'relative' }}>
          <h1>Best Selling</h1>
          <div className="box-four">
            <div className="swiper-container partner-swiper">
              <div className="swiper-wrapper">
                {products.map((product, index) => (
                  <div key={product.id} className="swiper-slide one">
                    <Link href={`/products/${product.category}/${product.id}-${product.category}`}>
                      <div className="another-View-style">New</div>
                      <div 
                        className="product-image"
                        style={{ backgroundImage: `url(${product.image})` }}
                      >
                        <Image 
                          alt={product.name} 
                          src={product.image} 
                          width={200}
                          height={270}
                          style={{ display: 'none' }}
                        />
                      </div>
                      <div className="View-style">View</div>
                      <div className="text-swipe">
                        <h2 className="p-title">{product.name}</h2>
                        <p className="type">{product.brand}</p>
                        {product.priceBeforeDiscount && (
                          <span className="dis-count" style={{ color: '#E80057' }}>
                            {product.priceBeforeDiscount} L.E -
                          </span>
                        )}
                        <span>{product.price} L.E</span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .sec-four h1 {
          font-family: Raleway-SemiBold;
          color: #000000;
          text-align: center;
          margin-bottom: 50px;
        }
        
        .sec-four {
          margin: 50px auto;
        }
        
        .box-four {
          position: relative;
          max-height: 460px;
        }
        
        .partner-swiper {
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          list-style: none;
          padding: 0;
          z-index: 1;
        }
        
        .partner-swiper .one {
          text-align: center;
          font-size: 18px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: block;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
        }
        
        .partner-swiper .product-image img {
          display: none;
        }
        
        .partner-swiper .product-image {
          background-repeat: no-repeat;
          background-position: center;
          width: 100%;
          height: 270px;
          background-size: contain;
        }
        
        .text-swipe {
          text-align: left;
          margin-top: 15px;
        }
        
        .text-swipe p {
          margin-bottom: 0;
        }
        
        .text-swipe p:first-child {
          margin-bottom: 10px;
          white-space: nowrap;
          overflow: hidden !important;
          text-overflow: ellipsis;
        }
        
        .p-title {
          color: #000000;
          font-family: Raleway-Regular;
          font-size: 18px;
          font-weight: normal;
          white-space: nowrap;
          overflow: hidden !important;
          text-overflow: ellipsis;
        }
        
        .type {
          color: #929292;
          font-family: Raleway-Regular;
          font-size: 15px;
        }
        
        .partner-swiper .one span {
          color: #00C569;
          font-family: Raleway-Regular;
          font-size: 15px;
        }
        
        .dis-count::before {
          content: "";
          display: inline-block;
          position: absolute;
          width: 1px;
          height: 28px;
          background-color: #000000;
          left: 17px;
          transform: rotate(29deg);
        }
        
        .View-style {
          position: absolute;
          left: 0;
          right: 0;
          top: 0px;
          bottom: 62px;
          margin: auto;
          background-color: #E80057;
          text-align: center;
          height: 36px;
          max-width: 90px;
          line-height: 0;
          padding-top: 18px;
          color: #fff;
          border-radius: 5px;
          font-family: Raleway-Regular;
          visibility: hidden;
        }
        
        .another-View-style {
          position: absolute;
          right: -16px;
          top: 14px;
          margin: auto;
          background-color: #E80057;
          text-align: center;
          height: 36px;
          width: 87px;
          padding-top: 4px;
          color: #fff;
          border-radius: 5px;
          font-family: Raleway-Regular;
          display: none;
        }
        
        .partner-swiper .one:hover > a .View-style {
          visibility: visible;
        }
        
        .swiper-wrapper {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          padding: 20px 0;
        }
        
        .swiper-slide {
          flex: 0 0 300px;
          position: relative;
        }
        
        @media (max-width: 991px) {
          .p-title {
            font-size: 13px;
          }
          
          .type {
            font-size: 10px;
          }
        }
      `}</style>
    </>
  );
}