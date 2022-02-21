export default function ReservationCard(){
    return(
        <div className="bg-white border-2  shadow-2xl px-6 rounded-xl py-6 mt-4 w-max">
            <div className="flex justify-between">
                <div className="">
                    <p className="font-semibold"> <span className="text-lg">$75</span> / night</p>
                </div>
                <div className="">
                    <div className="flex gap-2 font-semibold">
                        <div className="flex gap-1 font-semibold">
                            <svg className="mt-1" width="15" height="15" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.00008 1.16675L7.16675 4.83341H10.8334L7.83341 7.16675L8.83341 10.8334L6.00008 8.50008L3.16675 10.8334L4.16675 7.16675L1.16675 4.83341H4.83341L6.00008 1.16675Z" stroke="#DE3151" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <p>5.0</p>
                        </div>
                        <p>.</p>
                        <div>
                            <p className="underline cursor-pointer"> 7 reviews</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded-lg border-2  mt-6">
                <div className="grid grid-cols-2 gap-2 border-b-2 p-2">
                    <div className="col-span-1 border-r-2 w-48 px-2">
                        <label htmlFor="checkIn" className="uppercase font-semibold">Check-In</label>
                        <input type="date" id="checkIn" name="checkIn" className="w-full p-2  border-gray-200 rounded-lg focus:bg-white focus:border-2 focus:border-primary focus:outline-none focus:translate-w-20 focus:transition-all" />
                    </div>
                    <div className="col-span-1 w-48">
                        <label htmlFor="checkOut" className="uppercase font-semibold">Check-Out</label>
                        <input type="date" id="checkOut" name="checkOut" className="w-full p-2  border-gray-200 rounded-lg focus:bg-white focus:border-2 focus:border-primary focus:outline-none focus:translate-w-20 focus:transition-all" />
                    </div>
                </div>
                <div className="p-3 flex flex-col gap-2">
                    <label htmlFor="guests" className="uppercase font-semibold">Guests</label>
                    <select className=" w-full mb-3 font-sans block px-4 py-2 text-xl appearance-none font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none focus:transition-all">
                        <option selected>--- guests ----</option>
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                    </select>
                </div>
            </div>
            <div className="w-full py-2">
                <button className="w-full bg-secondary font-semibold py-3 px-4 rounded-lg"> <span className="text-white">Reserve</span></button>
            </div>
            <div className="w-full">
                <p className="text-center text-gray-300">You won't be charged yet</p>
            </div>

            <div className="border-b-3 w-full px-2 mt-6 text-xl font-medium">
                <div className="flex justify-between mb-2">
                    <p>$79 * 8 nights</p>
                    <p>$560</p>
                </div>
                <div className="flex justify-between mb-2">
                    <p>Weekly discounts</p>
                    <p className="text-primary">- $24</p>
                </div>
                <div className="flex justify-between mb-2">
                    <p>Cleaning fee</p>
                    <p>$50</p>
                </div>
                <div className="flex justify-between mb-2">
                    <p>Service fee</p>
                    <p>$87</p>
                </div>
                <div className="flex justify-between mb-2">
                    <p>Taxes fee</p>
                    <p>$47</p>
                </div>
            </div>
            <div className="py-2 w-full px-2 flex justify-between">
                <p className="font-semibold text-2xl">Total</p>
                <p className="font-semibold text-2xl">$601</p>
            </div>
        </div>
    )
}