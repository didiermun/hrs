import { useState } from "react";
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";




const  HomePage = () => {
    const [count, setCount] = useState(0);
    return (
    <div className="bg-black">
        <Navbar/>
        <div className="bg-white px-6 md:px-20">
        <Reviews/>
        </div>
    </div>
   
    )
}
export default HomePage