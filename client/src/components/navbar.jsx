import React, { useState } from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";

export default function Navbar(props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("user")));

  const styles = {
    // Navbar Styles
    navbar: {
      backgroundColor: "#FFFFFF",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      width: "100%",
    },
    navbarContainer: {
      maxWidth: "1400px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 24px",
      gap: "32px",
      flexWrap: "wrap",
    },
    logoSection: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer",
    },
    logoText: {
      display: "flex",
      alignItems: "baseline",
      gap: "2px",
    },
    logoHindan: {
      fontSize: "24px",
      fontWeight: 700,
      color: "#1F2937",
    },
    logoBazar: {
      fontSize: "24px",
      fontWeight: 700,
      color: "#2563EB",
    },
    searchContainer: {
      flex: 1,
      maxWidth: "600px",
      position: "relative",
      minWidth: "200px",
    },
    searchWrapper: {
      position: "relative",
      display: "flex",
      alignItems: "center",
    },
    searchInput: {
      width: "100%",
      padding: "12px 110px 12px 44px",
      border: "2px solid #E5E7EB",
      borderRadius: "50px",
      fontSize: "15px",
      outline: "none",
      transition: "all 0.3s ease",
      backgroundColor: "#F9FAFB",
    },
    searchIcon: {
      position: "absolute",
      left: "16px",
      color: "#6B7280",
    },
    searchButton: {
      position: "absolute",
      right: "6px",
      backgroundColor: "#2563EB",
      border: "none",
      padding: "8px 20px",
      borderRadius: "50px",
      color: "white",
      fontWeight: 600,
      cursor: "pointer",
    },
    userSection: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
    },
    iconButton: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "8px",
      borderRadius: "50%",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    cartBadge: {
      position: "absolute",
      top: "2px",
      right: "2px",
      backgroundColor: "#EF4444",
      color: "white",
      fontSize: "11px",
      fontWeight: 700,
      padding: "2px 6px",
      borderRadius: "10px",
    },
    userAvatar: {
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      border: "2px solid #E5E7EB",
      overflow: "hidden",
      transition: "all 0.3s ease",
    },
    userAvatarImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },

    // Main Content
    mainContainer: {
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "24px",
    },
    contentWrapper: {
      display: "flex",
      gap: "24px",
      position: "relative",
    },

    // Mobile Filter Buttons
    mobileFilterBar: {
      display: "none",
      gap: "12px",
      marginBottom: "20px",
    },
    mobileFilterButton: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      padding: "12px 20px",
      backgroundColor: "#FFFFFF",
      border: "2px solid #E5E7EB",
      borderRadius: "12px",
      fontSize: "15px",
      fontWeight: 600,
      color: "#1F2937",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },

    // Sidebar (Desktop)
    sidebar: {
      width: "280px",
      flexShrink: 0,
      backgroundColor: "#FFFFFF",
      borderRadius: "16px",
      padding: "24px",
      height: "fit-content",
      position: "sticky",
      top: "90px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    },
    sidebarTitle: {
      fontSize: "20px",
      fontWeight: 700,
      color: "#1F2937",
      marginBottom: "24px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    filterSection: {
      marginBottom: "28px",
    },
    filterLabel: {
      fontSize: "15px",
      fontWeight: 600,
      color: "#4B5563",
      marginBottom: "12px",
      display: "block",
    },
    filterOption: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "10px 0",
      cursor: "pointer",
      transition: "color 0.2s ease",
    },
    checkbox: {
      width: "18px",
      height: "18px",
      cursor: "pointer",
      accentColor: "#2563EB",
    },
    radioButton: {
      width: "18px",
      height: "18px",
      cursor: "pointer",
      accentColor: "#2563EB",
    },

    // Products Area
    productsArea: {
      flex: 1,
      minWidth: 0,
    },
    productsHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "24px",
      flexWrap: "wrap",
      gap: "16px",
    },
    resultsCount: {
      fontSize: "18px",
      fontWeight: 600,
      color: "#1F2937",
    },
    sortDropdown: {
      padding: "10px 16px",
      border: "2px solid #E5E7EB",
      borderRadius: "12px",
      fontSize: "14px",
      fontWeight: 500,
      backgroundColor: "#FFFFFF",
      cursor: "pointer",
      outline: "none",
      color: "#4B5563",
    },
    productsGrid: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    productCard: {
      backgroundColor: "#FFFFFF",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
      transition: "all 0.3s ease",
      cursor: "pointer",
      display: "flex",
      flexDirection: "row",
      gap: "20px",
      padding: "16px",
    },
    productImage: {
      width: "200px",
      height: "200px",
      flexShrink: 0,
      position: "relative",
      borderRadius: "12px",
      overflow: "hidden",
    },
    favoriteBtn: {
      position: "absolute",
      top: "12px",
      right: "12px",
      backgroundColor: "#FFFFFF",
      border: "none",
      borderRadius: "50%",
      width: "36px",
      height: "36px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      transition: "all 0.3s ease",
    },
    productInfo: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    productCategory: {
      fontSize: "12px",
      fontWeight: 600,
      color: "#2563EB",
      textTransform: "uppercase",
      marginBottom: "8px",
    },
    productTitle: {
      fontSize: "20px",
      fontWeight: 600,
      color: "#1F2937",
      marginBottom: "12px",
      lineHeight: "1.4",
    },
    productPrice: {
      fontSize: "28px",
      fontWeight: 700,
      color: "#2563EB",
      marginBottom: "12px",
    },
    productMeta: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: "14px",
      color: "#6B7280",
      marginTop: "8px",
      paddingTop: "12px",
      borderTop: "1px solid #E5E7EB",
    },
    productDescription: {
      fontSize: "14px",
      color: "#6B7280",
      lineHeight: "1.6",
      marginBottom: "12px",
    },
    productSpecs: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      marginBottom: "12px",
    },
    specItem: {
      fontSize: "13px",
      color: "#4B5563",
      display: "flex",
      alignItems: "center",
      gap: "6px",
    },
    specBullet: {
      width: "4px",
      height: "4px",
      backgroundColor: "#6B7280",
      borderRadius: "50%",
    },
    productRating: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
    },

    // Mobile Modal
    mobileModal: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      zIndex: 2000,
      display: "flex",
      alignItems: "flex-end",
    },
    mobileModalContent: {
      backgroundColor: "#FFFFFF",
      borderTopLeftRadius: "24px",
      borderTopRightRadius: "24px",
      width: "100%",
      maxHeight: "80vh",
      overflowY: "auto",
      padding: "24px",
    },
    modalHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "24px",
    },
    modalTitle: {
      fontSize: "20px",
      fontWeight: 700,
      color: "#1F2937",
    },
    closeButton: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "8px",
    },
    applyButton: {
      width: "100%",
      padding: "14px",
      backgroundColor: "#2563EB",
      color: "white",
      border: "none",
      borderRadius: "12px",
      fontSize: "16px",
      fontWeight: 600,
      cursor: "pointer",
      marginTop: "20px",
    },
  };

  // Media query styles
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const isTablet = typeof window !== "undefined" && window.innerWidth <= 968;

  const responsiveStyles = {
    navbarContainer: {
      ...styles.navbarContainer,
      ...(isMobile && {
        padding: "12px 16px",
        gap: "16px",
      }),
    },
    logoText: {
      ...styles.logoText,
      ...(isMobile && {
        display: "none",
      }),
    },
    searchContainer: {
      ...styles.searchContainer,
      ...(isMobile && {
        order: 3,
        flex: "1 1 100%",
        maxWidth: "100%",
      }),
    },
    searchInput: {
      ...styles.searchInput,
      ...(isMobile && {
        fontSize: "14px",
        padding: "10px 100px 10px 40px",
      }),
    },
    searchButton: {
      ...styles.searchButton,
      ...(isMobile && {
        padding: "6px 14px",
        fontSize: "13px",
      }),
    },
    navLinks: {
      ...styles.navLinks,
      ...(isTablet && {
        display: "none",
      }),
    },
    mobileMenuBtn: {
      ...styles.mobileMenuBtn,
      ...(isTablet && {
        display: "block",
      }),
    },
    mobileMenu: {
      ...styles.mobileMenu,
      ...(isTablet &&
        isMobileMenuOpen && {
          display: "block",
        }),
    },
  };

  return (
    <>
      <style>{`
        @media (max-width: 968px) {
          .nav-links-desktop { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (max-width: 768px) {
          .logo-text-responsive { display: none !important; }
          .search-container-responsive { 
            order: 3 !important;
            flex: 1 1 100% !important;
            max-width: 100% !important;
          }
        }
        .icon-button:hover { background-color: #F3F4F6; }
        .search-button:hover { background-color: #1E40AF; }
        .user-avatar:hover { 
          transform: scale(1.05);
          border-color: #2563EB;
        }
        .nav-link:hover { color: #2563EB; }
        .mobile-menu-link:hover { background-color: #F3F4F6; }
      `}</style>

      <nav style={styles.navbar}>
        <div style={responsiveStyles.navbarContainer}>
          {/* Logo */}
          <a style={styles.logoSection} href={import.meta.env.VITE_CLIENT_URL}>
            <img
              src="/logo.png"
              alt="Hindan Bazar Logo"
              style={{
                width: "40px",
                height: "40px",
                objectFit: "contain",
              }}
            />

            {/* <svg
              width="40"
              height="40"
              viewBox="0 0 80 80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="logoGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#2563EB", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#1E40AF", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <path
                d="M 20 25 L 15 55 Q 15 60 20 60 L 60 60 Q 65 60 65 55 L 60 25 Z"
                fill="none"
                stroke="url(#logoGrad)"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                d="M 28 25 Q 28 15 40 15 Q 52 15 52 25"
                fill="none"
                stroke="url(#logoGrad)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M 32 45 L 32 35 M 28 39 L 32 35 L 36 39"
                stroke="#2563EB"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M 48 35 L 48 45 M 44 41 L 48 45 L 52 41"
                stroke="#2563EB"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg> */}
            <div
              style={responsiveStyles.logoText}
              className="logo-text-responsive"
            >
              <span style={styles.logoHindan}>Hindan</span>
              <span style={styles.logoBazar}>Bazar</span>
            </div>
          </a>

          {/* Search Bar */}
          <div
            style={responsiveStyles.searchContainer}
            className="search-container-responsive"
          >
            <div style={styles.searchWrapper}>
              <Search size={20} style={styles.searchIcon} />
              <input
                type="text"
                style={responsiveStyles.searchInput}
                placeholder="Search products, categories, brands..."
                onChange={(e) => props.setsearch(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                onFocus={(e) =>
                  (e.target.style.cssText = `${e.target.style.cssText}; border-color: #2563EB; background-color: #FFFFFF; box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);`)
                }
                onBlur={(e) =>
                  (e.target.style.cssText = `${e.target.style.cssText}; border-color: #E5E7EB; background-color: #F9FAFB; box-shadow: none;`)
                }
              />
              <button
                style={responsiveStyles.searchButton}
                className="search-button"
              >
                Search
              </button>
            </div>
          </div>

          {/* User Section */}

          <a
            href={
              user
                ? user.status
                  ? `${import.meta.env.VITE_CLIENT_URL}/account`
                  : `${import.meta.env.VITE_CLIENT_URL}/login`
                : `${import.meta.env.VITE_CLIENT_URL}/login`
            }
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <div style={styles.userSection}>
              {user
                ? user.status
                  ? user.userDetails.name
                  : "Login Now"
                : "Login Now"}

              {!user ? (
                <div style={styles.userAvatar} className="user-avatar">
                  <User size={20} />
                </div>
              ) : (
                <div style={styles.userAvatar} className="user-avatar">
                  <img
                    src={user.userDetails.picture}
                    alt="User Profile"
                    style={styles.userAvatarImg}
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </div>
          </a>
        </div>
      </nav>
    </>
  );
}
