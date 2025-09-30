'use client';

import Link from 'next/link';
import { Category } from '@/types';

interface CategoriesSectionProps {
  categories?: Category[];
}

export default function CategoriesSection({ categories = [] }: CategoriesSectionProps) {
  return (
    <>
      <section className="section-two">
        <div className="container section-two-con">
          {categories.map((category) => (
            <div key={category.id} className="main-cat">
              <h1 className="main-cat-title">
                <Link href={`/products/${category.id}-${category.name}`}>
                  {category.name}
                </Link>
              </h1>
              <div className="row" style={{ margin: '0 20px' }}>
                <div className="col-lg-6 parent-cat-div">
                  <Link href={`/products/${category.id}-${category.name}`}>
                    <div 
                      className="parent-cat"
                      style={{ backgroundImage: `url(${category.image})` }}
                    ></div>
                  </Link>
                </div>
                <div className="col-lg-6 swiper-div">
                  <div className="swiper-container cat-swiper-con">
                    <div className="swiper-wrapper">
                      {category.categories?.map((subCategoryGroup, groupIndex) => (
                        <div key={groupIndex} className="swiper-slide swiper-cat-slide">
                          {subCategoryGroup.map((miniCategory, index) => (
                            <Link 
                              key={miniCategory.id}
                              href={`/products/${miniCategory.id}-${miniCategory.name}`}
                            >
                              <div 
                                className="sub-cat"
                                style={{ backgroundImage: `url(${miniCategory.image})` }}
                              >
                                <span className="sub-cat-title">
                                  {miniCategory.name}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .main-cat {
          margin: 50px 0;
        }
        
        .section-two-con {
          padding: 0;
        }
        
        .sub-cat {
          font-size: 20px;
          text-transform: capitalize;
          font-weight: 700;
          display: inline-block;
          width: 40%;
          margin-bottom: 6%;
          background-repeat: no-repeat;
          height: 149px;
          margin-left: 5%;
          margin-top: 1rem;
          background-size: cover;
          background-position: center;
          border-radius: 10px;
          box-shadow: 0px 3px 6px rgba(0,0,0,.16);
          cursor: pointer;
        }
        
        .sub-cat-title {
          position: relative;
          top: 100%;
          font-size: 18px;
        }
        
        .main-cat-title {
          font-family: Raleway-SemiBold;
          color: #000;
          font-size: 2.5rem;
          margin-left: 20px;
          text-transform: capitalize;
          padding: 15px 0 10px;
          cursor: pointer;
        }
        
        .main-cat-title a {
          color: inherit;
          text-decoration: none;
        }
        
        .parent-cat-div,
        .swiper-div {
          padding: 0;
          height: 400px;
        }
        
        .parent-cat {
          background-size: cover;
          background-repeat: no-repeat;
          height: 400px;
          cursor: pointer;
          border-radius: 10px;
          box-shadow: 0px 3px 6px rgba(0,0,0, .16);
        }
        
        .swiper-hr {
          border-bottom: 1px solid #01B0FF !important;
          width: 30%;
          margin: 0 auto;
        }
        
        .swiper-wrapper {
          display: flex;
          gap: 10px;
        }
        
        .swiper-slide {
          flex: 1;
        }
      `}</style>
    </>
  );
}