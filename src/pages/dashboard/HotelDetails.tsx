
import NewHotel from "../../components/Molecules/forms/NewHotel"
import AdminLayout from "../../layout/AdminLayout"

export default function Dashboard(){
    return (
        <AdminLayout>
            <div className="w-full bg-[#F7F8FC]">
                <div className="w-full flex flex-col mx-auto py-10 px-4">
                    <div className="w-full gap-4">
                        <NewHotel/>
                    </div>   
                </div>
            </div>
        </AdminLayout>
    )
}