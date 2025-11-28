import { useState, useEffect } from "react";
import "../styles/show.css";
import { Spinner, SkeletonCard } from "./loader";
import "../styles/loader.css";
import { useParams } from "react-router-dom";
import Overview from "./overview";

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
      window.location.href = `${import.meta.env.VITE_SERVER_URL}/products`;
    } else {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_SERVER_URL}/products/${id}`
          );
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
        `data:${images[index].type};base64,${images[index].data}`
      );
      mainImage.style.opacity = "1";
    }, 200);
  };

  if (loading)
    return (
      <div className="app-container">
        <SkeletonCard />
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>

      {/* <!-- Main Container --> */}
      <div className="container">
        <div className="product-container">
          {/* <!-- Image Gallery --> */}
          <div className="image-gallery">
            <div className="main-image" id="mainImage">
              <img
                src={`data:${images[0].type};base64,${images[0].data}`}
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
                      src={`data:${item.type};base64,${item.data}`}
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
            <div className="price-section">
              <span className="price">
                <span className="currency"></span>₹
                {data[0].price.toLocaleString("en-IN")}
              </span>
            </div>
            <div className="bought-info">{data[0].description}</div>

            <Overview data={data}></Overview>
          </div>
        </div>
      </div>
    </>
  );
}

export default Show;
