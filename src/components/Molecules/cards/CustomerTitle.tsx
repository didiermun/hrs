export default function CustomerTitle(){
    return (
        <div className="col-span-9  flex gap-8 rounded-lg bg-white  px-6 py-4 cursor-pointer transition hover:scale-105 duration-500 ease-in-out">
           <div className="w-80">
               <p>Full names</p>
           </div>

           <div className="w-44">
               <p>Email</p>
           </div>

           <div className="w-36">
               <p>Phone</p>
           </div>

           <div className="w-24">
               <p>Bookings</p>
           </div>

           <div className="w-28">
               <p>Date joined</p>
           </div>

           <div className="w-24">
               <p>Action</p>
           </div>
           
        </div>
    )
}