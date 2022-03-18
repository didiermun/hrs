
import { useState } from "react"
import Modal from "../../components/Modal"
import NewHotel from "../../components/Molecules/forms/NewHotel"
import NewOffer from "../../components/Molecules/forms/NewOffer"
import NewThingToKnow from "../../components/Molecules/forms/NewThing"
import AdminLayout from "../../layout/AdminLayout"

export default function Dashboard(){

    const [createHotel, setCreateHotel] = useState<boolean>(false);
    const [createThing, setCreateThing] = useState<boolean>(false)
    const [createOffer, setCreateOffer] = useState<boolean>(false);

    const setCreatingHotel = () => {
        setCreateHotel(!createHotel);
    }

    const setCreatingOffer = () => {
        setCreateOffer(!createOffer);
    }

    const setCreatingThing = () => {
        setCreateThing(!createThing)
    }
    return (
        <AdminLayout>
            <div className="w-full bg-[#F7F8FC]">
                <div className="w-full flex flex-col mx-auto py-4 px-4">
                    <div className="w-full flex flex-col gap-10 bg-white px-4 py-4 rounded pb-12">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-xl font-semibold">Hotel Details</h1>
                            <p className="text-dark">No hotel found</p>
                            <p className="underline cursor-pointer" onClick={setCreatingHotel}>+Create Hotel</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h1 className="text-xl font-semibold">Things To know</h1>
                            <p className="text-dark">No things to know added</p>
                            <p className="underline cursor-pointer" onClick={setCreatingThing}>+Add things to know</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h1 className="text-xl font-semibold">Hotel Offers</h1>
                            <p className="text-dark">No offers to know added</p>
                            <p className="underline cursor-pointer" onClick={setCreatingOffer}>+Add Hotel Offer</p>
                        </div>
                        {/* <NewHotel/>
                        <NewThingToKnow/>
                        <NewOffer/> */}
                    </div>   
                </div>
                <Modal isOpen={createHotel} setClose={setCreatingHotel}>
                    <NewHotel onClose={setCreatingHotel} />
                </Modal>
                <Modal isOpen={createThing } setClose={setCreatingThing}>
                    <NewThingToKnow onClose={setCreatingThing} />
                </Modal>
                <Modal isOpen={createOffer} setClose={setCreatingOffer}>
                    <NewOffer onClose={setCreatingOffer} />
                </Modal>
            </div>
        </AdminLayout>
    )
}