import { useState } from "react";
import Button from "../components/Atom/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";




const  HomePage = () => {
    const [count, setCount] = useState(0);
    return (
    <div className="bg-dark">
        <Navbar/>
        <div className="bg-white px-6 md:px-20 min-h-screen flex flex-col items-center mx-auto justify-center">
            <p>Count is {count}</p>
            <Button className="w-80" onClick={()=>{setCount(count+4)}}>Update count</Button>
        </div>
        <Footer/>
    </div>
   
    )
}
export default HomePage