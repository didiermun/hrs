import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";




const  HomePage = () => {
    const [count, setCount] = useState(0);
    return (
    <div className="bg-black">
        <Navbar/>
        <div className="bg-white px-6 md:px-20 min-h-screen">
        
        </div>
        <Footer/>
    </div>
   
    )
}
export default HomePage