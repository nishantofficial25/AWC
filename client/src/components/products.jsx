import Cards from "./cards";
import SortFilter from "./filter";

function Products(props) {
  return (
    <>
      <div className="main-content">

        <div className="sidebar">
          <div className="sidebar-section">
            <h3>Deals & Discounts</h3>
            <div>Great Indian Festival</div>
          </div>

          <div className="sidebar-section">
            <h4>Delivery Day</h4>
            <div className="checkbox-item">
              <input type="checkbox" id="tomorrow" />
              <label htmlFor="tomorrow">Get It by Tomorrow</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="2days" />
              <label htmlFor="2days">Get It in 2 Days</label>
            </div>
          </div>

          <div className="sidebar-section">
            <h4>Price</h4>
            <div className="price-range">₹49 – ₹122,700+</div>
            <input type="range" className="price-slider" min="0" max="100" />
            <button className="go-btn">Go</button>
            <div style={{ marginTop: "12px" }}>
              <div className="price-range">Up to ₹26,000</div>
              <div className="price-range">₹26,000 - ₹33,000</div>
              <div className="price-range">₹33,000 - ₹52,000</div>
              <div className="price-range">Over ₹52,000</div>
            </div>
          </div>

          <div className="sidebar-section">
            <h4>Brands</h4>
            <div className="checkbox-item">
              <input type="checkbox" id="apple" />
              <label htmlFor="apple">Apple</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="skycell" />
              <label htmlFor="skycell">SKYCELL</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="zebronics" />
              <label htmlFor="zebronics">ZEBRONICS</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="basics" />
              <label htmlFor="basics">amazon basics</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="spigen" />
              <label htmlFor="spigen">Spigen</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="mobistyle" />
              <label htmlFor="mobistyle">mobistyle</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="sounce" />
              <label htmlFor="sounce">Sounce</label>
            </div>
            <div className="see-more">▼ See more</div>
          </div>

          <div className="sidebar-section">
            <h4>Discount</h4>
            <div className="price-range">10% Off or more</div>
            <div className="price-range">25% Off or more</div>
            <div className="price-range">35% Off or more</div>
            <div className="price-range">50% Off or more</div>
            <div className="price-range">60% Off or more</div>
            <div className="price-range">70% Off or more</div>
          </div>
        </div>

        <div className="sortFilter" style={{ width: "100%", margin: "0" }}>
          <SortFilter></SortFilter>
        </div>

        {/* <!-- Products Area --> */}
        <Cards search={props.search} cat={props.cat}></Cards>
      </div>
    </>
  );
}

export default Products;