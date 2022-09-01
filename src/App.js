import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./assets/css/minireset.css"
import "./Project/Style.module.css"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Sub from "./components/Sub"



function App() {

  return (
      <HashRouter>
        <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sub" element={<Sub />} />
        </Routes>
        <Footer />
        </>
      </HashRouter>
  );
}

export default App;