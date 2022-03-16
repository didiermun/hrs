import { useNavigate } from "react-router";

export default function CreateRowButton(){
    const navigate = useNavigate();
    return (
        <div className="col-span-3  gap-8 rounded-lg bg-white  px-6 py-4 cursor-pointer transition hover:scale-90 duration-500 ease-in-out">

            <div className="h-full flex mx-auto items-center justify-center" onClick={()=>navigate('/dashboard/rooms/new')}>
                <div className="flex gap-1">
                    <img className="h-7" src={"/icons/add.svg"} alt="" />
                    <p className=" -pt-0.5 text-lg font-extralight text-center text-gray-600">add room</p>
                </div>
            </div>           
        </div>
    )
}