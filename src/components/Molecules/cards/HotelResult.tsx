import toast from "react-hot-toast"
import { Link } from "react-router-dom"
import like from "../../../files/like.svg"
import star from "../../../files/star.svg"
export default function HotelResult(){
    return(
        <div className="w-full bg-white border-b border-gray-200 py-5 pr-2 flex justify-between cursor-pointer hover:bg-slate-50 px-5 transition-all">
            <div className="w-5/12">
                <img className="rounded-lg w-full h-full object-fill" src="https://www.sentosa.com.sg/-/media/sentosa/features/gallery/places-to-stay/village-hotel/vhsgallery2.jpg?revision=7818d99a-f009-4b2c-a53c-4c497fe22742" alt="" />
            </div>
            <div className="w-6/12 flex flex-col gap-3">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2 w-max">
                        <span className="text-gray-500">Entire home in Nairobi</span>
                        <Link to="/hotel/34">
                        <p className="font-semibold text-dark">Nairobi Prime Hotel</p>
                        </Link>
                    </div>
                    <div className="w-max" onClick={()=>{toast.success("Hotel starred👍")}}>
                        <img src={like} alt="" />
                    </div>
                </div>
                <div className="w-1/6 border-b-2">
                </div>
                <div>
                    <p className="text-gray-400">4-6 guests. Entire home . 5 beds . 3 bath rooms . Wifi . Kitchen . Free Parking</p>
                </div>
                <div className="w-1/6 border-b-2">
                </div>
                <div className="flex justify-between text-dark">
                    <div className="flex">
                        <img src={star} alt="" />
                        <span className="pt-0.5 text-lg">5.0</span>
                        <span className="pt-0.5 text-lg">(319 reviews)</span>
                    </div>
                    <div className="flex pt-1 text-dark">
                        <span className="font-semibold ">$340</span> <span>/night</span>
                    </div>
                </div>
            </div>
        </div>
    )
}