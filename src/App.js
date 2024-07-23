import React from "react";
import {Routes, Route} from 'react-router-dom';
import Main from "./pages/Main";
import About from "./pages/About";
import Aksioma from "./pages/Aksioma";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AksiomaRepair from "./pages/AksiomaRepair";

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/aksioma" element={<Aksioma/>}/>
        <Route path="/aksioma/repair" element={<AksiomaRepair/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
