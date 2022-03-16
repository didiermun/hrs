import Button from "../../Atom/Button";

export default function Booking(){
    return (
        <div className="col-span-9  flex gap-8 bg-white  px-6 py-4 cursor-pointer transition hover:scale-105 duration-500 ease-in-out border-b border-gray-200">
           <div className="flex flex-col gap-2 w-80">
               <div className="flex gap-3">
                    <div className="flex">
                        <img className="h-12 w-12 object-fill rounded-full" src="https://www.verywellmind.com/thmb/279i_VzzrmYt9tFr3Bz0nciExlU=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/laughing-happy-Cultura-RM-Moof-56a9063a5f9b58b7d0f7681c.jpg" alt="" />
                    </div>

                    <div className="flex flex-col">
                        <p className="text-dark font-normal">Email: irabest2016@gmail.com</p>
                        <p className="text-gray-400 font-extralight">Updated 1 day ago</p>
                    </div>
                </div>
           </div>

           <div className="flex flex-col gap-2 w-44">
                <div className="flex flex-col gap-2">
                    <p className="text-dark font-normal">Iradukunda Best Verie</p>
                    <p className="text-gray-400 font-extralight">on 17/09/2007</p>
                </div>
           </div>

           <div className="flex flex-col gap-2 w-32">
                <div className="flex flex-col gap-2">
                    <p className="text-dark font-normal">4 Nights</p>
                    <p className="text-gray-400 font-extralight">from 17/09/2022</p>
                </div>
           </div>

           <div className="flex flex-col gap-2 w-24">
                <div className="flex flex-col gap-2">
                    <p className="text-dark font-normal">$ 405.34</p>
                    <p className="text-gray-400 font-extralight">16.7 for night</p>
                </div>
           </div>

           <div className="flex flex-col gap-2 w-24">
                <div className="flex flex-col gap-2">
                    <p className="text-dark font-normal">Green Shamon</p>
                    <p className="text-gray-400 font-extralight">45'th book</p>
                </div>
           </div>

           <div className="flex flex-col gap-2 w-28">
                <div className="flex flex-col gap-2">
                    <p className="text-dark font-normal">July 15, 2021</p>
                    <p className="text-gray-400 font-extralight">03:15 PM</p>
                </div>
           </div>
        </div>
    )
}