import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FavoritesPages from "./pages/FavoritesPages";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <div className="bg-green-200 min-h-screen">
      <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<FavoritesPages />}></Route>
        </Routes>
      </BrowserRouter>
      </Provider>
      
    </div>
  );
}

export default App;
