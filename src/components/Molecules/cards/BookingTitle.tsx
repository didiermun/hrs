import Button from "../../Atom/Button";

export default function Booking(){
    return (
        <div className="col-span-9  flex gap-8 rounded-lg bg-white  px-6 py-4 cursor-pointer transition hover:scale-105 duration-500 ease-in-out">
           <div className="w-80">
               <p>Details</p>
           </div>

           <div className="w-44">
               <p>Customer names</p>
           </div>

           <div className="w-32">
               <p>Nights</p>
           </div>

           <div className="w-24">
               <p>Cost</p>
           </div>

           <div className="w-24">
               <p>Room</p>
           </div>
           <div className="w-28">
               <p>Date</p>
           </div>
        </div>
    )
}