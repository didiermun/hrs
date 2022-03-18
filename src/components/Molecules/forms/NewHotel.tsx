import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { CreateHotel } from "../../../types/hotel.type";
import Button from "../../Atom/Button";
import Input from "../../Atom/Input";

export type NewHotelProps = {
    onClose: () => void; 
}

export default function NewHotel({onClose}: NewHotelProps){
    
    const [hotel, setHotel] = useState<CreateHotel>({
        name: '',
        owner_id: 0,
        description: '',
        primary_photo: "",
        other_photos: [],
    });

    function submitForm(e: FormEvent) {
        e.preventDefault();
    
        toast.success("Hotel created successfully 🔥🔥");
        console.log(hotel);
        onClose()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setHotel({...hotel, [e.target.name] : e.target.value})
    }
    return (
               <form className="bg-white px-4 py-6 rounded-lg w-fit" onSubmit={submitForm}>
                    <h1 className="font-semibold px-10 text-2xl w-96">Create Hotel</h1>

                    <div className="flex flex-col mt-12 px-10 mb-4 gap-4">
                        <div className='w-full flex flex-col'>
                            <label htmlFor="" className='text-md py-2'>Hotel Name</label>
                            <Input type="text" name="name" onChange={handleChange} required value={hotel.name} className='w-96' placeholder='name' />
                        </div>
                        <div className='w-full flex flex-col'>
                            <label htmlFor="" className='text-md py-2'>Hotel Name</label>
                            <textarea name="description" onChange={handleChange} required value={hotel.description} className='w-96 px-4 h-24 border-gray-400 py-2 border-2 rounded focus:ring-2 focus:ring-black focus:border-0 focus:outline-none' placeholder='description'> </textarea>
                        </div>
                        <div className='w-full flex flex-col'>
                            <label htmlFor="" className='text-md py-2'>Background Photo</label>
                            <div className="flex justify-center">
                                <div className="mb-3 w-96">
                                    <Input required className="form-control
                                    block
                                    w-full
                                    text-base
                                    font-normal
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white " type="file"/>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex flex-col'>
                            <label htmlFor="" className='text-md py-2'>More images</label>
                            <div className="flex justify-center">
                                <div className="mb-3 w-96">
                                    <Input className="form-control
                                    block
                                    w-full
                                    text-base
                                    font-normal
                                    bg-white bg-clip-padding
                                    transition
                                    ease-in-out
                                    m-0" type="file"  multiple/>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex flex-col mt-3'>
                            <Button type="submit">Save</Button>
                        </div>
                    </div>
               </form>
    )
}