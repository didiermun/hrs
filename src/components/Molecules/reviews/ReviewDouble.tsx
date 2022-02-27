export default function ReviewDouble(){
    return (
        <div className="col-span-3 grid grid-cols-5 gap-8">
            <p className="col-span-1">Accurracy</p>
            <div className="col-span-3 flex gap-3">
                <div className="w-4/5 rounded bg-gray-200 h-2 mt-3">
                    <div className="w-4/5 bg-gray-900 rounded h-2"></div> 
                </div>
                <p className="col-span-1 text-sm font-medium mt-1">4.5</p>
            </div>
        </div>
    )
}