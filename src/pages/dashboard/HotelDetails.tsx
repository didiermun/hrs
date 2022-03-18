
import { useState } from "react"
import Modal from "../../components/Modal"
import NewHotel from "../../components/Molecules/forms/NewHotel"
import NewOffer from "../../components/Molecules/forms/NewOffer"
import NewThingToKnow from "../../components/Molecules/forms/NewThing"
import AdminLayout from "../../layout/AdminLayout"

export default function Dashboard(){
    const [isNewThingOpen, setIsNewThingOpen] = useState<boolean>(true)
    const setOpenNewThing = () => {
        setIsNewThingOpen(!isNewThingOpen)
    }
    return (
        <AdminLayout>
            <div className="w-full bg-[#F7F8FC]">
                <div className="w-full flex flex-col mx-auto py-10 px-4">
                    <div className="w-full flex  flex-wrap gap-4">
                        <NewHotel/>
                        <NewThingToKnow/>
                        <NewOffer/>
                    </div>   
                </div>
                <Modal isOpen={isNewThingOpen} setClose={setOpenNewThing}>
                    <NewThingToKnow />
                </Modal>
            </div>
        </AdminLayout>
    )
}