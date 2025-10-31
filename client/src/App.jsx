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
import { LayoutDashboard } from "lucide-react";
import AccountDashboard from "./components/dashboard.jsx";
import Myproducts from "./components/myProducts.jsx";

function App() {
  const { id } = useParams();
  const [user, setUser] = useState(false);
  const [search, setsearch] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")).status);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              search == "" ? (
                <>
                  <Navbar setsearch={setsearch} />
                  <Home />
                  <div className="main-content">
                    <Cards search={search} />
                  </div>
                </>
              ) : (
                <>
                  <Navbar setsearch={setsearch} />
                  <Category></Category>
                  <Products search={search} />
                </>
              )
            }
          />
          <Route
            path="/products"
            element={
              <>
                <Navbar setsearch={setsearch} />
                <Products search={search} />
              </>
            }
          />
          <Route
            path="/myProducts"
            element={
              <>
                <Navbar setsearch={setsearch} />
                <Myproducts search={search} myProd={true}/>
              </>
            }
          />
          <Route
            path="/sell"
            element={
              <>
                {!user ? (
                  <LoginForm />
                ) : (
                  <>
                    <Navbar setsearch={setsearch} sell={true} />
                    <Sell />
                  </>
                )}
              </>
            }
          />
          <Route
            path="/products/:id"
            element={
              <>
                {id == "electronics" ? (
                  <div>hi</div>
                ) : (
                  <>
                    <Navbar setsearch={setsearch} />
                    <Show />
                  </>
                )}
              </>
            }
          />
          <Route
            path="/category/:id"
            element={
              <>
                <Navbar setsearch={setsearch} />
                <Products cat={id} search={search} />
              </>
            }
          />
          <Route path="/account" element={<AccountDashboard />}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
{/*  */}