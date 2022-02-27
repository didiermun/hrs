import { Link } from 'react-router-dom'
import logo from '../files/logo.svg'
export default function Navbar(){
return(
<div className="px-4 body">
    <div className="w-full grid grid-cols-4 py-2 pt-4 px-3 mb-6">
        <Link to="/">
        <div className="col-span-1 flex cursor-pointer">
            <img className='h-8 w-8' src={logo} alt="" />
            <p className="font-bold text-xl  text-primary px-1 pt-1.5">HotReserve</p>
        </div>
        </Link>
        <div className="flex items-center col-span-2 ">
            <div className=" ml-8 w-full text-white flex">
                <Link to="/places">
                    <p className=" px-4 py-1 focus:outline-none border-b">Places to stay</p>
                </Link>
                <Link to="/experiences">
                    <p className=" px-4 py-1 focus:outline-none">Experiences</p>
                </Link>

                <Link to="/experiences">
                    <a className=" px-4 py-1 focus:outline-none">Online Experiences</a>
                </Link>
            </div>
        </div>

        <div className="col-span-1 flex justify-end gap-3">
            <h3 className=" item-center mt-3 text-white">Become a host</h3>
            <div className="cursor-pointer w-max flex rounded-full px-2 pb-1 py-3 bg-white border border-gray-300 item-center">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.75 5.75H19.25" stroke="#000" strokeWidth="1.5" strokeLinecap="round"
                        strokeLinejoin="round" />
                    <path d="M4.75 18.25H19.25" stroke="#000" strokeWidth="1.5" strokeLinecap="round"
                        strokeLinejoin="round" />
                    <path d="M4.75 12H19.25" stroke="#000" strokeWidth="1.5" strokeLinecap="round"
                        strokeLinejoin="round" />
                </svg>

                <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                        fill="#F3F4F6" />
                    <mask id="mask0_138_2227" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                        <circle cx="16" cy="16" r="16" fill="#FF616D" />
                    </mask>
                    <g mask="url(#mask0_138_2227)">
                        <path
                            d="M32 27.9918V32.0012H0V28.0065C1.86127 25.5191 4.27721 23.5003 7.05572 22.1106C9.83423 20.7209 12.8987 19.9986 16.0053 20.0012C22.544 20.0012 28.352 23.1398 32 27.9918ZM21.336 11.9998C21.336 13.4143 20.7741 14.7709 19.7739 15.7711C18.7737 16.7713 17.4172 17.3332 16.0027 17.3332C14.5882 17.3332 13.2316 16.7713 12.2314 15.7711C11.2312 14.7709 10.6693 13.4143 10.6693 11.9998C10.6693 10.5853 11.2312 9.22879 12.2314 8.2286C13.2316 7.22841 14.5882 6.6665 16.0027 6.6665C17.4172 6.6665 18.7737 7.22841 19.7739 8.2286C20.7741 9.22879 21.336 10.5853 21.336 11.9998Z"
                            fill="#D1D5DB" />
                    </g>
                </svg>

            </div>
        </div>
        <div className="rounded-3xl bg-white shadow-xl px-8 w-min  flex ml-56 mt-4">
            <div className="block border-r-2 border-gray-300 mt-2 text-sm">
                <a className=" px-4 py-1 focus:outline-none" href="pablo">Location</a>
                <input type="text" className="px-4 py-1 text-gray-800  focus:outline-none "
                    placeholder="Where are you going?" />
            </div>
            <div className="block border-r-2 border-gray-300 mt-2 text-sm">
                <a className=" px-4 py-1 focus:outline-none" href="pablo">Check in</a>
                <input type="date" className=" px-4 py-1 text-gray-800  focus:outline-none" placeholder="Add dates" />
            </div>
            <div className="block border-r-2 border-gray-300 mt-2 text-sm">
                <a className=" px-4 py-1 focus:outline-none" href="pablo">Check out</a>
                <input type="date" className=" px-4 py-1 text-gray-800  focus:outline-none" placeholder="Add dates" />
            </div>

            <div className="block  mt-2 text-sm">
                <a className=" px-4 py-1 focus:outline-none" href="pablo">Guests</a>
                <input type="text" className="px-4 py-1 text-gray-800  focus:outline-none " placeholder="Add guests" />
            </div>
            <div className="w-max mt-4">
                <svg width="32" height="32" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer">
                    <g filter="url(#filter0_d_138_1867)">
                        <path
                            d="M2 25C2 11.7452 12.7452 1 26 1C39.2548 1 50 11.7452 50 25C50 38.2548 39.2548 49 26 49C12.7452 49 2 38.2548 2 25Z"
                            fill="#DE3151" />
                        <path
                            d="M32.0417 31.0416L28.9167 27.9166M19.9583 24.1666C19.9583 21.2901 22.2902 18.9583 25.1667 18.9583C28.0432 18.9583 30.375 21.2901 30.375 24.1666C30.375 27.0431 28.0432 29.3749 25.1667 29.3749C22.2902 29.3749 19.9583 27.0431 19.9583 24.1666Z"
                            stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <filter id="filter0_d_138_1867" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="1" />
                            <feColorMatrix type="matrix"
                                values="0 0 0 0 0.121569 0 0 0 0 0.160784 0 0 0 0 0.215686 0 0 0 0.08 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_138_1867" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_138_1867"
                                result="shape" />
                        </filter>
                    </defs>
                </svg>

            </div>
        </div>

    </div>


</div>
)
}