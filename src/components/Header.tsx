import Filter from "./Filter";
import logo from "../files/logo.svg"
import { Link } from "react-router-dom";

export default function Header(){
return(
<div className="px-4 bg-white">
    <div className="w-full bg-white grid grid-cols-4  py-2 pt-4 px-3 mb-6 gap-4 lg:gap-0">
        <Link to="/">
        <div className="col-span-4 md:col-span-2 lg:col-span-1 flex cursor-pointer">
            <img src={logo} className='h-8 w-8' alt="" />
            <p className="font-bold text-xl pt-1.5 text-primary px-1">HotReserve</p>
        </div>
        </Link>
        <div className="col-span-4 lg:col-span-2">
            <div className="rounded-3xl shadow-xl px-3 w-min py-2 pr-10">
                <div className="md:flex">
                    <input type="text"
                        className="px-4 py-1 text-gray-800  focus:outline-none md:border-r-2 border-gray-300"
                        placeholder="Place" />
                    <input type="date"
                        className=" px-4 py-1 text-gray-800  focus:outline-none md:border-r-2 border-gray-300"
                        placeholder="Date" />
                    <input type="number" className="px-4 py-1 text-gray-800  focus:outline-none"
                        placeholder="Number of guests" />
                </div>
                <div className="relative">
                    <button className="absolute bg-secondary px-2 py-2 rounded-full cursor-pointer -top-8 -mx-6 right-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15 15L21 21" stroke="white" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>

                    </button>

                </div>
            </div>
        </div>
        <div className="col-span-4 md:col-span-2 lg:col-span-1 flex justify-end">
            <div className="cursor-pointer w-max flex rounded-full px-2 pb-1 py-3 border border-gray-300 item-center">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.75 5.75H19.25" stroke="#111827" strokeWidth="1.5" strokeLinecap="round"
                        strokeLinejoin="round" />
                    <path d="M4.75 18.25H19.25" stroke="#111827" strokeWidth="1.5" strokeLinecap="round"
                        strokeLinejoin="round" />
                    <path d="M4.75 12H19.25" stroke="#111827" strokeWidth="1.5" strokeLinecap="round"
                        strokeLinejoin="round" />
                </svg>

                <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                        fill="#F3F4F6" />
                    <mask id="mask0_138_2227" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                        <circle cx="16" cy="16" r="16" fill="#F3F4F6" />
                    </mask>
                    <g mask="url(#mask0_138_2227)">
                        <path
                            d="M32 27.9918V32.0012H0V28.0065C1.86127 25.5191 4.27721 23.5003 7.05572 22.1106C9.83423 20.7209 12.8987 19.9986 16.0053 20.0012C22.544 20.0012 28.352 23.1398 32 27.9918ZM21.336 11.9998C21.336 13.4143 20.7741 14.7709 19.7739 15.7711C18.7737 16.7713 17.4172 17.3332 16.0027 17.3332C14.5882 17.3332 13.2316 16.7713 12.2314 15.7711C11.2312 14.7709 10.6693 13.4143 10.6693 11.9998C10.6693 10.5853 11.2312 9.22879 12.2314 8.2286C13.2316 7.22841 14.5882 6.6665 16.0027 6.6665C17.4172 6.6665 18.7737 7.22841 19.7739 8.2286C20.7741 9.22879 21.336 10.5853 21.336 11.9998Z"
                            fill="#D1D5DB" />
                    </g>
                </svg>

            </div>
        </div>
    </div>
    <div className="flex px-16 gap-3">
        <Filter></Filter>
        <Filter></Filter>
        <Filter></Filter>
        <Filter></Filter>
        <Filter></Filter>
        <Filter></Filter>
        <Filter></Filter>
        <Filter></Filter>
    </div>
</div>
)
}