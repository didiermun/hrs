import { MouseEventHandler } from "react";

export type ButtonProps = {
    onClick?: (MouseEventHandler<HTMLDivElement> | undefined); 
}

export default function CreateRowButton({onClick}:ButtonProps){
    return (
        <div className="col-span-3  gap-8 rounded-lg bg-white  px-6 py-4 cursor-pointer transition hover:scale-90 duration-500 ease-in-out">

            <div className="h-full flex mx-auto items-center justify-center" onClick={onClick}>
                <div className="flex flex-col gap-1">
                    <div className="px-12 py-8 rounded border-2 border-gray-300 border-dashed">
                        <img className="h-7" src={"/icons/add.svg"} alt="" />
                    </div>
                    <p className=" -pt-0.5 text-lg font-extralight text-center text-gray-600">Add new room</p>
                </div>
            </div>           
        </div>
    )
}