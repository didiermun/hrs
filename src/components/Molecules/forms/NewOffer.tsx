import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { CreateHotelOffer, CreateThingToKnow } from "../../../types/hotel.type";
import Button from "../../Atom/Button";
import Input from "../../Atom/Input";

export type NewHotelOfferProps = {
    onClose: () => void; 
}

export default function NewOffer({onClose}:NewHotelOfferProps){

    function submitForm(e: FormEvent) {
        e.preventDefault();
    
        toast.success("Room created successfully 🔥🔥");
        console.log(offer);
        onClose()
      }
    
    const [offer, setOffer] = useState<CreateHotelOffer>({
        hotel_id: 0,
        offer: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOffer({...offer, [e.target.name] : e.target.value})
    }
    return (
               <form className="bg-white px-4 py-6 rounded-lg self-start w-fit" onSubmit={submitForm}>
                    <h1 className="font-semibold px-10 text-2xl w-96">New Hotel Offer</h1>

                    <div className="flex flex-col mt-12 px-10 mb-4 gap-4">
                        <div className='w-full flex flex-col'>
                            <label htmlFor="" className='text-md py-2'>Offer</label>
                            <Input type="text" name="offer" onChange={handleChange} required value={offer.offer} className='w-96' placeholder='Offer' />
                        </div>
                        <div className='w-full flex flex-col mt-3'>
                            <Button type="submit">Save</Button>
                        </div>
                    </div>
               </form>
    )
}