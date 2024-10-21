import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FavoritesPages from "./pages/FavoritesPages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<FavoritesPages />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
