import { useState } from "react";
import "../styles/product.css";

function Navbar(props) {
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <>
      <div className="header">
        <div className="header-top">
          {props.sell ? (
            <div className="user" style={{ display: "flex", width: "100%" }}>
              <div className="logo">LocalBazar</div>
              <div className="header-right">
                <div
                  className="header-link"
                  style={{ marginLeft: "auto", marginRight: "0" }}
                >
                  <a
                    href={
                      user
                        ? user.status
                          ? "http://localhost:5173/account"
                          : "http://localhost:5173/login"
                        : "http://localhost:5173/login"
                    }
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <img
                      src={user ? user.userDetails.picture : "user.png"}
                      alt="no"
                      style={{
                        height: "2rem",
                        width: "2rem",
                        borderRadius: "50%",
                        marginRight: "5px",
                      }}
                      referrerPolicy="no-referrer"
                    />
                    {user
                      ? user.status
                        ? user.userDetails.name.split(" ")[0]
                        : "Login Now"
                      : "Login Now"}
                  </a>
                </div>
                {/* <div className="cart">🛒 Cart</div> */}
              </div>
            </div>
          ) : (
            <>
              <div className="user" style={{ display: "flex", width: "100%" }}>
                <div className="logo">LocalBazar</div>
                <div className="header-right">
                  <div
                    className="header-link"
                    style={{ marginLeft: "auto", marginRight: "0" }}
                  >
                    <a
                      href={
                        user
                          ? user.status
                            ? "http://localhost:5173/account"
                            : "http://localhost:5173/login"
                          : "http://localhost:5173/login"
                      }
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <img
                        src={user ? user.userDetails.picture : "user.png"}
                        alt="no"
                        style={{
                          height: "2rem",
                          width: "2rem",
                          borderRadius: "50%",
                          marginRight: "5px",
                        }}
                        referrerPolicy="no-referrer"
                      />
                      {user
                        ? user.status
                          ? user.userDetails.name.split(" ")[0]
                          : "Login Now"
                        : "Login Now"}
                    </a>
                  </div>
                  {/* <div className="cart">🛒 Cart</div> */}
                </div>
              </div>
              <div className="search-bar">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search here"
                  onChange={(e) => props.setsearch(e.target.value)}
                />
                <button className="search-btn">🔍</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
