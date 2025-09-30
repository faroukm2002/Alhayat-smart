'use client';

import Link from 'next/link';

export default function SmartHomeSection() {
  return (
    <>
      <div className="las-section" style={{ margin: '154px auto' }}>
        <div className="container">
          <div className="fath-box">
            <div className="book-box"></div>
            <div className="lay-box"></div>
            <div className="text-last">
              <h4>Make Smart Home Project</h4>
              <p>
                We are here to help you with choosing your needs for turning your home to a smart one, 
                all you have to do now is just begin and connect your home and you devices together.
              </p>
              <span>
                <Link href="/smart-home">
                  <button className="btn btn-primary" type="button">
                    Get Started Now
                  </button>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fath-box {
          margin-left: auto;
          width: 97%;
          height: 350px;
          border-radius: 20px;
          background-image: linear-gradient(rgba(1,176,255,.45), rgb(1,88,128,.45));
          position: relative;
          margin-right: auto;
          display: flex;
          align-items: baseline;
        }
        
        .book-box {
          position: absolute;
          width: 250px;
          height: 348px;
          top: -100px;
          left: 3px;
          background-image: url('/smart-image/book-last-sec.png');
          z-index: 22;
        }
        
        .lay-box {
          left: -3%;
          width: 106%;
          height: 100%;
          position: absolute;
          top: -37px;
          border-radius: 20px;
          background-image: linear-gradient(rgba(1,176,255,.45), rgb(1,88,128,.45));
        }
        
        .text-last {
          position: absolute;
          right: 0;
          left: 253px;
          padding: 25px;
        }
        
        .text-last h4 {
          margin-top: 9px;
          color: #fff;
          font-family: Raleway-Bold;
        }
        
        .text-last p {
          color: #fff;
          font-family: Raleway-Regular;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          height: 150px;
        }
        
        .text-last span {
          color: #fff;
          font-family: Raleway-Bold;
        }
        
        .text-last button {
          float: right;
          background-color: rgba(24,90,157,.5);
          padding: 10px;
          border-radius: 26px;
          width: 190px;
          border: none;
        }
        
        @media (max-width: 700px) {
          .book-box {
            display: none;
          }
          
          .text-last {
            left: 0;
          }
        }
      `}</style>
    </>
  );
}