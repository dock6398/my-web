import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/css/minireset.css"
import "./Project/Style.module.css"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./Project/Main"
import Sub from "./sub/Sub"



function App() {

  return (
      <BrowserRouter>
        <>
        <Header />
          <Routes>
            <Route path="/Main" element={<Main />} />
            <Route path="/sub" element={<Sub />} />
          </Routes>
        <Footer />
        </>
      </BrowserRouter>
  );
}

export default App;