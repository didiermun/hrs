import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { CreateThingToKnow } from "../../../types/hotel.type";
import Button from "../../Atom/Button";
import Input from "../../Atom/Input";

export type NewHotelThingProps = {
    onClose: () => void; 
}

export default function NewThingToKnow({onClose}:NewHotelThingProps){
    
    const [hotel, setHotel] = useState<CreateThingToKnow>({
        hotel_id: 0,
        text: "",
        type: ""
    });

    function submitForm(e: FormEvent) {
        e.preventDefault();
    
        toast.success("Thing created successfully 🔥🔥");
        console.log(hotel);
        onClose()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHotel({...hotel, [e.target.name] : e.target.value})
    }
    return (
               <form className="bg-white px-4 py-6 rounded-lg self-start w-fit" onSubmit={submitForm}>
                    <h1 className="font-semibold px-10 text-2xl w-96">New Thing to know</h1>

                    <div className="flex flex-col mt-12 px-10 mb-4 gap-4">
                        <div className='w-full flex flex-col'>
                            <label htmlFor="" className='text-md py-2'>Type</label>
                            <Input type="text" name="type" onChange={handleChange} required value={hotel.type} className='w-96' placeholder='Type' />
                        </div>
                        <div className='w-full flex flex-col'>
                            <label htmlFor="" className='text-md py-2'>Text</label>
                            <Input type="text" name="text" onChange={handleChange} required value={hotel.text} className='w-96' placeholder='Value' />
                        </div>
                        <div className='w-full flex flex-col mt-3'>
                            <Button type="submit">Save</Button>
                        </div>
                    </div>
               </form>
    )
}