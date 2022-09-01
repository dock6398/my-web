import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./assets/css/minireset.css"
import "./Project/Style.module.css"
import style from "./Project/Style.module.css"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Sub from "./components/Sub"



function App() {

  return (
      <HashRouter>
        <div style={{
          textAlign : "right",
          marginBottom : 10
        }}>활성화된 메뉴 버튼을 눌러보세요</div>
        <div className={style.container}>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sub" element={<Sub />} />
        </Routes>
        <Footer />
        </div>
      </HashRouter>
  );
}

export default App;