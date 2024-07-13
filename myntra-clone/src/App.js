import React from "react";
import "./App.css";
import "./Customization/Styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Customization/Home.jsx";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Ioa from "./Components/Ioa";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/posts"
            element={
              <>
                <Header />
                <Ioa />
              </>
            }
          />
          <Route
            path="/customization"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
