import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import Button from "./Atom/Button";

export type NewRoomProps = {
    onClose: () => void; 
    roomId: number;
}

export default function DeleteRoom({onClose}:NewRoomProps) {

  function deleteRoom(deleting: boolean) {
      if(deleting){
        toast.success("Room deleted successfully 🔥🔥");
      }
    onClose()
  }

  return (
    <div className="bg-white px-4 py-6 rounded-lg">
      <h1 className="font-semibold px-10 text-2xl w-96">Delete Room</h1>
      <p className="px-8 py-4 mt-4 text-dark font-medium">Are you sure you want to delete this room?</p>
      <div className="flex  mt-3 px-10 mb-4 gap-4">
      <div className="w-full flex flex-col mt-3">
          <Button type="submit" className="border-2 border-dark text-dark bg-transparent" onClick={()=>{deleteRoom(false)}}>Cancel</Button>
        </div>
        <div className="w-full flex flex-col mt-3">
          <Button type="submit" className="border-2 border-secondary" onClick={()=>{deleteRoom(true)}}>Delete</Button>
        </div>
        
      </div>
    </div>
  );
}
