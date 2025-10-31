import React, { useState } from "react";

const SortFilter = () => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleSort = () => {
    setIsSortOpen(!isSortOpen);
    setIsFilterOpen(false);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
    setIsSortOpen(false);
  };

  const closeModals = () => {
    setIsSortOpen(false);
    setIsFilterOpen(false);
  };

  return (
    <>
      <style>{`
        /* Container */
        .sort-filter-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          box-sizing: border-box;
        }

        /* Main wrapper with divider */
        .divider-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        /* Control buttons */
        .control-button {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 16px 24px;
          background: white;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 16px;
          font-weight: 500;
          color: #1f2937;
        }

        .control-button:hover {
          background: #f9fafb;
        }

        .control-button:active {
          background: #f3f4f6;
        }

        /* Icons */
        .icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }

        /* Button text */
        .button-text {
          font-size: 18px;
          font-weight: 500;
        }

        /* Vertical divider */
        .vertical-divider {
          width: 1px;
          height: 40px;
          background: #e5e7eb;
          flex-shrink: 0;
        }

        /* Modal Overlay */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Bottom Sheet Modal */
        .bottom-sheet {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: white;
          border-radius: 20px 20px 0 0;
          z-index: 1000;
          max-height: 70vh;
          overflow-y: auto;
          animation: slideUp 0.3s ease;
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        /* Modal Header */
        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 20px 16px 20px;
          border-bottom: 1px solid #e5e7eb;
          position: sticky;
          top: 0;
          background: white;
          z-index: 1;
        }

        .modal-handle {
          width: 40px;
          height: 4px;
          background: #d1d5db;
          border-radius: 2px;
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
        }

        .modal-header h3 {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
          color: #1f2937;
        }

        .close-button {
          background: none;
          border: none;
          font-size: 28px;
          color: #6b7280;
          cursor: pointer;
          padding: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background 0.2s ease;
        }

        .close-button:hover {
          background: #f3f4f6;
        }

        /* Modal Content */
        .modal-content {
          padding: 20px;
        }

        .option-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .option-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 12px;
          cursor: pointer;
          transition: background 0.2s ease;
          border-bottom: 1px solid #f3f4f6;
        }

        .option-item:last-child {
          border-bottom: none;
        }

        .option-item:hover {
          background: #f9fafb;
        }

        .option-item:active {
          background: #f3f4f6;
        }

        .option-item input[type="radio"],
        .option-item input[type="checkbox"] {
          width: 20px;
          height: 20px;
          cursor: pointer;
          accent-color: #2563eb;
        }

        .option-item span {
          font-size: 16px;
          color: #374151;
          flex: 1;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .sort-filter-container {
            padding: 15px;
          }

          .control-button {
            padding: 14px 20px;
            gap: 10px;
          }

          .button-text {
            font-size: 16px;
          }

          .icon {
            width: 22px;
            height: 22px;
          }

          .vertical-divider {
            height: 35px;
          }

          .bottom-sheet {
            max-height: 80vh;
          }
        }

        @media (max-width: 480px) {
          .sort-filter-container {
            padding: 10px;
          }

          .control-button {
            padding: 12px 16px;
            gap: 8px;
            flex-direction: column;
          }

          .button-text {
            font-size: 14px;
          }

          .icon {
            width: 20px;
            height: 20px;
          }

          .vertical-divider {
            height: 50px;
          }

          .modal-header h3 {
            font-size: 18px;
          }

          .option-item span {
            font-size: 15px;
          }

          .bottom-sheet {
            max-height: 85vh;
          }
        }

        /* Extra small devices */
        @media (max-width: 360px) {
          .control-button {
            padding: 10px 12px;
          }

          .button-text {
            font-size: 13px;
          }

          .icon {
            width: 18px;
            height: 18px;
          }
        }
      `}</style>

      <div className="sort-filter-container">
        <div className="divider-wrapper">
          <button className="control-button" onClick={toggleSort}>
            <svg
              className="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M11 5h10M11 9h7M11 13h4" />
              <path d="M7 3v18M4 18l3 3 3-3" />
            </svg>
            <span className="button-text">Sort</span>
          </button>

          <div className="vertical-divider"></div>

          <button className="control-button" onClick={toggleFilter}>
            <svg
              className="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="6" cy="6" r="2" />
              <circle cx="6" cy="18" r="2" />
              <circle cx="18" cy="12" r="2" />
              <line x1="8" y1="6" x2="22" y2="6" />
              <line x1="8" y1="18" x2="22" y2="18" />
              <line x1="2" y1="12" x2="16" y2="12" />
            </svg>
            <span className="button-text">Filter</span>
          </button>
        </div>

        {/* Sort Modal */}
        {isSortOpen && (
          <>
            <div className="modal-overlay" onClick={closeModals}></div>
            <div className="bottom-sheet">
              <div className="modal-handle"></div>
              <div className="modal-header">
                <h3>Sort By</h3>
                <button className="close-button" onClick={closeModals}>
                  ×
                </button>
              </div>
              <div className="modal-content">
                <div className="option-list">
                  <label className="option-item">
                    <input type="radio" name="sort" defaultChecked />
                    <span>Newest First</span>
                  </label>
                  <label className="option-item">
                    <input type="radio" name="sort" />
                    <span>Oldest First</span>
                  </label>
                  <label className="option-item">
                    <input type="radio" name="sort" />
                    <span>Price: Low to High</span>
                  </label>
                  <label className="option-item">
                    <input type="radio" name="sort" />
                    <span>Price: High to Low</span>
                  </label>
                  {/* <label className="option-item">
                    <input type="radio" name="sort" />
                    <span>Popularity</span>
                  </label>
                  <label className="option-item">
                    <input type="radio" name="sort" />
                    <span>Rating</span>
                  </label> */}
                </div>
              </div>
            </div>
          </>
        )}

        {/* Filter Modal */}
        {isFilterOpen && (
          <>
            <div className="modal-overlay" onClick={closeModals}></div>
            <div className="bottom-sheet">
              <div className="modal-handle"></div>
              <div className="modal-header">
                <h3>Filters</h3>
                <button className="close-button" onClick={closeModals}>
                  ×
                </button>
              </div>
              <div className="modal-content">
                <div className="option-list">
                  <label className="option-item">
                    <input type="checkbox" />
                    <span>In Stock</span>
                  </label>
                  <label className="option-item">
                    <input type="checkbox" />
                    <span>On Sale</span>
                  </label>
                  <label className="option-item">
                    <input type="checkbox" />
                    <span>New Arrivals</span>
                  </label>
                  <label className="option-item">
                    <input type="checkbox" />
                    <span>Featured</span>
                  </label>
                  <label className="option-item">
                    <input type="checkbox" />
                    <span>Free Shipping</span>
                  </label>
                  <label className="option-item">
                    <input type="checkbox" />
                    <span>Best Seller</span>
                  </label>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SortFilter;
