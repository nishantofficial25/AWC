import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./app.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Products from "./components/products";
import Sell from "./components/sell";
import Show from "./components/show";
import Cards from "./components/cards";
import Category from "./components/category";
import LoginForm from "./components/loginForm";
import Profile from "./components/profile.jsx";
import AccountDashboard from "./components/dashboard.jsx";
import Myproducts from "./components/myProducts.jsx";
import Footer from "./components/footer.jsx";
import Edit from "./components/edit.jsx";

function App() {
  const { id } = useParams();
  const [user, setUser] = useState(false);
  const [search, setsearch] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")).status);
    }
  }, []);

  useEffect(() => {
    console.log(search);
  }, [search]);

  const handleScroll = (e) => {
    console.log("scroll");
  };

  return (
    <>
      <BrowserRouter>
        {/* Always visible */}
        <Navbar setsearch={setsearch} />

        {/* If search has value → force show Products */}
        {search ? (
          <Products search={search} />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/products" element={<Products search={search} />} />

            <Route
              path="/myProducts"
              element={<Myproducts search={search} myProd={true} />}
            />

            <Route path="/sell" element={!user ? <LoginForm /> : <Sell />} />

            <Route path="/products/:id" element={<Show />} />

            <Route path="/edit-product/:id" element={<Edit />} />

            <Route
              path="/category/:id"
              element={<Products search={search} />}
            />

            <Route path="/account" element={<AccountDashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        )}
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
{
  /*  */
}
