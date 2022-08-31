import React, {Component} from "react";

import { BrowserRouter, Route, Link, Routes, Switch } from "react-router-dom";

import Main from "./components/Project/Main"
import Sub from "./components/sub/Sub"

function App() {

  return (
    <div className="App">
      <h1 style={{
          fontSize: 32,
          fontWeight: 800,
          marginTop: 100,
          border: 0,
      }}><strong style={{
        color : "#1ace5e",
        fontWeight : 800,
      }}>NAVER</strong> CONNECT</h1>
      <BrowserRouter>
        <ul style={{
            height: 100,
            display: "flex",
            justifyContent: "space-around",
            marginBottom: 300,
        }}>
          <li style={{
            height: 100,
          }}><Link to="/" style={{
            padding: "15px 50px",
            marginTop: 100,
            position: "unset",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: 30,
          }}>Main</Link></li>
          <li style={{
            height: 100,
          }}><Link to="/sub" style={{
            padding: "15px 50px",
            marginTop: 100,
            position: "unset",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: 30,
          }}>sub</Link></li>
        </ul>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sub" element={<Sub />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
