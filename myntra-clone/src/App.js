import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Feed from "./Components/Feed";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
         <Route path="/checkout" element={
            <>
              <Header />
              <Checkout />
            </>
            } />

          {/* <Route path="/login" element={<h1>LOGIN PAGE!!</h1>} /> */}
          
          <Route path="/" element={
            <>
              <Header />
              <Home />
            </>
          } />
        
            <Route path="/posts" element={
              <>
                <Header />
                <Feed />
              </>
            } />
        </Routes> 
      </div>
    </Router>
  );
}
export default App;
