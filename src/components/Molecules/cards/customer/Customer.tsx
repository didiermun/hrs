import more from "../../../../files/dashboard/more.svg"

export default function Customer(){
    return (
        <div className="col-span-9  flex gap-8 bg-white  px-6 py-4 cursor-pointer transition hover:scale-105 duration-500 ease-in-out border-b border-gray-200">
           <div className="flex flex-col gap-2 w-80">
               <div className="flex gap-3">
                    <div className="flex">
                        <img className="h-12 w-12 object-fill rounded-full" src="https://www.verywellmind.com/thmb/279i_VzzrmYt9tFr3Bz0nciExlU=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/laughing-happy-Cultura-RM-Moof-56a9063a5f9b58b7d0f7681c.jpg" alt="" />
                    </div>

                    <div className="flex flex-col">
                        <p className="text-dark font-normal">Munyana Anitha</p>
                        <p className="text-gray-400 font-extralight">Born in December 2004</p>
                    </div>
                </div>
           </div>

           <div className="flex flex-col gap-2 w-44">
                <div className="flex flex-col gap-2">
                    <p className="text-dark font-normal">anitha2004@gmail.com</p>
                    <p className="text-gray-400 font-extralight">updated 1 month ago</p>
                </div>
           </div>

           <div className="flex flex-col gap-2 w-36">
                <div className="flex flex-col gap-2">
                    <p className="text-dark font-normal">+250 783432321</p>
                    <p className="text-gray-400 font-extralight">Rwanda contact</p>
                </div>
           </div>

           <div className="flex flex-col gap-2 w-24">
                <div className="flex flex-col gap-2">
                    <p className="text-dark font-normal">8</p>
                    <p className="text-gray-400 font-extralight">5th highest</p>
                </div>
           </div>

           <div className="flex flex-col gap-2 w-28">
                <div className="flex flex-col gap-2">
                    <p className="text-dark font-normal">July 15, 2021</p>
                    <p className="text-gray-400 font-extralight">03:15 PM</p>
                </div>
           </div>

           <div className="flex flex-col gap-2 w-24">
                <div className="flex flex-col gap-2">
                    <div className="flex">
                        <img src={more} className="h-4 w-6" alt="more" />
                    </div>
                    <p className="text-gray-400 font-extralight"></p>
                </div>
           </div>

           
        </div>
    )
}