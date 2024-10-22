import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FavoritesPages from "./pages/FavoritesPages";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-green-200 min-h-screen">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<FavoritesPages />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
