import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Pets from "./pages/Pets";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/howitworks" element={<HowItWorks />}></Route>
        <Route path="/pets" element={<Pets />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
