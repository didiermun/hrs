import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from "./pages/404";
import HomePage from "./pages/HomePage";
import SingleHotel from "./pages/Hotels/SingleHotel";
import Search from "./pages/Search";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

export default function App() {
  

  return (
    <Router>
      <Routes>
        <Route  path="/"  element={<HomePage />} />
        <Route path="/search" element={<Search/>} />
        <Route path="hotel/:id" element={<SingleHotel/>}/>
        <Route path="*" element={<NotFound />} />
        <Route path="/auth/register" element={<Signup/>}/>
        <Route path="/auth/signin" element={<Signin/>}/>
        
      </Routes>
    </Router>
  );
}


