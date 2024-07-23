import React from "react";
import {Routes, Route} from 'react-router-dom';
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Aksioma from "./pages/Aksioma/Aksioma";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/aksioma" element={<Aksioma/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
