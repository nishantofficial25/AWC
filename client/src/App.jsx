import { useState, useEffect } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import "./app.css";
import RestaurantsList from "./restaurant/restaurants.jsx";
import HindanVegMenu from "./restaurant/one.jsx";
import VeerJiMenu from "./restaurant/veerji.jsx";
import Admin from "./restaurant/admin.jsx";
import UploadMenu from "./uploadmenu.jsx";

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
        <Route path="/veerji" element={<VeerJiMenu></VeerJiMenu>} />
        <Route path="/admin" element={<Admin></Admin>} />
        <Route path="/uploadmenu" element={<UploadMenu></UploadMenu>} />
      </Routes>
    </>
  );
}

export default App;