import { useState } from "react";
import { CreateHotelOffer, CreateThingToKnow } from "../../../types/hotel.type";
import Button from "../../Atom/Button";
import Input from "../../Atom/Input";

export default function NewOffer(){
    
    const [hotel, setHotel] = useState<CreateHotelOffer>({
        hotel_id: 0,
        offer: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHotel({...hotel, [e.target.name] : e.target.value})
    }
    return (
               <div className="bg-white px-4 py-6 rounded-lg self-start w-fit">
                    <h1 className="font-semibold px-10 text-2xl w-96">New Hotel Offer</h1>

                    <div className="flex flex-col mt-12 px-10 mb-4 gap-4">
                        <div className='w-full flex flex-col'>
                            <label htmlFor="" className='text-md py-2'>Offer</label>
                            <Input type="text" name="offer" onChange={handleChange} required value={hotel.offer} className='w-96' placeholder='Offer' />
                        </div>
                        <div className='w-full flex flex-col mt-3'>
                            <Button>Save</Button>
                        </div>
                    </div>
               </div>
    )
}