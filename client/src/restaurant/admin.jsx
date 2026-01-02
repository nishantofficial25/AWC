import React, { useEffect, useState } from "react";
import { Phone, Search, Edit2, Trash2, X } from "lucide-react";
import "./styles/one.css";
import { restaurants } from "../MenuData/restaurantslist";
import axios from "axios";

const Admin = () => {
  const id = 1;
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [showConfirm, setShowConfirm] = useState(null);
  const [menu, setMenu] = useState([]);
  const [itemid, setitemid] = useState(null);

  const [quantity, setQuantity] = useState({
    Quarter: "",
    Half: "",
    Full: "",
  });

  const groupedMenu = Array.isArray(menu)
    ? menu.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
      }, {})
    : {};

  useEffect(() => {
    fetchMenu();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handleChange = (e) => setIsMobile(e.matches);

    setIsMobile(mq.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  const selectedRestaurant = restaurants.find((res) => res.id == id);

  const getFilteredItems = () => {
    let data = [];

    if (activeCategory === "all") {
      data = Object.entries(groupedMenu);
    } else {
      data = [[activeCategory, groupedMenu[activeCategory] || []]];
    }

    if (searchQuery.trim()) {
      data = data.map(([category, items]) => [
        category,
        items.filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      ]);
    }

    return data.filter(([_, items]) => items.length > 0);
  };

  const fetchMenu = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/menu");
      setMenu(res.data);
    } catch (error) {
      console.error("Menu fetch failed", error);
    }
  };

  const getCategoryTitle = (categoryId) => {
    const category = selectedRestaurant.categories.find(
      (cat) => cat.id === categoryId
    );
    return category?.name || "";
  };

  const deleteItem = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/menu/delete/${itemid}`);

      // remove from UI instantly
      setMenu((prev) => prev.filter((item) => item._id !== itemid));
      setitemid(null);
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const handleAddClick = async () => {
    const quantityObj = {};

    if (quantity.Quarter) quantityObj.Quarter = quantity.Quarter;
    if (quantity.Half) quantityObj.Half = quantity.Half;
    if (quantity.Full) quantityObj.Full = quantity.Full;

    const newData = {
      name: editingItem.name,
      image: editingItem.image,
      category: editingItem.category,
      price: Object.keys(quantityObj).length ? "" : editingItem.price,
      quantity: Object.keys(quantityObj).length ? quantityObj : null,
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/menu/add",
        newData
      );
      setMenu((prev) => [...prev, res.data.data]);
      setEditingItem(null);
      setQuantity({ Quarter: "", Half: "", Full: "" });
      await fetchMenu();
    } catch (err) {
      console.error("Add failed", err);
    }
  };

  const updateItem = async () => {
    const quantityObj = {};

    if (quantity.Quarter) quantityObj.Quarter = quantity.Quarter;
    if (quantity.Half) quantityObj.Half = quantity.Half;
    if (quantity.Full) quantityObj.Full = quantity.Full;

    const updatedData = {
      name: editingItem.name,
      image: editingItem.image,
      category: editingItem.category,
      price: Object.keys(quantityObj).length ? "" : editingItem.price,
      quantity: Object.keys(quantityObj).length ? quantityObj : null,
    };

    try {
      const res = await axios.put(
        `http://localhost:5000/api/menu/update/${itemid}`,
        updatedData
      );

      setMenu((prev) =>
        prev.map((item) => (item._id === itemid ? res.data.data : item))
      );

      setEditingItem(null);
      setQuantity({ Quarter: "", Half: "", Full: "" });
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  const handleEditClick = (item, category, index) => {
    setEditingItem({ ...item, category, index });

    setQuantity({
      Quarter: item.quantity?.Quarter || "",
      Half: item.quantity?.Half || "",
      Full: item.quantity?.Full || "",
    });
  };

  const handleDeleteClick = (id) => {
    setShowConfirm("delete");
    setitemid(id);
  };

  const handleUpdateClick = (id) => {
    setShowConfirm("update");
    setitemid(id);
  };

  const confirmAction = (action) => {
    if (action === "delete") {
      console.log("Deleting item:", editingItem);
      deleteItem();
      setEditingItem(null);
    } else if (action === "update") {
      console.log("Updating item:", editingItem);
      updateItem();
      setEditingItem(null);
    }
    setShowConfirm(null);
  };

  return (
    <>
      <style>{`
        /* Hindan Veg Menu Styles */
        .hindan-menu {
          margin: -20px;
          min-height: 100vh;
          background: linear-gradient(to bottom right, #fffbeb, #ffedd5);
        }

        .menu-header {
          background: linear-gradient(to right, #78350f, #9a3412);
          color: white;
          padding: 1.5rem 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .header-content {
          max-width: 72rem;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .hindan-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
        }

        .logo-circle {
          width: 3rem;
          height: 3rem;
          background: linear-gradient(135deg, #7c2d12, #9a3412);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          border: 3px solid #fcd34d;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        }

        .logo-text {
          background-color: #7c2d12;
          color: #fcd34d;
          padding: 0.25rem 0.75rem;
          border-radius: 0.5rem;
          font-size: 0.65rem;
          font-weight: bold;
          letter-spacing: 0.5px;
        }

        .restaurant-title {
          font-size: 1.875rem;
          font-weight: bold;
          margin: 0;
        }

        .restaurant-tagline {
          color: #fcd34d;
          font-size: 0.875rem;
          margin: 0;
        }

        .header-search {
          flex: 1;
          max-width: 500px;
          min-width: 250px;
        }

        .header-search .search-box {
          position: relative;
          width: 100%;
        }

        .header-search .search-input {
          width: 100%;
          padding: 0.75rem 3rem 0.75rem 3rem;
          border: 2px solid rgba(255, 255, 255, 0.3);
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          border-radius: 9999px;
          font-size: 0.95rem;
          outline: none;
          transition: all 0.3s;
        }

        .header-search .search-input:focus {
          background-color: rgba(255, 255, 255, 0.2);
          border-color: #fcd34d;
        }

        .header-search .search-input::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }

        .header-search .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          width: 1.1rem;
          height: 1.1rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .header-search .clear-btn {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(255, 255, 255, 0.3);
          color: white;
          border: none;
          border-radius: 50%;
          width: 1.5rem;
          height: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 0.875rem;
          transition: background-color 0.3s;
        }

        .header-search .clear-btn:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }

        .header-right {
          display: none;
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .header-right {
            display: block;
            text-align: right;
          }
        }

        @media (min-width: 1024px) {
          .header-content {
            flex-wrap: nowrap;
          }
        }

        .contact-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
        }

        .phone-icon {
          width: 1rem;
          height: 1rem;
        }

        .category-filter {
          max-width: 72rem;
          margin: 0 auto;
          padding: 1.5rem 1rem;
        }

        .filter-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
        }

        .filter-btn {
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          transition: all 0.3s;
          transform: scale(1);
          cursor: pointer;
          border: none;
          background-color: white;
          color: #374151;
        }

        .filter-btn:hover {
          background-color: #f3f4f6;
          transform: scale(1.05);
        }

        .filter-btn.active {
          color: white;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .filter-btn.all.active {
          background-color: #d97706;
        }

        .filter-btn.chaap.active {
          background-color: #ea580c;
        }

        .filter-btn.veg.active {
          background-color: #ea580c;
        }

        .menu-container {
          max-width: 72rem;
          margin: 0 auto;
          padding: 0 1rem 2rem;
        }

        .no-results {
          text-align: center;
          padding: 3rem 1rem;
          background-color: white;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .no-results-text {
          font-size: 1.25rem;
          color: #6b7280;
          margin-bottom: 1rem;
        }

        .reset-search-btn {
          padding: 0.75rem 1.5rem;
          background-color: #d97706;
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .reset-search-btn:hover {
          background-color: #b45309;
        }

        .menu-section {
          margin-bottom: 2rem;
        }

        .section-header {
          background: linear-gradient(to right, #d97706, #ea580c);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem 0.5rem 0 0;
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0;
        }

        .section-content {
          background-color: white;
          border-radius: 0 0 0.5rem 0.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .menu-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1px;
          background-color: #e5e7eb;
        }

        @media (min-width: 768px) {
          .menu-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .menu-item {
          position: relative;
          background-color: white;
          padding: 1rem;
          transition: background-color 0.3s;
        }

        .menu-item:hover {
          background-color: #fffbeb;
        }

        .item-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        .item-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex: 1;
        }

        .item-image {
          width: 5rem;
          height: 5rem;
          object-fit: cover;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .item-info {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          flex: 1;
        }

        .item-star {
          color: #d97706;
          margin-top: 0.25rem;
        }

        .item-name {
          color: #1f2937;
          font-weight: 500;
        }

        .item-prices {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-end;
        }

        .price-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .price-label {
          font-size: 0.75rem;
          color: #6b7280;
          font-weight: 600;
          background-color: #f3f4f6;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
        }

        .item-price {
          font-size: 1rem;
          font-weight: bold;
          color: #b45309;
          white-space: nowrap;
        }

        .menu-footer {
          background: linear-gradient(to right, #78350f, #9a3412);
          color: white;
          padding: 1.5rem 1rem;
          margin-top: 2rem;
        }

        .footer-content {
          max-width: 72rem;
          margin: 0 auto;
          text-align: center;
        }

        .footer-heading {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .footer-events {
          color: #fcd34d;
          margin-bottom: 1rem;
        }

        .footer-contact {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .footer-phone-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .footer-phone-numbers {
          font-size: 1.125rem;
          font-weight: 600;
        }

        .footer-tagline {
          font-size: 0.875rem;
          color: #fcd34d;
          margin-top: 0.75rem;
        }

        /* Edit Button Styles */
        .edit-btn {
          position: absolute;
          top: 8px;
          right: 8px;
          background: white;
          border: none;
          border-radius: 50%;
          padding: 8px;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          z-index: 10;
        }

        .edit-btn:hover {
          transform: scale(1.1);
          background: #f5f5f5;
        }

        /* Edit Modal Styles */
        .edit-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
          padding: 1rem;
        }

        .edit-modal {
          background: white;
          padding: 25px;
          width: 100%;
          max-width: 450px;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 12px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 2px solid #e5e7eb;
        }

        .modal-header h3 {
          margin: 0;
          font-size: 1.5rem;
          color: #1f2937;
        }

        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          transition: background-color 0.2s;
        }

        .close-btn:hover {
          background-color: #f3f4f6;
        }

        .modal-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          color: #374151;
          margin-bottom: 6px;
          font-size: 0.875rem;
        }

        .form-group input {
          width: 100%;
          padding: 10px 12px;
          border-radius: 6px;
          border: 1px solid #d1d5db;
          font-size: 1rem;
          transition: border-color 0.2s;
          box-sizing: border-box;
        }

        .form-group input:focus {
          outline: none;
          border-color: #d97706;
        }

        .modal-actions {
          display: flex;
          gap: 10px;
          margin-top: 25px;
        }

        .btn {
          flex: 1;
          padding: 12px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.2s;
        }

        .btn-update {
          background: #d97706;
          color: white;
        }

        .btn-update:hover {
          background: #b45309;
        }

        .btn-delete {
          background: #dc2626;
          color: white;
        }

        .btn-delete:hover {
          background: #b91c1c;
        }

        /* Confirmation Dialog */
        .confirm-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }

        .confirm-dialog {
          background: white;
          padding: 30px;
          border-radius: 12px;
          max-width: 400px;
          width: 100%;
          text-align: center;
        }

        .confirm-dialog h3 {
          margin: 0 0 15px 0;
          font-size: 1.5rem;
          color: #1f2937;
        }

        .confirm-dialog p {
          margin: 0 0 25px 0;
          color: #6b7280;
          font-size: 1rem;
        }

        .confirm-actions {
          display: flex;
          gap: 10px;
        }

        .btn-cancel {
          background: #e5e7eb;
          color: #374151;
        }

        .btn-cancel:hover {
          background: #d1d5db;
        }

        .btn-confirm {
          background: #dc2626;
          color: white;
        }

        .btn-confirm:hover {
          background: #b91c1c;
        }
      `}</style>

      <div className="hindan-menu">
        {/* Header */}
        <header className="menu-header">
          <div className="header-content">
            <div className="header-left">
              <div className="hindan-logo">
                <div className="logo-circle">🍽️</div>
                <div className="logo-text">{selectedRestaurant.name}</div>
              </div>
              <div>
                <h1 className="restaurant-title">Airwarrior Club</h1>
                <p className="restaurant-tagline">
                  Enjoy the finest dining experience!
                </p>
              </div>
            </div>

            {/* Search Bar in Header */}
            <div className="header-search">
              <div className="search-box">
                <Search className="search-icon" />
                <input
                  type="text"
                  placeholder="Search for dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="clear-btn"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            <div className="header-right">
              <div className="contact-info">
                <Phone className="phone-icon" />
                <div>
                  {selectedRestaurant.phone
                    .split(",")
                    .map((numberString, index) => (
                      <div key={index}>{numberString.trim()}</div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Add button */}

          <div className="category-filter ">
            <div className="filter-buttons">
              <button
                className="filter-btn add-item-btn"
                onClick={() =>
                  setEditingItem({
                    name: "",
                    price: "",
                    image: "",
                    category: activeCategory,
                    isNew: true,
                  })
                }
                style={{border:"1px solid black"}}
              >
                + Add Item
              </button>
            </div>
          </div>

        {/* Category Filter */}
        <div className="category-filter">
          <div className="filter-buttons">
            {selectedRestaurant.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`filter-btn ${cat.color} ${
                  activeCategory === cat.id ? "active" : ""
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="menu-container">
          {getFilteredItems().length > 0 ? (
            getFilteredItems().map(([category, items]) => (
              <div key={category} className="menu-section">
                <div className="section-header">
                  <h2 className="section-title" style={{ color: "white" }}>
                    {getCategoryTitle(category)}
                  </h2>
                </div>
                <div className="section-content">
                  <div className="menu-grid">
                    {items?.map((item, index) => (
                      <div key={item._id} className="menu-item">
                        <button
                          className="edit-btn"
                          onClick={() => handleEditClick(item, category, index)}
                          aria-label="Edit item"
                        >
                          <Edit2 size={16} color="#d97706" />
                        </button>
                        <div className="item-content">
                          <div className="item-left">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="item-image"
                            />
                            <div className="item-info">
                              <span className="item-star">★</span>
                              <span className="item-name">{item.name}</span>
                            </div>
                          </div>
                          <div className="item-prices">
                            {item.quantity ? (
                              Object.keys(item.quantity).length > 0 &&
                              Object.entries(item.quantity).map(
                                ([key, value]) => (
                                  <div className="price-item" key={key}>
                                    <span className="price-label">{key}</span>
                                    <span className="item-price">
                                      {value}/-
                                    </span>
                                  </div>
                                )
                              )
                            ) : (
                              <div className="price-item">
                                <span className="item-price">
                                  ₹{item.price}/-
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p className="no-results-text">
                No items found matching "{searchQuery}"
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="reset-search-btn"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="menu-footer">
          <div className="footer-content">
            <p className="footer-heading">We arrange for:</p>
            <p className="footer-events">
              Marriage • Kitty Parties • Birthday • Family Social • Functions &
              Other Events
            </p>
            <div className="footer-contact">
              <Phone className="footer-phone-icon" />
              <div className="footer-phone-numbers">
                {selectedRestaurant.phone
                  .split(",")
                  .map((numberString, index) => (
                    <div key={index}>{numberString.trim()}</div>
                  ))}
              </div>
            </div>
            <p className="footer-tagline">
              Authentic vegetarian cuisine with the finest ingredients
            </p>
          </div>
        </footer>
      </div>

      {/* Edit Modal */}
      {editingItem && !showConfirm && (
        <div className="edit-overlay" onClick={() => setEditingItem(null)}>
          <div className="edit-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{editingItem.isNew ? "Add New Item" : "Edit Item"}</h3>
              <button
                className="close-btn"
                onClick={() => setEditingItem(null)}
                aria-label="Close"
              >
                <X size={24} color="#6b7280" />
              </button>
            </div>

            {editingItem.image && (
              <img
                src={editingItem.image}
                alt={editingItem.name}
                className="modal-image"
              />
            )}

            <div className="form-group">
              <label>Category</label>
              <select
                value={editingItem.category || ""}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, category: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "6px",
                  border: "1px solid #d1d5db",
                  fontSize: "1rem",
                  boxSizing: "border-box",
                }}
              >
                <option value="">Select Category</option>
                {selectedRestaurant.categories
                  .filter((cat) => cat.id !== "all")
                  .map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="form-group">
              <label>Item Name</label>
              <input
                type="text"
                value={editingItem.name}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, name: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Price</label>
              <input
                type="text"
                value={editingItem.price || ""}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, price: e.target.value })
                }
              />
            </div>

            <div
              className="form-group"
              style={{ display: "flex", gap: "0.5rem" }}
            >
              <input
                type="text"
                placeholder="Quarter price"
                value={quantity.Quarter}
                onChange={(e) =>
                  setQuantity({ ...quantity, Quarter: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Half price"
                value={quantity.Half}
                onChange={(e) =>
                  setQuantity({ ...quantity, Half: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Full price"
                value={quantity.Full}
                onChange={(e) =>
                  setQuantity({ ...quantity, Full: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Image URL</label>
              <input
                type="text"
                value={editingItem.image}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, image: e.target.value })
                }
              />
            </div>

            <div className="modal-actions">
              <button
                className="btn btn-update"
                onClick={
                  editingItem.isNew
                    ? () => handleAddClick()
                    : () => handleUpdateClick(editingItem._id)
                }
              >
                <Edit2 size={18} />
                {editingItem.isNew ? "Add Item" : "Update"}
              </button>
              {!editingItem.isNew && (
                <button
                  className="btn btn-delete"
                  onClick={() => handleDeleteClick(editingItem._id)}
                >
                  <Trash2 size={18} />
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {showConfirm && (
        <div className="confirm-overlay">
          <div className="confirm-dialog">
            <h3>Are you sure?</h3>
            <p>
              {showConfirm === "delete"
                ? "This will permanently delete this item."
                : "This will update the item with the new details."}
            </p>
            <div className="confirm-actions">
              <button
                className="btn btn-cancel"
                onClick={() => setShowConfirm(null)}
              >
                Cancel
              </button>
              <button
                className="btn btn-confirm"
                onClick={() => confirmAction(showConfirm)}
              >
                {showConfirm === "delete" ? "Delete" : "Update"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
