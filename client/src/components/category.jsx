import "../styles/category.css";
import {Bike} from "lucide-react";

function Category() {
  return (
    <>
      <div className="category-container">
        <div className="category-grid">
          {/* <!-- Mobiles & Tablets --> */}
          <a href="/category/mobiles" className="category-item">
            <div className="category-icon mobiles">📱</div>
            <div className="category-label">Mobiles & Tablets</div>
          </a>

          {/* <!-- TVs & Appliances --> */}
          <a href="/category/electronics" className="category-item">
            <div className="category-icon tvs">📺</div>
            <div className="category-label">Electronics</div>
          </a>

          {/* <!-- Electronics --> */}
          <a href="/category/vehicles" className="category-item">
            <div className="category-icon electronics">
              <Bike />
            </div>
            <div className="category-label">Vehicles</div>
          </a>

          <a href="/category/households" className="category-item">
            <div className="category-icon home">👜</div>
            <div className="category-label">Households</div>
          </a>

          <a href="/category/furnitures" className="category-item">
            <div className="category-icon furniture">🛋️</div>
            <div className="category-label">Furniture</div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Category;
