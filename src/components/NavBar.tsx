'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Settings, User } from '@/types';

interface NavBarProps {
  user?: User | null;
  basketCount?: number;
  settings?: Settings;
}

export default function NavBar({ user, basketCount = 0, settings }: NavBarProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [navScroll, setNavScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavScroll(document.documentElement.scrollTop > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogOut = () => {
    // Handle logout logic
    console.log('Logout');
  };

  return (
    <>
      {/* Contact Nav */}
      <div className="container-lg">
        <div className="row contact-nav">
          <div className="col-lg-4 col-md-3 col-sm-6 col-xs contact-nav-item">
            <a href="tel:00201206569999" className="contact-nav-item-link">
              <i className="fas fa-phone-alt"></i> 01206569999
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs contact-nav-item mail-div">
            <a href="mailto:info@elhayatsmart.com" className="contact-nav-item-link">
              <i className="fas fa-envelope"></i> contactus@alhayatsmart.com
            </a>
          </div>
          <div className="col-lg-4 col-md-4 contact-nav-item img-div">
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
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`navbar fixed-top navbar-expand-lg navbar-light bg-light ${navScroll ? 'navbar-scrolled' : ''}`}>
        <div className="col-3">
          <Link href="/" id="homeLink">
            <Image 
              className={`logo ${navScroll ? 'logo-scrolled' : ''}`} 
              src="/smart-image/Logo.png" 
              alt="Alhayat Smart Logo"
              width={110}
              height={50}
            />
          </Link>
        </div>
        
        <div 
          className={`collapse navbar-collapse col-lg-9 ${!isCollapsed ? 'show' : ''}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto main-navigation col-lg-7">
            <li className="nav-item col-lg-4">
              <Link 
                className="nav-link" 
                href="/"
                onClick={() => setIsCollapsed(true)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item col-lg-4">
              <Link 
                className="nav-link" 
                style={{ minWidth: '116px' }}
                href="/smart-home"
                onClick={() => setIsCollapsed(true)}
              >
                Smart Home
              </Link>
            </li>
            <li className="nav-item col-lg-4">
              <div className="btn-group">
                <Link href="/products" className="nav-link">
                  Products
                </Link>
              </div>
            </li>
          </ul>
          
          <ul className="navbar-nav ml-auto col-lg-5 last-nav">
            {user ? (
              <li className="personal-data nav-item dropdown">
                <div className="dropdown">
                  <button 
                    className="btn dropdown-toggle" 
                    type="button" 
                    data-bs-toggle="dropdown"
                  >
                    <p>{user.name}</p>
                    <div 
                      className="user-image" 
                      style={{ backgroundImage: `url(${user.image})` }}
                    ></div>
                  </button>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" href="/profile">My Account</Link></li>
                    <li><Link className="dropdown-item" href="/orders">My Orders</Link></li>
                    <li><button className="dropdown-item" onClick={handleLogOut}>Log Out</button></li>
                  </ul>
                </div>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link 
                    className="nav-link" 
                    href="/signup"
                    onClick={() => setIsCollapsed(true)}
                  >
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    className="nav-link" 
                    href="/login"
                    onClick={() => setIsCollapsed(true)}
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
            
            <li className="nav-item basket-icon">
              <Link href="/cart" onClick={() => setIsCollapsed(true)}>
                <Image className="icon-shop" src="/smart-image/icon-shop.svg" width={23} height={23} alt="Cart" />
                <span className="count-num">{basketCount}</span>
              </Link>
            </li>
          </ul>
        </div>
        
        <button 
          className="navbar-toggler"
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-expanded={!isCollapsed}
          aria-controls="navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>

      <style jsx>{`
        .contact-nav {
          height: 40px;
          width: 100%;
          background-color: rgba(1, 88, 128, .80);
          padding: 8px 20px 9px;
          position: absolute;
          top: 0;
          z-index: 1000;
          margin: 0;
          left: 0;
        }
        
        .contact-nav li {
          list-style-type: none !important;
        }
        
        .contact-nav-item-link {
          color: white !important;
          text-align: center !important;
          text-decoration: none !important;
          font-size: 17px !important;
          font-family: Raleway-Regular !important;
        }
        
        .fa-phone-alt,
        .fa-envelope {
          color: #fff;
          padding-right: 5px;
        }
        
        .contact-nav-item img {
          height: 21px !important;
          margin: 0 15px !important;
        }
        
        .img-div {
          display: flex !important;
          justify-content: flex-end !important;
          z-index: 3303003030303030;
        }
        
        .mail-div {
          display: flex !important;
          justify-content: center !important;
        }
        
        .personal-data img {
          width: 40px;
          height: 40px;
          margin-right: 2px;
          margin-left: 11px;
          border-radius: 20px;
          background-position: center;
        }
        
        nav .logo {
          width: 110px;
          position: relative;
          max-width: 110px;
        }
        
        .navbar {
          z-index: 5555;
          width: 100%;
          top: 50px;
          background-color: #fff !important;
          height: 65px;
          padding-top: 3px;
        }
        
        .navbar-scrolled {
          top: 0;
          transition: all 200ms ease-in-out;
          height: 55px;
          z-index: 4444;
          padding-top: 5px;
        }
        
        .navbar-scrolled #navbarSupportedContent {
          padding-top: 5px;
        }
        
        .navbar-scrolled .main-navigation {
          padding-top: 4px;
        }
        
        .logo-scrolled {
          max-width: 90px !important;
          width: 90px !important;
        }
        
        nav {
          font-family: Raleway-Regular;
        }
        
        nav .icon-shop {
          width: 23px;
          cursor: pointer;
        }
        
        .count-num {
          background-color: #01B0FF;
          position: absolute;
          border-radius: 50%;
          color: #fff;
          right: 2px;
          font-family: JosefinSans-SemiBold;
          width: 25px;
          text-align: center;
          height: 25px;
          top: -10px;
          padding-top: 1px;
        }
        
        .navbar-nav {
          position: relative;
        }
        
        nav a {
          display: inline-block;
          color: #000000;
          text-align: center;
          text-decoration: none;
          font-size: 17px;
          border-bottom: 3px solid transparent;
          font-family: Raleway-Regular;
        }
        
        nav a:hover:after {
          content: "";
          position: absolute;
          width: 30px;
          display: block;
          height: 1px;
          padding-top: 3px;
          border-bottom: 3px solid #01B0FF;
          transition: width 1s ease-in;
        }
        
        #homeLink:hover:after {
          display: none;
        }
        
        .navbar-light .navbar-nav .nav-link {
          color: #000000;
          cursor: pointer;
        }
        
        .main-navigation {
          text-align: center;
        }
        
        #navbarSupportedContent, .last-nav {
          padding-right: 0;
          z-index: 3303003030303030;
        }
        
        .last-nav {
          display: inline-block;
          text-align: right;
        }
        
        .last-nav .nav-item {
          position: relative;
          display: inline-block;
          max-width: 80px;
        }
        
        .last-nav .basket-icon {
          padding-right: 15px;
          margin-right: 10px;
          margin-left: 10px;
        }
        
        .btn {
          line-height: .5;
          padding-left: 0;
        }
        
        .user-image {
          display: inline-block;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          background-repeat: no-repeat;
          background-position: top;
          background-size: cover;
          margin-left: 5px;
          margin-right: 5px;
          vertical-align: middle;
        }
        
        @media (max-width: 991px) {
          .navbar-collapse {
            position: absolute;
            transition: none;
          }
          
          .last-nav {
            text-align: center;
          }
          
          .last-nav .nav-item {
            margin-left: 10px;
            margin-right: 10px;
            margin-top: 20px;
          }
          
          .contact-nav {
            padding: 7px 3px 9px;
          }
          
          .contact-nav-item img {
            margin: 0 5px;
          }
          
          .navbar-scrolled {
            height: 70px;
          }
        }
        
        @media (max-width: 780px) {
          .img-div {
            display: none !important;
          }
        }
        
        @media (max-width: 570px) {
          .mail-div {
            display: none !important;
          }
          
          .contact-nav-item {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}