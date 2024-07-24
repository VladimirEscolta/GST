import React from "react";
import {Routes, Route} from 'react-router-dom';
import Main from "./pages/Main";
import About from "./pages/About";
import Aksioma from "./pages/Aksioma";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AksiomaRepair from "./pages/AksiomaRepair";
import AksiomaEstate from "./pages/AksiomaEstate";
import AksiomaService from "./pages/AksiomaService";
import AksiomaOilgas from "./pages/AksiomaOilgas";
import AksiomaElectric from "./pages/AksiomaElectric";

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/aksioma" element={<Aksioma/>}/>
        <Route path="/aksioma/repair" element={<AksiomaRepair/>}/>
        <Route path="/aksioma/estate" element={<AksiomaEstate/>}/>
        <Route path="/aksioma/service" element={<AksiomaService/>}/>
        <Route path="/aksioma/oilgas" element={<AksiomaOilgas/>}/>
        <Route path="/aksioma/electric" element={<AksiomaElectric/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
