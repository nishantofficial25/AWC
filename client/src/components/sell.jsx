import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/sell.css";

function Sell() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/userDetails");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const fetchedData = await response.json();
        updateFields(fetchedData.details[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateFields = (x) => {
    const arr = ["name", "mob", "location"];

    arr.map((item, index) => {
      setFormData((prevData) => ({
        ...prevData,
        [item]: x[item],
      }));
    });
  };
  
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    price: "",
    cat: "Misc",
    name: "",
    mob: "",
    location: "",
    email: JSON.parse(localStorage.getItem("user")).userDetails.email,
  });
  const [img, setImg] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg((prvfile) => [...prvfile, file]);
    }
  };

  const UploadData = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const formImg = new FormData();
    img.forEach((item) => {
      formImg.append("image", item);
    });

    for (let key in formData) {
      formImg.append(key, formData[key]);
    }
    const res = await axios.post("http://localhost:5000/upload", formImg, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    window.location.href = "http://localhost:5173/products";
  };

  return (
    <>
      <div>
        <h2 style={{ textAlign: "center", fontWeight: "bold", margin: "1rem" }}>
          POST YOUR PRODUCT
        </h2>
        <form
          className="form-control form-control-cont needs-validation"
          noValidate
          onSubmit={UploadData}
        >
          <h3 className="mt-3" style={{ fontWeight: "bold" }}>
            PRODUCT DETAILS
          </h3>
          {/* <!-- mt-3 mrgin 3 from top --> */}

          <input
            name="title"
            placeholder="Title*"
            type="text"
            className="form-control"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
          <br />
          <textarea
            name="desc"
            placeholder="Decription*"
            type="text"
            className="form-control"
            value={formData.desc}
            onChange={handleInputChange}
            required
          ></textarea>
          <br />
          <div style={{ display: "flex", gap: "1rem" }}>
            <input
              name="price"
              placeholder="Price*"
              type="number"
              className="form-control"
              value={formData.price}
              onChange={handleInputChange}
              required
            />

            <select
              name="cat"
              className="form-control form-select"
              required
              value={formData.cat}
              onChange={handleInputChange}
            >
              <option
                value="Misc"
                className="form-control"
                style={{ fontWeight: "200" }}
              >
                Category*
              </option>
              <option value="Furnitures" className="form-control">
                Furniture
              </option>
              <option value="Electronics" className="form-control">
                Electronics
              </option>
              <option value="Households" className="form-control">
                Households
              </option>
              <option value="Vehicles" className="form-control">
                Vehicle
              </option>
              <option value="Mobiles" className="form-control">
                Mobiles & Tablets
              </option>
              <option value="Misc" className="form-control">
                MISCELLANEOUS
              </option>
            </select>
          </div>
          <br />

          <div className="form-control">
            <div className="mb-3 mt-3" style={{ display: "flex" }}>
              <h4>UPLOAD UP TO 5 PHOTOS</h4>

              <h4
                id="num"
                className="float-left"
                style={{ marginLeft: "auto", marginRight: "0" }}
              >
                0/5
              </h4>

              <input
                type="file"
                accept="image/*"
                id="img1"
                required
                style={{ display: "none" }}
                onChange={handleImage}
              />
            </div>

            <div className="imageHolder" id="imageHolder">
              {img.map((item, index) => (
                <div className="hld form-control" id="hld1" key={index}>
                  <img
                    className="hld-img"
                    src={URL.createObjectURL(item)}
                    alt="Some image"
                    width={100}
                    height={100}
                    key={index}
                  />
                </div>
              ))}
              <div className="hld" id="hld1">
                <label htmlFor="img1" className="labels form-control">
                  <i className="fa-solid fa-upload"></i> Add
                </label>
              </div>
            </div>
          </div>

          <hr />

          <h3 className="mt-3" style={{ fontWeight: "bold" }}>
            OWNER'S DETAILS
          </h3>

          <input
            name="name"
            placeholder="Enter your Name"
            type="text"
            className="form-control"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <br />
          <div style={{ display: "flex", gap: "1rem" }}>
            <input
              name="mob"
              placeholder="Mob number"
              type="number"
              className="form-control"
              value={formData.mob}
              onChange={handleInputChange}
              required
              disabled
            />
            <input
              name="location"
              placeholder="Location"
              type="text"
              className="form-control"
              value={formData.location}
              onChange={handleInputChange}
              required
            />
          </div>
          <br />
          <div className="col-12 mt-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="form-check-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-success add-btn">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
}

export default Sell;
