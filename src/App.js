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
          <div style={{
            paddingTop : 500
          }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/sub" element={<Sub />} />
          </Routes>
          </div>
        <Footer />
        </>
      </BrowserRouter>
  );
}

export default App;
