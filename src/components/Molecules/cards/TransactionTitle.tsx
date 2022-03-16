export default function TransactionTitle(){
    return (
        <div className="col-span-9  flex gap-8 rounded-lg bg-white  px-6 py-4 cursor-pointer transition hover:scale-105 duration-500 ease-in-out">
           <div className="w-80">
               <p>Details</p>
           </div>

           <div className="w-48">
               <p>Customer names</p>
           </div>

           <div className="w-44">
               <p>Provider</p>
           </div>

           <div className="w-28">
               <p>Amount</p>
           </div>

           <div className="w-32">
               <p>Date</p>
           </div>
        </div>
    )
}