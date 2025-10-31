import React from "react";
import Profile from "./profile";

const AccountDashboard = () => {
  const accountCards = [
    {
      icon: (
        <div className="icon-lock">
          <svg viewBox="0 0 100 100" className="lock-icon">
            <rect x="30" y="50" width="40" height="35" rx="3" fill="#c5c5c5" />
            <path
              d="M 40 50 L 40 35 Q 40 20 50 20 Q 60 20 60 35 L 60 50"
              stroke="#c5c5c5"
              strokeWidth="8"
              fill="none"
            />
            <circle cx="50" cy="67" r="5" fill="#999" />
          </svg>
        </div>
      ),
      title: "Profile",
      description: "Edit login, name, and mobile number",
      open: "profile",
    },
    {
      icon: (
        <div className="icon-box">
          <svg viewBox="0 0 100 60" className="package-icon">
            <rect x="10" y="15" width="80" height="35" fill="#d4a574" />
            <rect x="15" y="20" width="70" height="25" fill="#c9995e" />
            <path
              d="M 50 15 L 50 50 M 30 25 Q 50 20 70 25"
              stroke="#8b6f47"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="70" cy="25" r="8" fill="#f9f4ef" />
            <path d="M 66 25 Q 70 22 74 25 Q 70 28 66 25" fill="#333" />
          </svg>
        </div>
      ),
      title: "My Products",
      description: "Track , Edit or Delete",
      open: "myProducts",
    },

    {
      icon: (
        <div className="icon-contact">
          <svg viewBox="0 0 100 100" className="contact-icon">
            <circle cx="50" cy="50" r="35" fill="#a8d5e2" />
            <path
              d="M 35 45 Q 40 35 45 45 M 55 45 Q 60 35 65 45"
              fill="#2c5f6f"
            />
            <ellipse cx="50" cy="60" rx="15" ry="10" fill="#2c5f6f" />
            <rect x="30" y="40" width="40" height="25" fill="#a8d5e2" />
          </svg>
        </div>
      ),
      title: "Contact Us",
      description: "Contact our customer service via phone or chat",
      open: "contactUs",
    },
  ];

  const open = (loc)=>{
    window.location.href = `http://localhost:5173/${loc}`;
  }
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .account-dashboard {
          margin: 0 auto;
          padding: 40px 20px;
          font-family: 'Amazon Ember', Arial, sans-serif;
          background-color: #f9f9f9;
          min-height: 100vh;
        }

        .dashboard-title {
          font-size: 28px;
          font-weight: 400;
          margin-bottom: 30px;
          color: #0f1111;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 20px;
          width: 100%;
        }

        .account-card {
          background: white;
          border: 1px solid #d5d9d9;
          border-radius: 8px;
          padding: 24px;
          cursor: pointer;
          transition: all 0.2s ease;
          min-height: 140px;
          display: flex;
          align-items: flex-start;
        }

        .account-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border-color: #c7c7c7;
          transform: translateY(-2px);
        }

        .card-wide {
          grid-column: span 1;
        }

        .card-content {
          display: flex;
          gap: 20px;
          width: 100%;
          align-items: flex-start;
        }

        .icon-box,
        .icon-lock,
        .icon-prime,
        .icon-address,
        .icon-business,
        .icon-payment,
        .icon-pay,
        .icon-contact {
          min-width: 60px;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .package-icon,
        .lock-icon,
        .prime-icon,
        .address-icon,
        .business-icon,
        .payment-icon,
        .pay-icon,
        .contact-icon {
          width: 100%;
          height: 100%;
        }

        .card-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-top: 4px;
        }

        .card-title {
          font-size: 18px;
          font-weight: 600;
          color: #0f1111;
          line-height: 1.3;
        }

        .card-description {
          font-size: 14px;
          color: #565959;
          line-height: 1.5;
        }

        .logout-container {
          margin-top: 30px;
          display: flex;
          justify-content: center;
        }

        .logout-button {
          background-color: #e74c3c;
          color: white;
          border: none;
          padding: 14px 40px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logout-button:hover {
          background-color: #c0392b;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(231, 76, 60, 0.3);
        }

        .logout-button:active {
          transform: translateY(0);
        }

        .logout-icon {
          width: 24px;
          height: 24px;
        }

        @media (max-width: 1024px) {
          .cards-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 16px;
          }

          .dashboard-title {
            font-size: 24px;
          }

          .account-card {
            padding: 20px;
          }
        }

        @media (max-width: 768px) {
          .account-dashboard {
            padding: 20px 16px;
          }

          .dashboard-title {
            font-size: 22px;
            margin-bottom: 20px;
          }

          .cards-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .account-card {
            padding: 18px;
            min-height: 120px;
          }

          .card-content {
            gap: 16px;
          }

          .icon-box,
          .icon-lock,
          .icon-prime,
          .icon-address,
          .icon-business,
          .icon-payment,
          .icon-pay,
          .icon-contact {
            min-width: 50px;
            width: 50px;
            height: 50px;
          }

          .logout-button {
            padding: 12px 32px;
            font-size: 15px;
          }

          .card-title {
            font-size: 16px;
          }

          .card-description {
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .account-dashboard {
            padding: 16px 12px;
          }

          .dashboard-title {
            font-size: 20px;
          }

          .account-card {
            padding: 16px;
          }

          .card-content {
            gap: 12px;
          }

          .icon-box,
          .icon-lock,
          .icon-prime,
          .icon-address,
          .icon-business,
          .icon-payment,
          .icon-pay,
          .icon-contact,
          .icon-logout {
            min-width: 45px;
            width: 45px;
            height: 45px;
          }

          .card-title {
            font-size: 15px;
          }

          .card-description {
            font-size: 12px;
          }
        }
      `}</style>
      <div className="header">
        <div className="header-top">
          <div className="logo">LocalBazar</div>
        </div>
      </div>
      <div className="account-dashboard">
        <h1 className="dashboard-title">Your Account</h1>
        <div className="cards-grid">
          {accountCards.map((card, index) => (
            <div
              key={index}
              className={`account-card ${card.wide ? "card-wide" : ""}`}
              onClick={()=>open(card.open)}
            >
              <div className="card-content">
                {card.icon}
                <div className="card-text">
                  <h2 className="card-title">{card.title}</h2>
                  <p className="card-description">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="logout-container">
          <button
            className="logout-button"
            onClick={() => alert("Logging out...")}
          >
            <svg
              viewBox="0 0 24 24"
              className="logout-icon"
              fill="currentColor"
            >
              <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
            </svg>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default AccountDashboard;
