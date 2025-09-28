import React from "react";

export interface NavBarProps {
  user?: { name: string; image?: string };
  basketCount: number;
  lang: "en" | "ar";
  rtl?: boolean;
  settings?: {
    facebook?: string;
    linkIn?: string;
    twitter?: string;
    instagram?: string;
  };
  onLogout?: () => void;
  onLangSwitch?: (lang: "en" | "ar") => void;
}

export const NavBar: React.FC<NavBarProps> = ({
  user,
  basketCount,
  lang,
  rtl,
  settings,
  onLogout,
  onLangSwitch,
}) => {
  return (
    <nav className={`navbar fixed-top navbar-expand-lg navbar-light bg-light${rtl ? " rtl" : ""}`}> {/* Top nav */}
      <div className="container-lg">
        {/* Contact bar */}
        <div className="row contact-nav">
          <div className="col-lg-4 col-md-3 col-sm-6 col-xs contact-nav-item">
            <a href="tel:00201206569999" className="contact-nav-item-link">
              <i className="fas fa-phone-alt"></i> 01206569999
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs contact-nav-item mail-div">
            <a href="mailto:info@alhayatsmart.com" className="contact-nav-item-link">
              <i className="fas fa-envelope"></i> contactus@alhayatsmart.com
            </a>
          </div>
          <div className="col-lg-4 col-md-4 contact-nav-item img-div">
            {settings?.facebook && (
              <a href={settings.facebook} target="_blank" rel="noopener noreferrer">
                <img alt="facebook page" src="/images/logos/facebook.svg" />
              </a>
            )}
            {settings?.linkIn && (
              <a href={settings.linkIn} target="_blank" rel="noopener noreferrer">
                <img alt="linkedin page" src="/images/logos/linkedin.svg" />
              </a>
            )}
            {settings?.twitter && (
              <a href={settings.twitter} target="_blank" rel="noopener noreferrer">
                <img alt="twitter page" src="/images/logos/twitter.svg" />
              </a>
            )}
            {settings?.instagram && (
              <a href={settings.instagram} target="_blank" rel="noopener noreferrer">
                <img alt="instagram page" src="/images/logos/instagram.svg" />
              </a>
            )}
          </div>
        </div>
        {/* Main nav */}
        <div className="navbar-content">
          <a id="homeLink" href={`/${lang}`}>
            <img className="logo" src="/images/logos/Logo.png" alt="Alhayat Smart Logo" />
          </a>
          <ul className="navbar-nav main-navigation">
            <li className="nav-item">
              <a className="nav-link" href={`/${lang}`}>الرئيسية</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`/${lang}/smart-home`}>المنزل الذكي</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`/${lang}/products`}>المنتجات</a>
            </li>
          </ul>
          <ul className="navbar-nav last-nav">
            {user ? (
              <li className="nav-item personal-data">
                <div className="user-image" style={{ backgroundImage: `url(${user.image || "/images/logos/user.png"})` }} />
                <span>{user.name}</span>
                <div className="dropdown">
                  <a href={`/${lang}/profile`}>الحساب</a>
                  <a href={`/${lang}/orders`}>طلباتي</a>
                  <a href="#" onClick={onLogout}>تسجيل الخروج</a>
                </div>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href={`/${lang}/signup`}>تسجيل جديد</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={`/${lang}/login`}>دخول</a>
                </li>
              </>
            )}
            <li className="nav-item basket-icon">
              <a className="nav-link" href={`/${lang}/cart`}>
                <img className="icon-shop" src="/images/logos/icon-shop.svg" alt="سلة المشتريات" />
                <span className="count-num">{basketCount}</span>
              </a>
            </li>
            <li className="nav-item">
              <button onClick={() => onLangSwitch?.(lang === "ar" ? "en" : "ar")}>{lang === "ar" ? "EN" : "AR"}</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
