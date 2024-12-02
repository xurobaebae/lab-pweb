//blok 1
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataMahasiswaPage from "./pages/DataMahasiswaPage";
import React from "react";
import TambahDataPage from "./pages/TambahDataPage";
import "./styles.css";

//blok2
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/data_mhs" element={<DataMahasiswaPage />} />
        <Route path="/tambah_data" element={<TambahDataPage />} />
      </Routes>
    </BrowserRouter>
  );
}

//blok3
export default App;
