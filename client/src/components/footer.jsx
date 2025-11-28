import React from "react";

const Footer = () => {
  return (
    <>
      <style>{`
        body, html {
          margin: 0;
          padding: 0;
          min-height: 100vh;
        }

        #root {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .footer {
          background-color: #1a1a1a;
          color: #ffffff;
          padding: 60px 20px 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          margin-top: auto;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-size: 24px;
          font-weight: 600;
          margin: 0 0 8px 0;
          letter-spacing: -0.5px;
        }

        .brand-tagline {
          font-size: 14px;
          color: #999;
          margin: 0;
        }

        .footer-heading {
          font-size: 14px;
          font-weight: 600;
          margin: 0 0 16px 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #ffffff;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 12px;
        }

        .footer-links a {
          color: #999;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #ffffff;
        }

        .footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          padding-top: 30px;
          border-top: 1px solid #333;
          text-align: center;
        }

        .footer-bottom p {
          margin: 0;
          font-size: 13px;
          color: #666;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 40px 20px 20px;
          }
          
          .footer-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            margin-bottom: 30px;
          }
          
          .brand-name {
            font-size: 20px;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 30px 15px 15px;
          }
          
          .footer-container {
            grid-template-columns: 1fr;
            gap: 25px;
            margin-bottom: 25px;
          }
          
          .footer-section {
            text-align: center;
          }
          
          .brand-name {
            font-size: 22px;
          }
          
          .footer-heading {
            margin-bottom: 12px;
          }
          
          .footer-links li {
            margin-bottom: 10px;
          }
          
          .footer-bottom {
            padding-top: 20px;
          }
          
          .footer-bottom p {
            font-size: 12px;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          {/* Brand Section */}
          <div className="footer-section">
            <h2 className="brand-name">HindanBazar</h2>
            <p className="brand-tagline">Your trusted marketplace</p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Shop</h3>
            <ul className="footer-links">
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/categories">Categories</a>
              </li>
              <li>
                <a href="/deals">Deals</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h3 className="footer-heading">Support</h3>
            <ul className="footer-links">
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
              <li>
                <a href="/shipping">Shipping</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; 2025 HindanBazar. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
