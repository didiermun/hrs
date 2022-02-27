import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";




const  HomePage = () => {
    const [count, setCount] = useState(0);
    return (
    <div className="bg-black">
        <Navbar/>
        <div className="bg-white px-6 md:px-20 min-h-screen flex flex-col items-center mx-auto justify-center">
            <p>Count is {count}</p>
            <button className="rounded-lg  bg-secondary py-2 px-4 text-white" onClick={()=>{setCount(count+1)}}>Update count</button>
        
        </div>
        <Footer/>
    </div>
   
    )
}
export default HomePage