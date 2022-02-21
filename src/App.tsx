import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from "./pages/404";
import HomePage from "./pages/HomePage";
import Search from "./pages/Search";

export default function App() {
  

  return (
    <Router>
      <Routes>
        <Route  path="/"  element={<HomePage />} />
        <Route path="/search" element={<Search/>} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </Router>
  );
}


