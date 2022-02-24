import like from "../../../files/like.svg"
import star from "../../../files/star.svg"
export default function HotelResult(){
    return(
        <div className="w-full bg-white border-b-2 py-5 pr-2 flex justify-between cursor-pointer hover:bg-slate-50 rounded px-5 transition-all">
            <div className="w-5/12">
                <img className="rounded-lg w-full h-full object-fill" src="https://www.sentosa.com.sg/-/media/sentosa/features/gallery/places-to-stay/village-hotel/vhsgallery2.jpg?revision=7818d99a-f009-4b2c-a53c-4c497fe22742" alt="" />
            </div>
            <div className="w-6/12 flex flex-col gap-3">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2 w-max">
                        <span className="text-gray-300">Entire home in Nairobi</span>
                        <p className="font-semibold">Nairobi Prime Hotel</p>
                    </div>
                    <div className="w-max">
                        <img src={like} alt="" />
                    </div>
                </div>
                <div className="w-1/6 border-b-2">
                </div>
                <div>
                    <p className="text-gray-300">4-6 guests. Entire home . 5 beds . 3 bath rooms . Wifi . Kitchen . Free Parking</p>
                </div>
                <div className="w-1/6 border-b-2">
                </div>
                <div className="flex justify-between">
                    <div className="flex">
                        <span className="pt-1 text-lg">5.0</span>
                        <img src={star} alt="" />
                        <span className="pt-1 text-lg">(319 reviews)</span>
                    </div>
                    <div className="flex pt-1">
                        <span className="font-semibold">$340</span> <span>/night</span>
                    </div>
                </div>
            </div>
        </div>
    )
}