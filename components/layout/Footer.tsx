import React from "react";

export interface FooterProps {
  lang: "en" | "ar";
  rtl?: boolean;
  settings?: {
    facebook?: string;
    linkIn?: string;
    twitter?: string;
    instagram?: string;
  };
}

export const Footer: React.FC<FooterProps> = ({ lang, rtl, settings }) => {
  return (
    <footer className={`footer${rtl ? " rtl" : ""}`}> {/* Main footer */}
      <div className="container foot-div">
        <div>
          <div><a href={`/${lang}/solutions`}>المنزل الذكي</a></div>
          <div><a href={`/${lang}/products`}>المنتجات</a></div>
          <div><a href={`/${lang}/about`}>من نحن</a></div>
          <div><a href={`/${lang}/contact`}>اتصل بنا</a></div>
        </div>
        <div className="img-svg">
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
        <div className="logo-container">
          <img src="/images/logos/logoWhite.png" alt="Alhayat Smart Logo" className="imag-svg" />
        </div>
      </div>
      <div className="copyRights">
        <p className="copy-rights-text">جميع الحقوق محفوظة &copy; الحياة سمارت</p>
        <p className="powered-by-text">برمجة وتطوير: <a href="https://alhayatsmart.com" target="_blank" rel="noopener noreferrer">Alhayat Smart</a></p>
      </div>
      <div style={{ position: "absolute", bottom: 10 }}>
        <div className="floating-button-div">
          <a href="tel:00201206569999">
            <i className="fas fa-phone-alt circle-phone"></i>
          </a>
        </div>
        <p className="hotline">Hotline: 01206569999</p>
      </div>
    </footer>
  );
};

export default Footer;
