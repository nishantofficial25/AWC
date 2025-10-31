import { useState } from "react";
import Navbar from "./navbar";
import Category from "./category";

function Home() {
  return (
    <>
      <div className="main-content">
        <div className="products-area">
          <div className="banner">
            {/* <div className="sponsored">Sponsored</div> */}
            <div className="banner-content">
              {/* <div className="iphone-image">
                <svg width="400" height="200" viewBox="0 0 400 200">
                  <rect
                    x="50"
                    y="20"
                    width="50"
                    height="100"
                    rx="10"
                    fill="#2b7ab5"
                  />
                  <rect
                    x="110"
                    y="20"
                    width="50"
                    height="100"
                    rx="10"
                    fill="#ffed3d"
                  />
                  <rect
                    x="170"
                    y="20"
                    width="50"
                    height="100"
                    rx="10"
                    fill="#ffffff"
                    stroke="#2b7ab5"
                    strokeWidth="2"
                  />
                  <rect
                    x="230"
                    y="20"
                    width="50"
                    height="100"
                    rx="10"
                    fill="#2b7ab5"
                  />
                  <rect
                    x="290"
                    y="20"
                    width="50"
                    height="100"
                    rx="10"
                    fill="#ffed3d"
                  />
                </svg>
              </div> */}
              <div className="banner-text">
                <h2>LocalBazar</h2>
                <p>
                  Local ka apna <i>OLX</i>{" "}
                </p>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <a href="http://localhost:5173/products">
                    Buy Here &#128722;›
                  </a>
                  <a href="http://localhost:5173/sell">Sell Here &#129689;›</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Category></Category>
    </>
  );
}

export default Home;
