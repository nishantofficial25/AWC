import { useState, useEffect } from "react";
import "../styles/show.css";
import { useParams } from "react-router-dom";

function Show() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [images, setImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const arr = [
      "vehicles",
      "electronics",
      "households",
      "furnitures",
      "mobiles",
    ];

    if (arr.includes(id)) {
      window.location.href = "http://localhost:5173/products";
    }
    else{
      const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/products/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const fetchedData = await response.json();
        setData(fetchedData.product);
        setImage(fetchedData.images);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    }
  }, []);


  const change = (index) => {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const mainImage = document.getElementById("mainImageSvg");
    thumbnails.forEach((t) => t.setAttribute("className", ""));
    document
      .getElementById(index)
      .setAttribute("className", "thumbnail active");
    mainImage.style.opacity = "0";
    setTimeout(() => {
      mainImage.setAttribute(
        "src",
        `http://localhost:5000/uploads/${images[index].path}`
      );
      mainImage.style.opacity = "1";
    }, 200);
  };

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {/*
        {data[0].title}
        {data[0].description}
        &#8377;{data[0].price.toLocaleString("en-IN")}
        {data[0].owner.Username}
        {data[0].owner.mob}
        {data[0].owner.location}
      */}

      {/* <!-- Main Container --> */}
      <div className="container">
        <div className="product-container">
          {/* <!-- Image Gallery --> */}
          <div className="image-gallery">
            <div className="main-image" id="mainImage">
              <img
                src={`http://localhost:5000/uploads/${images[0].path}`}
                alt=""
                id="mainImageSvg"
              />
            </div>
            <div className="thumbnail-list" style={{ textAlign: "center" }}>
              {images.map((item, index) => {
                return (
                  <div
                    className="thumbnail"
                    onClick={() => change(index)}
                    key={index}
                    style={{ margin: "0 auto" }}
                    id={`${index}`}
                  >
                    <img
                      src={`http://localhost:5000/uploads/${item.path}`}
                      alt="Someimage"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* <!-- Product Info --> */}
          <div className="product-info">
            <h1 className="product-title">{data[0].title}</h1>

            <div className="bought-info">{data[0].description}</div>

            <div className="price-section">
              <span className="price">
                <span className="currency"></span>₹
                {data[0].price.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Show;
