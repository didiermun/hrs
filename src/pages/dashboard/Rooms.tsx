import { useState } from "react"
import DeleteRoom from "../../components/DeleteRoom"
import Modal from "../../components/Modal"
import CreateRowButton from "../../components/Molecules/cards/room/CreateRoomButton"
import Room from "../../components/Molecules/cards/room/Room"
import NewRoom from "../../components/NewRoom"
import AdminLayout from "../../layout/AdminLayout"



export default function Rooms(){
    const [newRoomOpen, setNewRoomOpen] = useState<boolean>(false)
    const [deleteRoom, setDeleteRoom] = useState<boolean>(false);
    const [id, setId] = useState<number | undefined>();
    const newRoomStatus = () => {
        setNewRoomOpen(!newRoomOpen)
    }
    const showDeleteAlert = () => {
        setDeleteRoom(!deleteRoom)
    }

    const deleteRoomAlert = (id: number) =>{
        setId(id);
        showDeleteAlert()
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
                        <Room deleteAction={deleteRoomAlert}/>
                        <Room deleteAction={deleteRoomAlert}/>
                        <Room deleteAction={deleteRoomAlert}/>
                        <Room deleteAction={deleteRoomAlert}/>
                        <Room deleteAction={deleteRoomAlert}/>
                        <Room deleteAction={deleteRoomAlert}/>
                        <Room deleteAction={deleteRoomAlert}/>
                    </div>
                    <Modal isOpen={newRoomOpen} setClose={newRoomStatus}>
                        <NewRoom onClose={newRoomStatus} />
                    </Modal>
                    <Modal isOpen={deleteRoom} setClose={showDeleteAlert}>
                        <DeleteRoom onClose={showDeleteAlert} roomId={3} />
                    </Modal>
                </div>
            </div>
        </AdminLayout>
    )
}