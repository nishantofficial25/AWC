import { useState, useEffect } from "react";

// Simulated API call - Replace this with your actual backend call
const fetchDataFromBackend = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  /*Actual backend call would look like this:*/
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/products`);
  const b = await response.json();
  return b;
  /* return mockDataFromBackend; */
};

export default function NewApp() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filteredImg, setFilteredImg] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [msg, setmsg] = useState("");

  // Filter states
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [ageFilter, setAgeFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch data only once on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchDataFromBackend();
        setAllData(data.details);
        setFilteredData(data.details);
        setFilteredImg(data.images);
        setError(null);
      } catch (err) {
        setError("Failed to fetch data from backend");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []); // Empty dependency array ensures this runs only once

  // Apply filters whenever filter criteria change
  useEffect(() => {
    let result = [...allData];

    // Department filter
    if (departmentFilter !== "all") {
      result = result.filter((item) => item.department === departmentFilter);
    }

    // Status filter
    if (statusFilter !== "all") {
      result = result.filter((item) => item.status === statusFilter);
    }

    // Age filter
    if (ageFilter !== "all") {
      if (ageFilter === "young") {
        result = result.filter((item) => item.age < 30);
      } else if (ageFilter === "middle") {
        result = result.filter((item) => item.age >= 30 && item.age < 40);
      } else if (ageFilter === "senior") {
        result = result.filter((item) => item.age >= 40);
      }
    }

    // Search filter
    if (searchTerm) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(result);
  }, [allData, departmentFilter, statusFilter, ageFilter, searchTerm]);

  const resetFilters = () => {
    setDepartmentFilter("all");
    setStatusFilter("all");
    setAgeFilter("all");
    setSearchTerm("");
  };

  /* const uniqueDepartments = [
    ...new Set(allData.map((item) => item.department)),
  ]; */

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading data from backend...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <h2 className="text-red-800 font-semibold text-lg">Error</h2>
          <p className="text-red-600 mt-2">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="products-area">
      {msg == ""
        ? filteredData.map((item, index) => {
            const firstImg = filteredImg.filter(
              (images) => images.productID == item._id
            );
            return (
              <a
                href={`/products/${item._id}`}
                style={{ backgroundColor: "white" }}
                key={index}
              >
                <div className="product-card">
                  {/* <span className="best-seller">Best seller</span> */}
                  {/* `${import.meta.env.VITE_SERVER_URL}/uploads/${firstImg.path}` */}
                  <div className="product-image">
                    <img
                      src={`data:${firstImg[0].type};base64,${firstImg[0].data}`}
                      alt=""
                      style={{
                        width: "100%",
                        maxHeight: "18rem",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div className="product-details">
                    {/* <div className="sponsored-tag">Sponsored</div> */}
                    <h3 className="product-title">{item.title}</h3>
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
                      <span className="delivery-info">2 Months Old</span>
                    </div>
                    {/*  <button className="add-to-cart">Add to Watchlist</button> */}
                  </div>
                </div>
              </a>
            );
          })
        : msg}
    </div>
  );
}
