import { useState, useEffect } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import "./app.css";
import RestaurantsList from "./restaurant/restaurants.jsx";
import HindanVegMenu from "./restaurant/one.jsx";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<HindanVegMenu></HindanVegMenu>} />
          <Route
            path="/restaurants"
            element={<RestaurantsList></RestaurantsList>}
          />
          <Route
            path="/restaurants/:id"
            element={<HindanVegMenu></HindanVegMenu>}
          />
        </Routes>
    </>
  );
}

export default App;