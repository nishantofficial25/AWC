import React, { useState } from 'react';

// CSS Styles
/* const styles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .app-container {
    font-family: Arial, sans-serif;
    background-color: #f3f3f3;
    padding: 20px;
    min-height: 100vh;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .header {
    background: linear-gradient(135deg, #2b7ab5, #ffed3d, #f39c3d);
    padding: 30px;
    border-radius: 12px;
    margin-bottom: 30px;
    text-align: center;
  }

  .header h1 {
    color: #ffffff;
    font-size: 32px;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  }

  .header p {
    color: #ffffff;
    font-size: 16px;
  }

  .loader-selector {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 30px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .selector-title {
    font-size: 18px;
    color: #2b7ab5;
    margin-bottom: 15px;
    font-weight: bold;
  }

  .button-group {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .loader-button {
    padding: 10px 20px;
    border: 2px solid #2b7ab5;
    background-color: #ffffff;
    color: #2b7ab5;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    transition: all 0.3s;
  }

  .loader-button:hover {
    background-color: #f39c3d;
    border-color: #f39c3d;
    color: #ffffff;
    transform: translateY(-2px);
  }

  .loader-button.active {
    background-color: #2b7ab5;
    color: #ffffff;
  }

  .loading-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
  }

  .skeleton-card {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .skeleton-image {
    width: 100%;
    height: 250px;
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 8px;
    margin-bottom: 16px;
  }

  .skeleton-text {
    height: 20px;
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 4px;
    margin-bottom: 12px;
  }

  .skeleton-text.title {
    width: 80%;
    height: 24px;
  }

  .skeleton-text.subtitle {
    width: 60%;
    height: 16px;
  }

  .skeleton-text.price {
    width: 40%;
    height: 28px;
    margin-top: 16px;
  }

  .skeleton-button {
    width: 100%;
    height: 40px;
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 20px;
    margin-top: 16px;
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  .spinner-container {
    text-align: center;
    padding: 40px;
    background-color: #ffffff;
    border-radius: 8px;
    margin-bottom: 40px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .spinner {
    width: 60px;
    height: 60px;
    border: 6px solid #e0e0e0;
    border-top-color: #2b7ab5;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 20px;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .loading-text {
    color: #2b7ab5;
    font-size: 18px;
    font-weight: bold;
  }

  .pulse-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background-color: #ffffff;
    border-radius: 8px;
    margin-bottom: 40px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .pulse-dot {
    width: 20px;
    height: 20px;
    background-color: #2b7ab5;
    border-radius: 50%;
    margin: 0 8px;
    animation: pulse 1.4s infinite ease-in-out both;
  }

  .pulse-dot:nth-child(1) {
    animation-delay: -0.32s;
    background-color: #2b7ab5;
  }

  .pulse-dot:nth-child(2) {
    animation-delay: -0.16s;
    background-color: #ffed3d;
  }

  .pulse-dot:nth-child(3) {
    background-color: #f39c3d;
  }

  @keyframes pulse {
    0%, 80%, 100% {
      transform: scale(0);
      opacity: 0.5;
    }
    40% {
      transform: scale(1);
      opacity: 1;
    }
  }

  .progress-container {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 40px;
    margin-bottom: 40px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .progress-bar {
    width: 100%;
    height: 8px;
    background-color: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 16px;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #2b7ab5, #ffed3d, #f39c3d);
    background-size: 200% 100%;
    animation: progress 2s ease-in-out infinite;
  }

  @keyframes progress {
    0% {
      width: 0%;
      background-position: 0% 50%;
    }
    50% {
      width: 70%;
      background-position: 100% 50%;
    }
    100% {
      width: 100%;
      background-position: 0% 50%;
    }
  }

  .progress-text {
    text-align: center;
    color: #666;
    font-size: 14px;
  }

  .box-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background-color: #ffffff;
    border-radius: 8px;
    margin-bottom: 40px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .box-loader {
    display: flex;
    gap: 10px;
  }

  .box {
    width: 30px;
    height: 30px;
    background-color: #2b7ab5;
    animation: boxBounce 1.2s infinite ease-in-out;
  }

  .box:nth-child(1) {
    animation-delay: -0.32s;
    background-color: #2b7ab5;
  }

  .box:nth-child(2) {
    animation-delay: -0.16s;
    background-color: #ffed3d;
  }

  .box:nth-child(3) {
    background-color: #f39c3d;
  }

  @keyframes boxBounce {
    0%, 80%, 100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }

  .cart-loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background-color: #ffffff;
    border-radius: 8px;
    margin-bottom: 40px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .cart-loader {
    position: relative;
    width: 80px;
    height: 80px;
  }

  .cart-icon {
    width: 60px;
    height: 60px;
    border: 4px solid #2b7ab5;
    border-radius: 8px;
    position: absolute;
    top: 10px;
    left: 10px;
    animation: cartShake 1s infinite;
  }

  .cart-wheels {
    position: absolute;
    bottom: 0;
    left: 10px;
    right: 10px;
    display: flex;
    justify-content: space-between;
  }

  .wheel {
    width: 12px;
    height: 12px;
    background-color: #f39c3d;
    border-radius: 50%;
    animation: wheelRotate 0.8s linear infinite;
  }

  @keyframes cartShake {
    0%, 100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
  }

  @keyframes wheelRotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .section-title {
    font-size: 20px;
    font-weight: bold;
    color: #2b7ab5;
    margin-bottom: 20px;
    padding-left: 10px;
    border-left: 4px solid #f39c3d;
  }

  .demo-section {
    margin-bottom: 40px;
  }

  .code-example {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    margin-top: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .code-example pre {
    background-color: #f5f5f5;
    padding: 15px;
    border-radius: 4px;
    overflow-x: auto;
    font-size: 14px;
    color: #333;
  }

  .code-title {
    font-size: 14px;
    color: #2b7ab5;
    font-weight: bold;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    .header h1 {
      font-size: 24px;
    }

    .header p {
      font-size: 14px;
    }

    .loading-grid {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 15px;
    }

    .skeleton-image {
      height: 200px;
    }

    .section-title {
      font-size: 18px;
    }

    .spinner {
      width: 50px;
      height: 50px;
    }

    .loading-text {
      font-size: 16px;
    }

    .button-group {
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .app-container {
      padding: 10px;
    }

    .header {
      padding: 20px;
    }

    .header h1 {
      font-size: 20px;
    }

    .loading-grid {
      grid-template-columns: 1fr;
      gap: 10px;
    }

    .skeleton-image {
      height: 180px;
    }

    .skeleton-card {
      padding: 15px;
    }

    .spinner {
      width: 40px;
      height: 40px;
      border-width: 4px;
    }

    .pulse-dot {
      width: 15px;
      height: 15px;
    }

    .box {
      width: 25px;
      height: 25px;
    }

    .section-title {
      font-size: 16px;
    }

    .loader-button {
      padding: 8px 16px;
      font-size: 12px;
    }
  }
`; */

