import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from "./pages/404";
import HomePage from "./pages/HomePage";

export default function App() {
  

  return (

 
    <Routes> 
        
          <Route path="*" element={<HomePage/>}/>
        </Routes>
  );
}


