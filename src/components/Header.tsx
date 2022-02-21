import Filter from "./Filter";

export default function Header(){
    return(
        <div className="px-4 bg-white">
            <div className="w-full bg-white grid grid-cols-4 py-2 pt-4 px-3 mb-6">
                <div className="col-span-1 flex cursor-pointer">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.4975 4.91031L14.4634 5.16913V5.16913L13.4975 4.91031ZM9.88161 18.4049L10.8475 18.6637V18.6637L9.88161 18.4049ZM3.12013 16.5931L4.08605 16.8519L3.12013 16.5931ZM6.73598 3.09858L7.70191 3.35739V3.35739L6.73598 3.09858ZM7.38438 2.72423L7.12556 3.69015V3.69015L7.38438 2.72423ZM13.1231 4.26191L13.3819 3.29599L13.3819 3.29599L13.1231 4.26191ZM12.5315 4.65149L8.91568 18.146L10.8475 18.6637L14.4634 5.16913L12.5315 4.65149ZM4.08605 16.8519L7.70191 3.35739L5.77006 2.83976L2.1542 16.3343L4.08605 16.8519ZM7.12556 3.69015L12.8643 5.22784L13.3819 3.29599L7.6432 1.7583L7.12556 3.69015ZM7.70191 3.35739C7.63464 3.60844 7.3766 3.75742 7.12556 3.69015L7.6432 1.7583C6.82731 1.53968 5.98867 2.02387 5.77006 2.83976L7.70191 3.35739ZM5.85382 19.9138C4.52016 19.5565 3.7287 18.1856 4.08605 16.8519L2.1542 16.3343C1.51096 18.7349 2.93559 21.2024 5.33618 21.8457L5.85382 19.9138ZM8.91568 18.146C8.55833 19.4797 7.18749 20.2712 5.85382 19.9138L5.33618 21.8457C7.73678 22.4889 10.2043 21.0643 10.8475 18.6637L8.91568 18.146ZM14.4634 5.16913C14.682 4.35324 14.1978 3.51461 13.3819 3.29599L12.8643 5.22784C12.6132 5.16057 12.4643 4.90253 12.5315 4.65149L14.4634 5.16913Z" fill="red"/>
                        <path d="M20.4706 20.9999V21.9999V20.9999ZM6.5 19.9999C5.94772 19.9999 5.5 20.4476 5.5 20.9999C5.5 21.5522 5.94772 21.9999 6.5 21.9999L6.5 19.9999ZM22 14.5293C22 13.977 21.5523 13.5293 21 13.5293C20.4477 13.5293 20 13.977 20 14.5293H22ZM20.4706 19.9999L6.5 19.9999L6.5 21.9999L20.4706 21.9999V19.9999ZM20 14.5293V20.4705H22V14.5293H20ZM20.4706 21.9999C21.3153 21.9999 22 21.3151 22 20.4705H20C20 20.2106 20.2107 19.9999 20.4706 19.9999V21.9999Z" fill="red"/>
                        <path d="M6.5 17.6H6.502V17.602H6.5V17.6Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20.6416 14.7671L20.219 13.8607L20.6416 14.7671ZM7.55736 19.765C7.05682 19.9984 6.84027 20.5934 7.07367 21.0939C7.30708 21.5944 7.90206 21.811 8.4026 21.5776L7.55736 19.765ZM18.3869 8.67897L17.4805 9.10159V9.10159L18.3869 8.67897ZM20.8977 14.0635L21.804 13.6409V13.6409L20.8977 14.0635ZM17.6833 8.4229L17.2607 7.51659V7.51659L17.6833 8.4229ZM11.6073 10.1528C11.1068 10.3862 10.8902 10.9812 11.1236 11.4817C11.3571 11.9823 11.952 12.1988 12.4526 11.9654L11.6073 10.1528ZM20.219 13.8607L7.55736 19.765L8.4026 21.5776L21.0643 15.6734L20.219 13.8607ZM17.4805 9.10159L19.9914 14.4861L21.804 13.6409L19.2932 8.25635L17.4805 9.10159ZM18.1059 9.3292C17.8704 9.43904 17.5904 9.33713 17.4805 9.10159L19.2932 8.25635C18.9362 7.49082 18.0262 7.15962 17.2607 7.51659L18.1059 9.3292ZM21.0643 15.6734C21.8298 15.3164 22.161 14.4064 21.804 13.6409L19.9914 14.4861C19.8816 14.2506 19.9835 13.9706 20.219 13.8607L21.0643 15.6734ZM12.4526 11.9654L18.1059 9.3292L17.2607 7.51659L11.6073 10.1528L12.4526 11.9654Z" fill="red"/>
                    </svg>
                    <p className="font-bold text-xl  text-secondary px-1">HotReserve</p>
                </div>
                <div className="col-span-2">
                    <div className="rounded-3xl shadow-xl px-3 w-min py-2 flex">
                            <input type="text" className="px-4 py-1 text-gray-800  focus:outline-none border-r-2 border-gray-300"
                                placeholder="Place"/>
                            <input type="date" className=" px-4 py-1 text-gray-800  focus:outline-none border-r-2 border-gray-300"
                                placeholder="Date"/>
                            <input type="number" className="px-4 py-1 text-gray-800  focus:outline-none"
                                placeholder="Number of guests"/>
                            <div className="w-max">
                                <svg width="32" height="32" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
                                    <g filter="url(#filter0_d_138_1867)">
                                        <path d="M2 25C2 11.7452 12.7452 1 26 1C39.2548 1 50 11.7452 50 25C50 38.2548 39.2548 49 26 49C12.7452 49 2 38.2548 2 25Z" fill="#DE3151"/>
                                        <path d="M32.0417 31.0416L28.9167 27.9166M19.9583 24.1666C19.9583 21.2901 22.2902 18.9583 25.1667 18.9583C28.0432 18.9583 30.375 21.2901 30.375 24.1666C30.375 27.0431 28.0432 29.3749 25.1667 29.3749C22.2902 29.3749 19.9583 27.0431 19.9583 24.1666Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_138_1867" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset dy="1"/>
                                            <feGaussianBlur stdDeviation="1"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.121569 0 0 0 0 0.160784 0 0 0 0 0.215686 0 0 0 0.08 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_138_1867"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_138_1867" result="shape"/>
                                        </filter>
                                    </defs>
                                </svg>

                            </div>
                    </div>
                </div>
                <div className="col-span-1 flex justify-end">
                    <div className="cursor-pointer w-max flex rounded-full px-2 pb-1 py-3 border border-gray-300 item-center">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.75 5.75H19.25" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.75 18.25H19.25" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.75 12H19.25" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="#F3F4F6"/>
                    <mask id="mask0_138_2227"  maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                    <circle cx="16" cy="16" r="16" fill="#F3F4F6"/>
                    </mask>
                    <g mask="url(#mask0_138_2227)">
                    <path d="M32 27.9918V32.0012H0V28.0065C1.86127 25.5191 4.27721 23.5003 7.05572 22.1106C9.83423 20.7209 12.8987 19.9986 16.0053 20.0012C22.544 20.0012 28.352 23.1398 32 27.9918ZM21.336 11.9998C21.336 13.4143 20.7741 14.7709 19.7739 15.7711C18.7737 16.7713 17.4172 17.3332 16.0027 17.3332C14.5882 17.3332 13.2316 16.7713 12.2314 15.7711C11.2312 14.7709 10.6693 13.4143 10.6693 11.9998C10.6693 10.5853 11.2312 9.22879 12.2314 8.2286C13.2316 7.22841 14.5882 6.6665 16.0027 6.6665C17.4172 6.6665 18.7737 7.22841 19.7739 8.2286C20.7741 9.22879 21.336 10.5853 21.336 11.9998Z" fill="#D1D5DB"/>
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