// Exportable Components
export const SkeletonCard = () => (
  <div className="skeleton-card">
    <div className="skeleton-image"></div>
    <div className="skeleton-text title"></div>
    <div className="skeleton-text subtitle"></div>
    <div className="skeleton-text subtitle"></div>
    <div className="skeleton-text price"></div>
    <div className="skeleton-button"></div>
  </div>
);

export const Spinner = ({ text = "Loading Products..." }) => (
  <div className="spinner-container">
    <div className="spinner"></div>
    <div className="loading-text">{text}</div>
  </div>
);

export const PulseDots = () => (
  <div className="pulse-container">
    <div className="pulse-dot"></div>
    <div className="pulse-dot"></div>
    <div className="pulse-dot"></div>
  </div>
);

export const ProgressBar = ({ text = "Loading your products..." }) => (
  <div className="progress-container">
    <div className="progress-bar">
      <div className="progress-fill"></div>
    </div>
    <div className="progress-text">{text}</div>
  </div>
);

export const BoxLoader = () => (
  <div className="box-container">
    <div className="box-loader">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </div>
  </div>
);

export const CartLoader = () => (
  <div className="cart-loader-container">
    <div className="cart-loader">
      <div className="cart-icon"></div>
      <div className="cart-wheels">
        <div className="wheel"></div>
        <div className="wheel"></div>
      </div>
    </div>
  </div>
);

// Main App Component
const Productloader = () => {
  const [selectedLoader, setSelectedLoader] = useState("all");

  const loaders = [
    {
      id: "skeleton",
      name: "Skeleton Cards",
      component: () => (
        <div className="loading-grid">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ),
      code: `import { SkeletonCard } from './LoadingComponents';

<SkeletonCard />`,
    },
    {
      id: "spinner",
      name: "Spinner",
      component: () => <Spinner />,
      code: `import { Spinner } from './LoadingComponents';

<Spinner text="Loading Products..." />`,
    },
    {
      id: "pulse",
      name: "Pulse Dots",
      component: () => <PulseDots />,
      code: `import { PulseDots } from './LoadingComponents';

<PulseDots />`,
    },
    {
      id: "progress",
      name: "Progress Bar",
      component: () => <ProgressBar />,
      code: `import { ProgressBar } from './LoadingComponents';

<ProgressBar text="Loading your products..." />`,
    },
    {
      id: "box",
      name: "Box Animation",
      component: () => <BoxLoader />,
      code: `import { BoxLoader } from './LoadingComponents';

<BoxLoader />`,
    },
    {
      id: "cart",
      name: "Shopping Cart",
      component: () => <CartLoader />,
      code: `import { CartLoader } from './LoadingComponents';

<CartLoader />`,
    },
  ];

  return (
    <div className="app-container">
      <style>{styles}</style>

      <div className="container">

        <div className="loader-selector">
          <div className="selector-title">Select Loading Animation:</div>
          <div className="button-group">
            <button
              className={`loader-button ${
                selectedLoader === "all" ? "active" : ""
              }`}
              onClick={() => setSelectedLoader("all")}
            >
              Show All
            </button>
            {loaders.map((loader) => (
              <button
                key={loader.id}
                className={`loader-button ${
                  selectedLoader === loader.id ? "active" : ""
                }`}
                onClick={() => setSelectedLoader(loader.id)}
              >
                {loader.name}
              </button>
            ))}
          </div>
        </div>

        {selectedLoader === "all" ? (
          loaders.map((loader) => (
            <div key={loader.id} className="demo-section">
              <h2 className="section-title">{loader.name}</h2>
              {loader.component()}
              <div className="code-example">
                <div className="code-title">Usage Example:</div>
                <pre>{loader.code}</pre>
              </div>
            </div>
          ))
        ) : (
          <div className="demo-section">
            <h2 className="section-title">
              {loaders.find((l) => l.id === selectedLoader)?.name}
            </h2>
            {loaders.find((l) => l.id === selectedLoader)?.component()}
            <div className="code-example">
              <div className="code-title">Usage Example:</div>
              <pre>{loaders.find((l) => l.id === selectedLoader)?.code}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Productloader;