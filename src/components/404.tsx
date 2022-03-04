import { Link } from "react-router-dom";
import notfound from "../files/404.svg";
export default function Notfound() {
    return(
        <div className="w-max h-max">
            <div className="flex w-max">
                <img src={notfound} alt="" />
            </div>
            <div className="flex flex-col w-max items-center gap-10">
                <p className="text-[#565872] font-semibold text-5xl">
                    OOPS! PAGE NOT FOUND
                </p>
                <Link to="/">
                <button className="rounded-xl px-6 py-3 bg-secondary w-max text-white text-medium">
                    BACK TO HOME
                </button>
                </Link>
            </div>
        </div>
    )
}