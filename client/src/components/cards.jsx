import { useState, useEffect } from "react";
import "../styles/product.css";
import { useParams } from "react-router-dom";

function Cards(props) {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/products");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const fetchedData = await response.json();
      var filtered_data = [];
      if (id) {
        filtered_data = fetchedData.details.filter(
          (datas) => datas.Category.toLowerCase() == id
        );
      } 
      else if (props.myprod) {
        filtered_data = fetchedData.details.filter(
          (datas) =>
            datas.emails ==
            JSON.parse(localStorage.getItem("user")).userDetails.email
        );
      } else {
        filtered_data = fetchedData.details.filter((datas) =>
          datas.title.toLowerCase().includes(props.search)
        );
      }

      if (filtered_data.length == 0) {
        setMsg("No product Found! Try something else.");
      } else {
        setMsg("");
        setData(filtered_data);
        setImage(fetchedData.images);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    setMsg("");
    try {
      if (props.search == "") {
        fetchData();
      } else {
        const filtered_data = data.filter((datas) =>
          datas.title.toLowerCase().includes(props.search)
        );
        if (filtered_data.length == 0) {
          setMsg("No product Found! Try something else.");
        } else {
          setData(filtered_data);
        }
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [props.search]);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {/* <!-- Main Content --> */}
      <div className="products-area">
        {msg == ""
          ? data.map((item, index) => {
              const firstImg = image.filter(
                (images) => images.productId == item._id
              )[0];
              return (
                <a
                  href={`/products/${item._id}`}
                  style={{ backgroundColor: "white" }}
                  key={index}
                >
                  <div className="product-card">
                    {/* <span className="best-seller">Best seller</span> */}
                    <div className="product-image">
                      <img
                        src={`http://localhost:5000/uploads/${firstImg.path}`}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <div className="product-details">
                      {/* <div className="sponsored-tag">Sponsored</div> */}
                      <h3 className="product-title">
                        {item.title}
                      </h3>
                      {/* <div className="rating">
                        <span className="stars">★★★★☆</span>
                        <span className="rating-count">6,971</span>
                      </div> */}
                      {/* <div className="bought-info">
                        5K+ bought in past month
                      </div> */}
                      {/* <div className="festival-tag">Great Indian Festival</div> */}
                      <div className="price-section">
                        <span className="currency">₹</span>
                        <span className="price">{item.price}</span>
                        {/* <span className="mrp">M.R.P: ₹59,900</span>
                        <span className="discount">(17% off)</span> */}
                      </div>
                      <div className="prime-delivery">
                        <span className="delivery-info">
                          2 Months Old
                        </span>
                      </div>
                     {/*  <button className="add-to-cart">Add to Watchlist</button> */}
                    </div>
                  </div>
                </a>
              );
            })
          : msg}
      </div>
    </>
  );
}

export default Cards;
