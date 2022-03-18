import { useState } from "react"
import Modal from "../../components/Modal"
import CreateRowButton from "../../components/Molecules/cards/room/CreateRoomButton"
import Room from "../../components/Molecules/cards/room/Room"
import NewRoom from "../../components/NewRoom"
import AdminLayout from "../../layout/AdminLayout"

export default function Rooms(){
    const [newRoomOpen, setNewRoomOpen] = useState<boolean>(false)
    const newRoomStatus = () => {
        setNewRoomOpen(!newRoomOpen)
    }
    return (
        <AdminLayout>
            <div className="w-full bg-[#F7F8FC]">
                <div className="w-full flex justify-center">
                    <p className="font-semibold text-dark text-3xl font-sans">Rooms <span className="font-medium text-xl">(45)</span></p>
                </div>
                <div className="w-full flex flex-col mx-auto py-10 px-4">
                    <div className="w-full gap-4 grid grid-cols-6 lg:grid-cols-9">
                        <CreateRowButton onClick={newRoomStatus}/>
                        <Room/>
                        <Room/>
                        <Room/>
                        <Room/>
                        <Room/>
                        <Room/>
                        <Room/>
                    </div>
                    <Modal isOpen={newRoomOpen} setClose={newRoomStatus}>
                        <NewRoom />
                    </Modal>
                </div>
            </div>
        </AdminLayout>
    )
}