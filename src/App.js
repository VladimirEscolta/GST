import React from "react";
import {Routes, Route} from 'react-router-dom';
import Main from "./pages/Main/Main";
import About from "./pages/About/About";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
