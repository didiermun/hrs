import { useNavigate } from "react-router-dom";
import Button from "../components/Atom/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";




const  HomePage = () => {
    const navigator = useNavigate();
    return (
    <div className="bg-dark">
        <Navbar/>
        <div className="bg-white px-6 md:px-20 min-h-screen flex flex-col items-center mx-auto justify-center">
            <p>Here we go!</p>
            <Button className="w-80" onClick={()=>{navigator('/auth/signin')}}>Signin</Button>
        </div>
        <Footer/>
    </div>
   
    )
}
export default HomePage