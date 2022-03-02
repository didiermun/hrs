import Notfound from "../404";
import AdminLayout from "../../layout/AdminLayout"

export default function Dashboard(){
    return (
        <AdminLayout>
        <div className="w-full bg-[#F7F8FC]">
            <Notfound></Notfound>
        </div>
        </AdminLayout>
    )
}