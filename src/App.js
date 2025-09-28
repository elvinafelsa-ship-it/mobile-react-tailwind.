import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Produk from "./pages/Produk";
import Profil from "./pages/Profil";
import UploadFile from "./pages/UploadFile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/upload" element={<UploadFile />} />
        </Routes>
      </div>
      <Navbar />
    </div>
  );
}

export default App;