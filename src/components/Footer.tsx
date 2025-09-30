'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Settings } from '@/types';

interface FooterProps {
  settings?: Settings;
}

export default function Footer({ settings }: FooterProps) {
  return (
    <>
      <footer className="footer">
        <div className="container foot-div">
          <div>
            <div><Link href="/smart-home">Smart Home</Link></div>
            <div><Link href="/products">Products</Link></div>
            <div><Link href="/about">About Us</Link></div>
            <div><Link href="/contact">Contact Us</Link></div>
          </div>
          <div className="img-svg">
            <a href={settings?.facebook} target="_blank" rel="noopener noreferrer">
              <Image alt="facebook page" src="/smart-image/facebook.svg" width={21} height={21} />
            </a>
            <a href={settings?.linkIn} target="_blank" rel="noopener noreferrer">
              <Image alt="linkedin page" src="/smart-image/linkedin.svg" width={21} height={21} />
            </a>
            <a href={settings?.twitter} target="_blank" rel="noopener noreferrer">
              <Image alt="twitter page" src="/smart-image/twitter.svg" width={21} height={21} />
            </a>
            <a href={settings?.instagram} target="_blank" rel="noopener noreferrer">
              <Image alt="instagram page" src="/smart-image/instagram.svg" width={21} height={21} />
            </a>
          </div>
          <div className="logo-container">
            <Image 
              src="/smart-image/logoWhite.png" 
              alt="Alhayat Smart Logo" 
              className="imag-svg"
              width={150}
              height={50}
            />
          </div>
        </div>
        <div className="copyRights">
          <p className="copy-rights-text">© 2019 ALHAYAT SMART All Rights Reserved</p>
          <p className="powered-by-text">
            Powered By <a href="http://www.codanyon.com" target="_blank" rel="noopener noreferrer">Codanyon</a>
          </p>
        </div>
        <div style={{ position: 'absolute', bottom: '10px' }}>
          <div className="floating-button-div">
            <a href="tel:00201206569999">
              <i className="fas fa-phone-alt circle-phone"></i>
            </a>
          </div>
          <p className="hotline">HotLine</p>
        </div>
      </footer>

      <style jsx>{`
        .footer {
          background-color: rgba(1, 88, 128, .80);
          padding-top: 30px;
          min-height: 265px;
          position: relative;
          z-index: 3232;
        }
        
        .foot-div {
          text-align: center;
        }
        
        .foot-div div div {
          display: inline-block;
          margin-right: 32px;
        }
        
        .foot-div div div:last-child {
          margin-right: 0;
        }
        
        .img-svg img {
          height: 21px;
          margin: 30px 15px;
        }
        
        .imag-svg {
          width: 150px;
          margin-bottom: 14px;
        }
        
        .foot-div a {
          text-decoration: none;
          color: #fff;
          font-family: Raleway-Regular;
        }
        
        .copyRights {
          color: white !important;
          padding-left: 20px;
          padding-right: 20px;
        }
        
        .copy-rights-text {
          display: block;
          font-family: Raleway-Regular;
          font-size: 14px;
          margin-bottom: 0;
        }
        
        .powered-by-text {
          margin-bottom: 0;
          margin-top: 3px;
          padding-bottom: 5px;
        }
        
        .copyRights p:last-child a {
          color: white;
          font-family: Raleway-Bold;
          font-size: 15px;
        }
        
        .tel-div {
          padding-left: 20px !important;
          padding-right: 20px !important;
        }
        
        .circle-phone {
          font-size: 30px;
          color: white;
          text-decoration: none;
        }
        
        .fa-phone-alt:hover {
          color: #fff;
        }
        
        .floating-button {
          font-size: 25px;
          color: white !important;
          text-decoration: none;
        }
        
        .floating-button-div {
          background-color: rgb(102, 153, 204);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          box-shadow: 2px 2px 5px rgba(0,0,0,.30);
          position: relative;
          bottom: 45px;
          z-index: 1000;
          cursor: pointer;
          border: none;
          outline: white;
          left: 20px;
        }
        
        .hotline {
          font-family: Raleway-Bold;
          display: inline-block;
          margin-bottom: 0.5rem;
          position: absolute;
          bottom: 49px;
          left: 85px;
          font-size: 18px;
          color: #fff;
          width: 75px;
        }
        
        @media (max-width: 780px) {
          .img-div {
            display: none !important;
          }
        }
        
        @media (max-width: 700px) {
          .foot-div div div {
            margin-right: 18px;
          }
          
          .foot-div div div a {
            font-size: 13px;
          }
          
          .foot-div div div:last-child {
            margin-right: 0;
          }
          
          .copyRights {
            text-align: center;
          }
          
          .copyRights p {
            width: 100%;
          }
          
          .copyRights p:last-child {
            float: none;
          }
        }
        
        @media (max-width: 600px) {
          .hotline {
            display: none;
          }
          
          .floating-button-div {
            bottom: 10px;
          }
        }
      `}</style>
    </>
  );
}