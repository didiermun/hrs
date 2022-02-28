import more from "../../../files/dashboard/more.svg"
import up from "../../../files/dashboard/up.svg"

export default function OverviewCard(){
return(
<div className="col-span-3 flex flex-col gap-8 rounded-lg border bg-white shadow-lg px-6 py-4 cursor-pointer">
    <div className="flex justify-between">
        <p className="font-semibold">Reservations</p>
        <div className="flex pt-1">
            <img src={more} className="h-4 w-6" alt="more" />
        </div>
    </div>
    <div className="flex justify-between">
        <p className="text-dark">567 Reservations</p>
        <div className="flex gap-2">
            <span className="text-dark">+0.8%</span>
            <img src={up} className="h-4 w-4" alt="" />
        </div>
    </div>
</div>
)
}