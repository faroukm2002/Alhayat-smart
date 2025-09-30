'use client';

import { MainContent } from '@/types';
import Image from 'next/image';

interface ArticlesSectionProps {
  mainContent?: MainContent[];
}

export default function ArticlesSection({ mainContent = [] }: ArticlesSectionProps) {
  return (
    <>
      <div className="sec-three">
        <div className="container-fluid">
          {mainContent.map((post, index) => (
            <div key={index}>
              {index % 2 === 1 ? (
                <div className="articles-section row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{ padding: 0 }}>
                    <div 
                      className="im-five"
                      style={{ 
                        backgroundImage: `url(${post.image})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                      }}
                    ></div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="text-five">
                      <Image className="icon-light" src={post.icon} width={60} height={60} alt="Icon" />
                      <h1>{post.title}</h1>
                      <p>{post.paragraph}</p>
                      <button className="btn btn-info" type="button">
                        Read more
                        <Image className="iconarrow" src="/smart-image/arrow.svg" width={30} height={30} alt="Arrow" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="row articles-section">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 first-col-four">
                    <div className="text-four">
                      <Image className="icon-pop" src={post.icon} width={50} height={50} alt="Icon" />
                      <h1>{post.title}</h1>
                      <p>{post.paragraph}</p>
                      <button className="btn btn-info" type="button">
                        Read more
                        <Image className="iconarrow" src="/smart-image/arrow.svg" width={30} height={30} alt="Arrow" />
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 second-col-four">
                    <div 
                      className="im-four"
                      style={{ 
                        backgroundImage: `url(${post.image})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .sec-three {
          margin-top: 40px;
        }
        
        .im-sec-three {
          background-image: url('/smart-image/aboutus.png');
          background-repeat: no-repeat;
          height: 100%;
          background-position: center;
          background-size: contain;
          margin-right: auto;
          margin-left: auto;
        }
        
        .text-sec-three {
          padding: 5px;
          min-height: 363px;
          overflow: auto;
        }
        
        .text-sec-three img {
          width: 50px;
          margin-right: 14px;
          vertical-align: middle;
        }
        
        .text-sec-three button img {
          width: 30px;
          margin-right: 0px;
          margin-left: 18px;
        }
        
        .text-sec-three button {
          float: right;
          margin-top: 15px;
        }
        
        .text-sec-three h1 {
          display: inline-block;
          color: #000;
          font-family: Raleway-SemiBold;
          vertical-align: middle;
        }
        
        .text-sec-three p {
          width: 80%;
          line-height: 34px;
          color: #000;
          font-family: Raleway-Light;
          margin-top: 30px;
          overflow-y: hidden !important;
          height: 165px;
        }
        
        .articles-section {
          -webkit-box-align: center;
          align-items: center;
          margin-top: 20px;
          margin-bottom: 20px;
        }
        
        .im-four {
          background-image: url('/smart-image/im-sec-four.jpg');
          background-position: center;
          background-size: cover;
          width: 100%;
          height: 450px;
          position: relative;
          clip-path: polygon(100% 0, 100% 100%, 0% 100%, 51% 0);
        }
        
        .text-four {
          margin-left: 54px;
        }
        
        .icon-pop {
          width: 50px;
          margin-right: 18px;
        }
        
        .text-four h1 {
          display: inline;
          color: #000;
          font-family: Raleway-SemiBold;
          vertical-align: middle;
        }
        
        .text-four p {
          width: 90%;
          line-height: 34px;
          color: #000;
          font-family: Raleway-Light;
          margin-top: 30px;
          overflow-y: hidden !important;
          height: 165px;
        }
        
        .text-four .iconarrow {
          width: 30px;
          margin-left: 8px;
        }
        
        .text-four button {
          background-color: #01B0FF;
          padding: 10px 15px;
        }
        
        .first-col-four {
          padding: 0;
        }
        
        .second-col-four {
          padding: 0;
        }
        
        .im-five {
          background-image: url('/smart-image/im-sec-five.jpg');
          background-position: center;
          background-size: cover;
          width: 100%;
          height: 450px;
          position: relative;
          clip-path: polygon(51% 0, 100% 100%, 0 100%, 0 0);
        }
        
        .text-five h1 {
          display: inline;
          color: #000;
          font-family: Raleway-SemiBold;
          vertical-align: middle;
        }
        
        .text-five .icon-light {
          width: 60px;
          vertical-align: middle;
          margin-right: 14px;
        }
        
        .btn-info {
          background-color: #01B0FF;
          padding: 10px 15px;
          border: none;
          font-family: Raleway-Regular;
          border-radius: 10px;
        }
        
        .text-five p {
          width: 90%;
          line-height: 34px;
          color: #000;
          font-family: Raleway-Light;
          margin-top: 30px;
          overflow-y: hidden !important;
          height: 165px;
        }
        
        .text-five button {
          background-color: #01B0FF;
          padding: 10px 15px;
          float: right;
        }
        
        .text-five .iconarrow {
          width: 30px;
          margin-left: 8px;
        }
        
        @media (max-width: 768px) {
          .im-five, .im-four {
            clip-path: none;
            height: 300px;
            margin-bottom: 20px;
          }
          
          .first-col-four {
            order: 2;
            padding-left: 15px;
            padding-right: 15px;
          }
          
          .text-four {
            margin-left: 0;
          }
          
          .second-col-four {
            order: 1;
          }
        }
      `}</style>
    </>
  );
}